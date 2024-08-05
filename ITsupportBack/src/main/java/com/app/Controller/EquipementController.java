package com.app.Controller;

import com.app.Model.Equipement;
import com.app.Service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth/Admin")
public class EquipementController {

    @Autowired
    private EquipementService equipementService;

    @PostMapping("/CreateEquipement")
    public Equipement creerEvent(@RequestBody Equipement equipement) {

        return equipementService.CreateEquipement(equipement);
    }
}
