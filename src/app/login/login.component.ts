import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginErrorDialogComponent } from './login-error-dialog/login-error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;
  returnUrl: string;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private errorDialog: LoginErrorDialogComponent) { 
              
                if(this.loginService.currentUserValue) {
                  // redirect to home page
                  this.router.navigate(['/']);
                }
            }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username: ['', Validators.required],
      // password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
      
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(contactForm) {

    this.submitted = true;

    console.log(contactForm.value);

    // if(this.loginForm.invalid) {
    //   return;
    // }

    this.loading = true;
    this.loginService.attemptLogin(contactForm.value)
                     .pipe(first())
                     .subscribe(data => {
                       console.log('in subscribe');
                       this.router.navigate([this.returnUrl]);
                     }, error => {
                       this.error = error;
                       console.log('error', error);

                       // show error message

                       this.loading = false;
                     });
  }
}
