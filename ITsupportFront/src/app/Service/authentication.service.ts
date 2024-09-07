import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jwt } from '../Model/Jwt';
import { Utilisateur } from '../Model/Utilisateur';
import { Router } from '@angular/router';
import { Technicien } from '../Model/Technicien';

const BASE_URL = "http://localhost:8089/api/v1/auth/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient, private router: Router) { }

  register(singRequest: any): Observable<Jwt> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Jwt>(`${BASE_URL}Admin/register`, singRequest, { headers });
}

registertechnicien(singRequest: any): Observable<Jwt> {
  const headers = this.createAuthorizationHeader();
  return this.http.post<Jwt>(`${BASE_URL}Admin/registerTechnicien`, singRequest, { headers });
}

  login(email: string, password: string): Observable<any> {
    const loginRequest = { email, password };
    return this.http.post<any>(`${BASE_URL}authenticate`, loginRequest);
  }

  getUserCount(): Observable<number> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<number>(`${BASE_URL}Admin/count`, { headers });
  }


  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
        return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
        return undefined;
    }
}

  

  getAllUser(): Observable<Utilisateur[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Utilisateur[]>(`${BASE_URL}Admin/AllUser`, { headers });
  }

  getAllTechnicien(): Observable<Technicien[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Technicien[]>(`${BASE_URL}Admin/getAllTechnicien`, { headers });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
