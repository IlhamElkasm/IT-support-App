import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jwt } from '../Module/Jwt';
import { Utilisateur } from '../Module/Utilisateur';
import { Router } from '@angular/router';

const BASE_URL = "http://localhost:8089/api/v1/auth/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient, private router: Router) { }

  register(singRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${BASE_URL}ADMIN/register`, singRequest);
  }

  login(email: string, password: string): Observable<any> {
    const loginRequest = { email, password };
    return this.http.post<any>(`${BASE_URL}authenticate`, loginRequest);
  }

  getUserCount(): Observable<number> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<number>(`${BASE_URL}ADMIN/count`, { headers });
  }
  
  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }

  getAllUser(): Observable<Utilisateur[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Utilisateur[]>(`${BASE_URL}ADMIN/AllUser`, { headers });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
