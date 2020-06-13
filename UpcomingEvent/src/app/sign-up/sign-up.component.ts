import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { SignUpForm } from '../Models/signUpForm.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  rf:FormGroup;
  sform = new SignUpForm();
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit() {
    this.rf=this.fb.group({
      vname:['',Validators.required],
      lastname:['',Validators.required],
      vemail:['',Validators.required],
      vmobile:['',Validators.required],
      passMatch:this.fb.group({ 
        vpassword:['',[Validators.required,Validators.minLength(6)]],
        cPassword:['',Validators.required]
      }, {validator:this.confirmPass}
      )
     });
}
  login()  {
    //alert(this.sform.email);
    //alert(this.sform.password);
    this.ds.login(this.sform).subscribe((data) => {

      if (data.status === 'OK') {
         this.router.navigate(['dashboard'], { queryParams: { 'email': this.sform.email,
          'password': this.sform.password}});
      }
   });
}
      register(f):any {
      if(f.valid)
      {
           //alert("form OK");
           this.sform.role="member";
           this.ds.register(this.sform).subscribe((data) => {
  
             if (data.status === 'OK') {
               alert('Successfully Registered');
             }
            window.location.reload();
      });
      }
      else{
        alert("form INVALID");
      }
    }
  confirmPass(v:AbstractControl):null | {[Key:string]:any}
  { var pass = v.get('vpassword').value;
    { var cpass = v.get('cPassword').value;
    if(pass===cpass){
      return null
      }
  else{
    return {
      'password':true
    };
  }
  }
}
}
