package app.lab4.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

    @RestController
    @RequestMapping("/hello-world")
class HelloWorldController {
    @GetMapping
    fun sayHello() : String {
        return "Hello World!"
    }
}