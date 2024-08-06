package com.app.Controller;

import com.app.Model.Equipement;
import com.app.Model.Panne;
import com.app.Service.EquipementService;
import com.app.Service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class PanneController {
    @Autowired
    private PanneService panneService;

    @PostMapping("/AjoutPanne/{idEquipement}")
    public Panne AjoutPanne(@RequestBody Panne panne, @PathVariable Long idEquipement) {
        return panneService.AjoutPanne(panne, idEquipement);
    }

}
