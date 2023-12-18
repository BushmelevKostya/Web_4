package app.lab4.controllers.user

import jakarta.validation.constraints.NotNull
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
    fun findUserByLogin(@NotNull login: String)
}