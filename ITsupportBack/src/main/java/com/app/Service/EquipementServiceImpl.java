package com.app.Service;

import com.app.Model.Equipement;
import com.app.Repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipementServiceImpl implements EquipementService {

    @Autowired
    private EquipementRepository equipementRepository;
    @Override
    public Equipement CreateEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    @Override
    public List<Equipement> getAllEquipements() {
        return equipementRepository.findAll();
    }

    @Override
    public void deleteEquipements(Long idEquipement) {
        equipementRepository.deleteById(idEquipement);
    }

    @Override
    public Equipement updateEquipements(Equipement equipement) {
        return null;
    }
}
