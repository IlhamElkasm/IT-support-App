package com.app.Repository;

import com.app.Model.Equipement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EquipementRepository extends JpaRepository<Equipement, Long> {

    Optional<Equipement> findById(Long idEquipement);
}
