import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: { email: string, password: string } = { email: '', password: '' };

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private toastr: ToastrService,
    private afAuth: AngularFireAuth
  ) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((result) => {
        if (result.user) {
          return result.user.getIdToken();
        } else {
          throw new Error('User not found');
        }
      })
      .then((idToken) => {
        const loginUrl = `${environment.apiUrl}/login`;
        this.http.post(loginUrl, { idToken }).subscribe(
          (response) => {
            console.log('Login successful:', response);
            //this.toastr.success('Login successful', 'Success');
            this.router.navigate(['/maps']);
          },
          (error: HttpErrorResponse) => {
            console.error('Login error:', error);
            this.toastr.error('Please try again.','Failed to login.',{toastClass: 'my-custom-toastr'});

          }
        );
      })
      .catch((error) => {
        console.error('Firebase login error:', error);
        this.toastr.error('Please try again.','Failed to login.',{toastClass: 'my-custom-toastr'});
      });
  }
}
