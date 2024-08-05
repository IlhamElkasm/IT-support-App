package com.app.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class TechnicienIT extends  Personne{

    // Constructeur avec les champs de la superclasse
    public TechnicienIT(String nom, String email, String password) {
        super(nom, email, password, Role.TECHNICIEN);
    }
}
