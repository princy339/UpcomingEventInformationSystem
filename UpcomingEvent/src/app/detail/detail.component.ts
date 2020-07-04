import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { createWorkshop } from '../Models/createWorkshop.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details;
  id;
  banner: any;
  logo:any;
  cForm = new createWorkshop();
  eventToBeUpdated;
  constructor(private ds:DataService, private route:ActivatedRoute) { }
  updateFile(evnt: any) { 
  this.logo = evnt.target.files[0]; 
  }
  updateFile1(evnt: any){
  this.banner = evnt.target.files[0];
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((p)=>{
      this.id=p.get('id');
      //alert("id"+ this.id);

    this.ds.getEvents().subscribe((d)=>{
      this.details=d.desc;
    
      this.details= this.details.filter((p1)=>{
        return p1._id==this.id;
      });
      //alert(JSON.stringify(this.details));
    })
  });
}

update(f):any
      {
          this.eventToBeUpdated=f;
      }
    updateConfirm()
      {
          const formdata = new FormData();
          formdata.set('banner', this.banner);
          formdata.set('logo', this.logo);
          formdata.set('type', this.cForm.type);
          formdata.set('title', this.cForm.title);
          formdata.set('date', this.cForm.date + '');
          formdata.set('location', this.cForm.location);
          formdata.set('fulladdress', this.cForm.fulladdress);
          formdata.set('latitude', this.cForm.latitude);
          formdata.set('longitude', this.cForm.longitude);
          formdata.set('description', this.cForm.describe);
          formdata.set('email', localStorage.getItem('email'));
          formdata.set('time', this.cForm.time);
         
        alert("details is going to server"); //this is working
       this.ds.updateallEvent(formdata).subscribe((d)=>{  //this.eventToBeUpdated
          if(d.status=="success")
          {
            alert("detail is coming from server"); //but this is not working

            this.ds.getEvents().subscribe((d)=>{
              this.details=d.desc;
            })
        }
          else
          {
            alert("Event is not updated"); //this is working, it means d.status is not success.
          }
        });
      }


  delete(p)
  {
    this.ds.deleteMoredetail(p).subscribe((d)=>{
      if(d.status=="success")
      {
        alert("data is deleted"); 
        this.ds.getEvents().subscribe((d)=>{
          this.details=d.desc;

        })
      }
      else
      {
        alert("Data is not deleted");
      }
    });
  }  


}