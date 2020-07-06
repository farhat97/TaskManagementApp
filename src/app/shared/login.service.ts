import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { IUser } from './interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class LoginService implements OnInit {

    private baseUrl = "https://localhost:44364/token";
    public isLoggedIn = false;

    private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public currentUser: Observable<any>;

    constructor(private httpClient: HttpClient) { }
    
    public get currentUserValue() {
        if(this.currentUserSubject != null) {
            return this.currentUserSubject.value;
        }
        return null;
    }

    ngOnInit(): void {
        
    }

    // pass username and password through loginObj
    attemptLogin(loginObj) {
        
        loginObj["grant_type"] = "password";

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = {
            headers: headers
        }

        // put information in body
        let body;
        body = `Username=${loginObj.Username}&Password=${loginObj.Password}&grant_type=${loginObj.grant_type}`;

        return this.httpClient
                   .post(this.baseUrl, 
                         body, options)
                   .pipe(map(user => {
                       console.log('sending login data');
                       localStorage.setItem('currentUser', JSON.stringify(user));
                       this.currentUserSubject.next(user);
                       console.log('current user subj: ', this.currentUserSubject);
                       return user;
                   }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}