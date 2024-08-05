package com.app.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Utilisateur extends  Personne{

    public Utilisateur(String nom, String email, String password) {
        super(nom, email, password, Role.USER);
    }
}
