package com.app.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPanne;
    private String description;
    private LocalDate dateSignalement;
    private EtatPanne etatPanne;

    @ManyToOne
    @JoinColumn(name = "idEquipement", nullable = false)
    private Equipement equipement;
}
