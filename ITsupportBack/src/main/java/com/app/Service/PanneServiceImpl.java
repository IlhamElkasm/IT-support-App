package com.app.Service;

import com.app.Model.Equipement;
import com.app.Model.EtatPanne;
import com.app.Model.Panne;
import com.app.Repository.EquipementRepository;
import com.app.Repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Autowired
    private EquipementRepository equipementRepository;

    @Override
    public Panne AjoutPanne(Panne panne, Long idEquipement) {
        Equipement equipement = equipementRepository.findById(idEquipement)
                .orElseThrow(() -> new IllegalArgumentException("Equipement non trouvé"));
        panne.setEquipement(equipement);
        panne.setDateSignalement(LocalDate.now());
        panne.setEtatPanne(EtatPanne.EN_COURS); // Par exemple, un état initial
        return panneRepository.save(panne);
    }
}
