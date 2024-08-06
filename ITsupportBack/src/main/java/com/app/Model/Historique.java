package com.app.Model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Historique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idhistorique;
    private LocalDate dateHistorique;

    @ManyToOne
    @JoinColumn(name = "idEquipement", nullable = false)
    private Equipement equipement;

    @ManyToOne
    @JoinColumn(name = "idPanne", nullable = false)
    private Panne panne;
}
