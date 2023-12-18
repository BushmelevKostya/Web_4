package app.lab4.controllers.user

import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@AllArgsConstructor
class UserController {
    @Autowired
    val authService: AuthorizationService? = null

    @PostMapping("security/register")
    fun register(
        @RequestParam("login") login: String,
        @RequestParam("password") password: String
    ) {
        authService?.registerUser(login, password)
    }


    @PostMapping("/security/login")
    fun login(@RequestHeader("Authorization") authorization: String) {
        authService?.checkUser(authorization)
    }
}