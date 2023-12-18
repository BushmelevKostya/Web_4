package app.lab4.controllers.user

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import lombok.Data
import lombok.NoArgsConstructor

@Entity
@Data
@NoArgsConstructor
class AppUser {
    @Id
    @GeneratedValue
    val id: Long? = null
    @NotNull
    @NotBlank
    @Column(unique = true)
    var login: String
    @NotNull
    @NotBlank
    var password: String
    @NotNull
    @NotBlank
    var salt: String

    constructor(login: String, password: String, salt: String) {
        this.login = login
        this.password = password
        this.salt = salt
    }
}