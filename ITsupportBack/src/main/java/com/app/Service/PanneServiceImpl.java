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

    @Override
    public Panne addPanne(Panne panne) {
        return panneRepository.save(panne);
    }
    @Override
    public Panne updatePanne(Long idPann, Panne panneDetails) {
        Optional<Panne> optionalPanne = panneRepository.findById(idPann);
        if (optionalPanne.isPresent()) {
            Panne panne = optionalPanne.get();
            panne.setDescription(panneDetails.getDescription());
            panne.setEtatPanne(panneDetails.getEtatPanne());
            return panneRepository.save(panne);
        } else {
            throw new RuntimeException("Panne not found");
        }
    }
    @Override
    public void deletePanne(Long idPann) {
        panneRepository.deleteById(idPann);
    }

    @Override
    public List<Historique> getHistoriqueByEquipement(Long idEquipement) {
        return historiqueRepository.findByEquipementIdEquipement(idEquipement);
    }

}
