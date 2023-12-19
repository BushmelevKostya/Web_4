package app.lab4.controllers.point

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointRepository : JpaRepository<Point, Long> {
    fun getPointByOwnerAndId(owner : String, id: Long) : Point
    fun deletePointsByOwner(owner : String)
    fun getAllByOwner(owner: String) : List<Point>
}