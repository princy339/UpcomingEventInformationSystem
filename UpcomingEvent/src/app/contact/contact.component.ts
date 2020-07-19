import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nameIn;
  emailIn;
  sub;
  msg;
  posts;
  constructor(private ds:DataService) { }
  ngOnInit() {
    
    this.ds.getData().subscribe((d)=>{
    this.posts=d.desc;
  })
}
fun():any{
  this.ds.sendData({name:this.nameIn,email:this.emailIn,subject:this.sub,message:this.msg})
  .subscribe((f)=>{
      if(f.status=="success"){
        alert("Data is submitted");
      }
      else{
      alert("some errors are there");
      }
    })
  }
}
