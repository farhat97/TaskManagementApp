import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginErrorDialogComponent } from './login-error-dialog/login-error-dialog.component';

@NgModule({
    declarations: [ LoginComponent, LoginErrorDialogComponent ],
    imports: [ FormsModule, ReactiveFormsModule ],
    exports: [ LoginComponent ]
})

export class LoginModule { }