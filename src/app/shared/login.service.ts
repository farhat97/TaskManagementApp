import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class LoginService implements OnInit {

    private baseUrl = "https://localhost:44364/token";


    constructor(private httpClient: HttpClient) { }
    
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

        this.httpClient
                   .post(this.baseUrl, 
                         body, options)
                   .subscribe((res: Response) => {
                       console.log(res);
                       
                       return true;
                   });

        return false;
    }

}