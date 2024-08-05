package com.app.Service;

import com.app.Model.Equipement;

import java.util.List;

public interface EquipementService {
    Equipement CreateEquipement(Equipement equipement);
    List<Equipement> getAllEquipements();
    void deleteEquipements(Long idEquipement) ;
    public Equipement updateEquipements(Equipement equipement);
}
