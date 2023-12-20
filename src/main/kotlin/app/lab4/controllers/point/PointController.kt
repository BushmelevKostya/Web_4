package app.lab4.controllers.point

import app.lab4.controllers.user.AuthorizationService
import jakarta.transaction.Transactional
import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import kotlin.math.pow
import kotlin.math.sqrt

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
        var point: Point? = null
        if (login != null) {
            point = Point(x, y, r, login)
        }
        if (point != null) {
            point.state = checkScope(x, y, r)
            pointRepository?.save(point)
        }
        return point
    }

    private fun checkScope(x: Float, y: Float, r: Float): Boolean {
        var resCheck = false
        if (x >= 0 && y >= 0) resCheck = circle(x, y, r)
        else if (x <= 0 && y >= 0) resCheck = square(x, y, r)
        else if (x >= 0 && y <= 0) resCheck = triangle(x, y, r)
        return resCheck
    }

    private fun triangle(x: Float, y: Float, r: Float): Boolean {
        return y >= x - r / 2
    }

    private fun circle(x: Float, y: Float, r: Float): Boolean {
        return y <= sqrt((r).toDouble().pow(2.0) - x.toDouble().pow(2.0))
    }

    private fun square(x: Float, y: Float, r: Float): Boolean {
        return x >= -r && y <= r
    }

    @GetMapping("/request/points")
    fun getPoints(@RequestHeader("Authorization") authorization: String) : List<Point>? {
        return authorizationService?.checkUser(authorization)?.let { pointRepository?.getAllByOwner(it) }
    }

    @Transactional
    @DeleteMapping("request/points")
    fun deletePoints(@RequestHeader("Authorization") authorization: String) {
        val login = authorizationService?.checkUser(authorization)
        if (login != null) {
            pointRepository?.deletePointsByOwner(login)
        }
    }
}