package com.app.Service;

import com.app.Model.Equipement;
import com.app.Model.EtatPanne;
import com.app.Model.Historique;
import com.app.Model.Panne;
import com.app.Repository.EquipementRepository;
import com.app.Repository.HistoriqueRepository;
import com.app.Repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Autowired
    private EquipementRepository equipementRepository;

    @Autowired
    private HistoriqueRepository historiqueRepository;

    public Panne addPanne(Panne panne, Long equipementId) {
        Equipement equipement = equipementRepository.findById(equipementId).orElseThrow(() -> new RuntimeException("Equipement not found"));
        panne.setEquipement(equipement);
        Panne savedPanne = panneRepository.save(panne);

        Historique historique = new Historique();
        historique.setDateHistorique(LocalDate.now());
        historique.setPanne(savedPanne);
        historique.setEquipement(equipement);
        historiqueRepository.save(historique);

        return savedPanne;
    }

    public Panne updatePanne(Long id, Panne panneDetails) {
        Panne panne = panneRepository.findById(id).orElseThrow(() -> new RuntimeException("Panne not found"));
        panne.setDescription(panneDetails.getDescription());
        panne.setEtatPanne(panneDetails.getEtatPanne());
        panne.setEquipement(panneDetails.getEquipement());
        Panne updatedPanne = panneRepository.save(panne);

        Historique historique = new Historique();
        historique.setDateHistorique(LocalDate.now());
        historique.setPanne(updatedPanne);
        historique.setEquipement(panne.getEquipement());
        historiqueRepository.save(historique);

        return updatedPanne;
    }

    public void deletePanne(Long id) {
        Panne panne = panneRepository.findById(id).orElseThrow(() -> new RuntimeException("Panne not found"));
        panneRepository.delete(panne);

        Historique historique = new Historique();
        historique.setDateHistorique(LocalDate.now());
        historique.setPanne(panne);
        historique.setEquipement(panne.getEquipement());
        historiqueRepository.save(historique);
    }

    public List<Historique> getHistoriqueByEquipement(Long idEquipement) {
        return historiqueRepository.findByEquipementIdEquipement(idEquipement);
    }

}
