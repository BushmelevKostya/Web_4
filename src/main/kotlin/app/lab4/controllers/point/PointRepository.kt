package app.lab4.controllers.point

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointRepository : JpaRepository<Point, Long> {
    fun getPointByOwner(owner : String) : List<Point>
    fun deletePointsByOwner(owner : String)
}