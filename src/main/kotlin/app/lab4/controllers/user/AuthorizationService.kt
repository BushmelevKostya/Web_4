package app.lab4.controllers.user

import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.security.MessageDigest
import java.util.*
import kotlin.random.Random

@Service
@AllArgsConstructor
class AuthorizationService(@Value("\${PEPPER}") val pepper: String) {
    val characters = """ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?:@{!$}%^&*()_+?`~"""
    @Autowired
    val userRepository: UserRepository? = null

    fun registerUser(login: String, password: String) {
        if (userRepository?.findUserByLogin(login) != null) {
            throw ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Login already exist!")
        }
        if (password.isBlank()) {
            throw ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Password can't be empty!")
        }
        val salt: String = generateSalt()
        val securityPassword = pepper + password + salt
        var appUser = AppUser(login, createHash(securityPassword), salt)
        println(userRepository == null)
        userRepository?.save(appUser)
    }

    fun checkUser(authorization: String) : String {
        if (!authorization.startsWith("Basic")) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad authentication method")
        }
        var login: String
        var password: String
        try {
            var base64 = authorization.substring(6)
            val data: List<String> = String(Base64.getDecoder().decode(base64)).split(":", limit = 2)
            if (data.size != 2) {
                throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad authentication data")
            }
            login = data[0]
            password = data[1]
        } catch (exception: IllegalArgumentException) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad base64")
        }

        val appUser: AppUser? = userRepository?.findUserByLogin(login)

        val finalPassword: String = pepper + password + appUser?.salt
        if (!appUser?.password.equals(createHash(finalPassword))) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Incorrect password")
        }
        return login
    }

    fun generateSalt() : String {
        return (1..10)
            .map { Random.nextInt(0, characters.length) }
            .map(characters::get)
            .joinToString("")
    }

    fun createHash(password: String) : String {
        val passwordBytes: ByteArray = password.toByteArray()
        val messageDigest : MessageDigest = MessageDigest.getInstance("SHA-512")
        val hashBytes : ByteArray = messageDigest.digest(passwordBytes)
        val stringBuilder: StringBuilder = StringBuilder()
        for (byte : Byte in hashBytes) {
            stringBuilder.append(String.format("%02x", byte))
        }
        return stringBuilder.toString()
    }
}