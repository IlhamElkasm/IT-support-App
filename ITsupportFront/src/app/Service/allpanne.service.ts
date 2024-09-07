import { Injectable } from '@angular/core';
import { Equipement } from '../Model/equipement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllpanneService {

  constructor( private   httpcl:HttpClient) {  }

  getAllpanne(equipement : Equipement)<Observable>{

  }

}
