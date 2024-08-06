package com.app.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPanne;
    private String description;
    private EtatPanne etatPanne;

    @OneToMany(mappedBy = "panne")
    private List<Historique> historiques;
}
