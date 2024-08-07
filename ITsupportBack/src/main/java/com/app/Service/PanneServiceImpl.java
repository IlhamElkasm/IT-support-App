package com.app.Service;

import com.app.Model.Panne;
import com.app.Repository.EquipementRepository;
import com.app.Repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Autowired
    private EquipementRepository equipementRepository;

//    @Autowired
//    private HistoriqueRepository historiqueRepository;

    public Panne addPanne(Panne panne) {
        Panne savedPanne = panneRepository.save(panne);

//        Historique historique = new Historique();
//        historique.setDateHistorique(LocalDate.now());
//        historique.setPanne(savedPanne);
//        historiqueRepository.save(historique);

        return savedPanne;
    }

    public Panne updatePanne(Long id, Panne panneDetails) {
        Panne panne = panneRepository.findById(id).orElseThrow(() -> new RuntimeException("Panne not found"));
        panne.setDescription(panneDetails.getDescription());
        panne.setEtatPanne(panneDetails.getEtatPanne());
        Panne updatedPanne = panneRepository.save(panne);

//        Historique historique = new Historique();
//        historique.setDateHistorique(LocalDate.now());
//        historique.setPanne(updatedPanne);
//        historiqueRepository.save(historique);

        return updatedPanne;
    }

    @Override
    public List<Panne> getAllPanne() {
        return  panneRepository.findAll();
    }

    @Override
    public void deletePanne(Long idPann) {
        equipementRepository.deleteById(idPann);
    }

}
