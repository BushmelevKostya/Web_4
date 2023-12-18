package app.lab4.controllers.user

import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import kotlin.random.Random

@Service
@AllArgsConstructor
class AuthorizationService(@Value("\${PEPPER}") val pepper: String) {
    val characters = """ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?:@{!$}%^&*()_+?`~"""
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
        var user = User(login, createHash(securityPassword), salt)
        userRepository?.save(user)
    }

    fun checkUser(authorization: String) {

    }

    fun generateSalt() : String {
        return (1..10)
            .map { Random.nextInt(0, characters.length) }
            .map(characters::get)
            .joinToString("")
    }

    fun createHash(password: String) : String {
        if (!password.startsWith("Basic")) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Not valid authentication method")
        }
    }
}