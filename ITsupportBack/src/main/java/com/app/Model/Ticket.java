package com.app.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTi;
    private String description;
    private LocalDate dateCréation;

    @Enumerated(EnumType.STRING)
    private EtatTicket etatTicket;
    @ManyToOne
    @JoinColumn(name = "idPanne", nullable = false)
    private Panne panne;

    @ManyToOne
    @JoinColumn(name = "idEquipement", nullable = false)
    private Equipement equipement;

    @ManyToOne
    @JoinColumn(name = "iduser", nullable = false)
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "idtechnicien", nullable = false)
    private TechnicienIT technicien;
}
