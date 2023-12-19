package app.lab4.controllers.point

import app.lab4.controllers.user.AuthorizationService
import jakarta.transaction.Transactional
import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3001"])
@RestController
@AllArgsConstructor
class PointController {
    @Autowired
    val pointRepository: PointRepository? = null
    @Autowired
    val authorizationService: AuthorizationService? = null
    @PostMapping("/request/points")
    fun addPoint(
        @RequestParam("x") x: Float,
        @RequestParam("y") y: Float,
        @RequestParam("r") r: Float,
        @RequestHeader("Authorization") authorization: String
    ): Point? {
        val login = authorizationService?.checkUser(authorization)
        val point: Point? = null
        if (login != null) {
            val point : Point = Point(x, y, r, login)
        }
        if (point != null) {
            pointRepository?.save(point)
        }
        return point
    }
    @GetMapping("/request/points")
    fun getPoints(@RequestHeader("Authorization") authorization: String) : List<Point>? {
        return pointRepository?.getPointByOwner("")
    }
    @Transactional
    @DeleteMapping("request/points")
    fun deletePoints(@RequestHeader("Authorization") authorization: String) {
        val login = "Root"
        pointRepository?.deletePointsByOwner(login)
    }
}