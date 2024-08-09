import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jwt } from '../Module/Jwt';
import { Utilisateur } from '../Module/Utilisateur';
import { Router } from '@angular/router';

const url = ["http://localhost:8089/api/v1/auth/"]

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: any;
  constructor(private http: HttpClient,private router: Router) { }

  register(singRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(url+'Admin/register', singRequest)
  }
  login(loginRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(url+'authenticate', loginRequest)
  }
  getUserCount(): Observable<number> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<number>(url + 'Admin/count', { headers });
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
    return this.http.get<Utilisateur[]>(url+ `Admin/AllUser`, { headers });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
