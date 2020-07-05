import { Component, OnInit } from '@angular/core';
import { createDetail } from '../Models/createDetail.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-moredetail',
  templateUrl: './moredetail.component.html',
  styleUrls: ['./moredetail.component.css']
})
export class MoredetailComponent implements OnInit {
  chief;
  cForm = new createDetail();
  events;
  constructor(private ds:DataService) {}
  getFile(evnt: any) {
     this.chief = evnt.target.files[0];
    }
  addChief(){
  //alert("id"+ this.cForm.type );  
    var p = this.events.filter((p1)=>{
      return p1._id==this.cForm.type;
    });
  //console.log(p);
    const formdata = new FormData();
    formdata.set('chief', this.chief);
    formdata.set('_id', this.cForm.type);
    formdata.set('speaker', this.cForm.speaker);
    formdata.set('description', this.cForm.description);
    formdata.set('count', p[0].chiefparty.length);
    //alert(JSON.stringify(p[0].chiefparty.length));
    this.ds.addChief(formdata).subscribe(data => {
     //alert('create event status is ' + data.status);
     alert("Speaker Details are successfully added"); 
     //console.log(data);
   });
 }
  ngOnInit() {
    this.ds.getEvents().subscribe((p)=>{
      this.events = p.desc;
      if(!(localStorage.getItem('role')=="admin"))
      {
          this.events = this.events.filter((ss)=>{
            return ss.email == localStorage.getItem('email');
          });
      }
    })
  }
}
