package com.app.Service;

import com.app.Model.Equipement;
import com.app.Model.Panne;

public interface PanneService {

    Panne AjoutPanne(Panne panne, Long idEquipement);
}
