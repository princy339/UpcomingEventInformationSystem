import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from './Models/signUpForm.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    //baseURL="http://localhost:3000/";
     baseURL="http://3.129.11.255/";

  constructor(private http:HttpClient) { }
  

  getData():any{
    return this.http.get(this.baseURL+"getcontact");
  }
  updatePost(f):any
  {
  return this.http.post(this.baseURL+"updatecustomer",f);
  }
 /* sendPosts(d):any
  {
    return this.http.post(this.baseURL+"createdetail",d);
  }*/
  sendData(f):any{
    return this.http.post(this.baseURL+"createcontact",f);
  }
  register(sform): Observable<SignUpResponse> {

    return this.http.post<SignUpResponse>( this.baseURL+"register", sform);

  }
  
  login(sform): Observable<SignUpResponse> {

    return this.http.post<SignUpResponse>(this.baseURL+"login", sform);

  }
  getEvents():any{
    //alert(JSON.stringify);
    return this.http.get(this.baseURL+"getevent");
  }
  updateEvent(d):any
  {
  
  return this.http.post(this.baseURL+"updateevent",d);
  }

  updateallEvent(formdata: FormData):any
  {
    console.log("this is formdata detail");
    console.log(formdata);
    return this.http.post(this.baseURL+"updateallevent",formdata);
  }
  deleteEvent(f):any
  {
  return this.http.post(this.baseURL+"deleteevent",{id:f});
  }
  
  deleteMoredetail(g):any{
  return this.http.post(this.baseURL+"deletemoredetail",g);
  }
 
  getUser():any{
    return this.http.get(this.baseURL+"getuser");
  }
  sendUser(f):any{
    return this.http.post(this.baseURL+"createuser",f)
  }
  addChief(formdata: FormData):any {
    return this.http.post( this.baseURL+"addchief",formdata);
  }

  addWorkshop(formdata: FormData):any {
  
    return this.http.post( this.baseURL+"createevent",formdata);
  }
  
}
