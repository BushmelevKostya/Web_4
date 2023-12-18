package app.lab4.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import kotlin.random.Random

@RestController
    @RequestMapping("/hello-world")
class HelloWorldController {
    val characters = """ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?:@{!$}%^&*()_+?`~"""
    @GetMapping
    fun sayHello() : String {
        return generateSalt()
    }

        fun generateSalt() : String {
            return (1..10)
                .map { Random.nextInt(0, characters.length) }
                .map(characters::get)
                .joinToString("")
        }
}