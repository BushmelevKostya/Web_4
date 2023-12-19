package app.lab4.controllers.point

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import lombok.Data;
import lombok.NoArgsConstructor
import java.io.Serializable

@Entity
@Data
@NoArgsConstructor
class Point : Serializable {
    @Id
    @GeneratedValue
    val id: Long? = null
    var x: Float = 0.0f
    var y: Float = 0.0f
    var r: Float = 0.0f
    var state: Boolean = false
    var owner : String = ""

    constructor(x: Float, y: Float, r: Float, owner: String) {
        this.x = x
        this.y = y
        this.r = r
        this.owner = owner
    }
}