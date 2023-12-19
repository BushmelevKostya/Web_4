package app.lab4.controllers.user

import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3001"])
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
        println(login)
        println(password)
        authService?.registerUser(login, password)
    }


    @PostMapping("/security/login")
    fun login(@RequestHeader("Authorization") authorization: String) {
        authService?.checkUser(authorization)
    }
}