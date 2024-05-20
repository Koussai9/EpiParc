import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newUser: User = {
    fullName: '',
    mobile: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  signup() {
    const signupUrl = `${environment.apiUrl}/signup`;
    this.http.post(signupUrl, this.newUser).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.toastr.success('Registration successful','Success',{toastClass: 'my-custom-toastr'});
        setTimeout(() => this.router.navigate(['/login']), 3000); // Redirect after 3 seconds
      },
      (error: HttpErrorResponse) => {
        console.error('Registration error:', error);
        this.toastr.error('Please try again.','Registration Failed',{toastClass: 'my-custom-toastr'});
      }
    );
  }
}

interface User {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
}
