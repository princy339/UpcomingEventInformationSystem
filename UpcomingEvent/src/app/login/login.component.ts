import { Component, OnInit } from '@angular/core';
import { SignUpForm } from '../Models/signUpForm.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sform = new SignUpForm();
  constructor(private ds: DataService, private router: Router) { }
  ngOnInit() {}
  
  login()  {
    this.ds.login(this.sform).subscribe((data) => {
    //console.log(data);
      if(data.description==null){
        alert("account is not valid ")
      }
      else {
        localStorage.setItem('email', data.description.email);
        localStorage.setItem('role', data.description.role);
        localStorage.setItem('name', this.sform.name);
        this.router.navigate(['/dashboard'], // {queryParams: { 'name': this.sform.name }}
        );
      }
   });
}
  register() {
    this.sform.role="member";
    this.ds.register(this.sform).subscribe((data) => {
       if (data.status === 'OK') {
          alert('Successfully Registered');
       }
    });
  }
}
