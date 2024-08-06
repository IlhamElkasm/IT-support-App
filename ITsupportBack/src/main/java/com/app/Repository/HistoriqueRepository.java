package com.app.Repository;

import com.app.Model.Historique;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistoriqueRepository extends JpaRepository<Historique, Long> {
    List<Historique> findByEquipementIdEquipement(Long idEquipement);
}
