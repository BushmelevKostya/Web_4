package app.lab4.controllers.point

import jakarta.transaction.Transactional
import lombok.AllArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@AllArgsConstructor
class PointController {
    @Autowired
    val pointRepository: PointRepository? = null
    @PostMapping("/request/points")
    fun addPoint(
        @RequestParam("x") x: Float,
        @RequestParam("y") y: Float,
        @RequestParam("r") r: Float,
        @RequestHeader("Authorization") authorization: String
    ): Point {
        val login = "Root"
        val point : Point = Point(x, y, r, login)
        pointRepository?.save(point)
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