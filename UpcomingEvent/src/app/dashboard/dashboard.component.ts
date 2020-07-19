import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpForm } from '../Models/signUpForm.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css' ,
      './vendor/bootstrap/css/bootstrap.min.css',
      './vendor/metisMenu/metisMenu.min.css',
      './dist/css/sb-admin-2.css',
      './vendor/morrisjs/morris.css',
      './vendor/font-awesome/css/font-awesome.min.css'
  ]
})
export class DashboardComponent implements OnInit {
  sform = new SignUpForm();
  constructor(private router:Router, private route: ActivatedRoute) { }
  signout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("role");
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe( (data ) => {
     this.sform.email = data.get('email');
     this.sform.password = data.get('password');
     this.sform.role = localStorage.getItem("role");
     
     this.sform.email = localStorage.getItem("email");
    });
  }
}
