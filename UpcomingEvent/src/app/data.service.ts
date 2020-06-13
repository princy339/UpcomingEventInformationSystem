import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from './Models/signUpForm.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  getData():any{
    return this.http.get("http://localhost:3000/getcontact");
  }
  updatePost(f):any
  {
  return this.http.post("http://localhost:3000/updatecustomer",f);
  }
 /* sendPosts(d):any
  {
    return this.http.post("http://localhost:3000/createdetail",d);
  }*/
  sendData(f):any{
    return this.http.post("http://localhost:3000/createcontact",f);
  }
  register(sform): Observable<SignUpResponse> {

    return this.http.post<SignUpResponse>( "http://localhost:3000/register", sform);

  }
  
  login(sform): Observable<SignUpResponse> {

    return this.http.post<SignUpResponse>("http://localhost:3000/login", sform);

  }
  getEvents():any{
    return this.http.get("http://localhost:3000/getevent");
  }
 
  getUser():any{
    return this.http.get("http://localhost:3000/getuser");
  }
  sendUser(f):any{
    return this.http.post("http://localhost:3000/createuser",f)
  }
  addChief(formdata: FormData):any {
    return this.http.post( "http://localhost:3000/addchief",formdata);
  }

  addWorkshop(formdata: FormData):any {
    return this.http.post( "http://localhost:3000/createevent",formdata);
  }

}
