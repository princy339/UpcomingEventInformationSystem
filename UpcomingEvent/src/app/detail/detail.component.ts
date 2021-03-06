import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

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
          
          formdata.set('type', this.eventToBeUpdated.type);
          formdata.set('title', this.eventToBeUpdated.title);
          formdata.set('date', this.eventToBeUpdated.date+ '');
          formdata.set('location', this.eventToBeUpdated.location);
          formdata.set('fulladdress', this.eventToBeUpdated.fulladdress);
          formdata.set('latitude', this.eventToBeUpdated.latitude);
          formdata.set('longitude', this.eventToBeUpdated.longitude);
          formdata.set('description', this.eventToBeUpdated.description);
          formdata.set('email', localStorage.getItem('email'));
          formdata.set('time', this.eventToBeUpdated.time);
          // alert(this.eventToBeUpdated._id);
          formdata.set('_id', this.eventToBeUpdated._id);
          formdata.set('banner', this.banner);
          formdata.set('logo', this.logo);
         
        // alert("details is going to server"); 
       this.ds.updateallEvent(formdata).subscribe((d)=>{
        if(d.status=="OK")
          {
             alert("Event is Updated"); 
            this.ds.getEvents().subscribe((d)=>{
              this.details=d.desc;
        
            this.details= this.details.filter((p1)=>{
              return p1._id==this.id;
            });
          })  
          
        }
          else
          {
            alert("Event is not updated");
          }
        });
      }
// delete speaker details
delete(p,q)
  {
      // alert(p); // alert(q);
    this.ds.deleteMoredetail({eventid:q,index:p}).subscribe((d)=>{

      if(d.status=="success")
      {
        alert("speaker details are deleted"); 
        this.ds.getEvents().subscribe((d)=>{
          this.details=d.desc;
          
          this.details= this.details.filter((p1)=>{
            return p1._id==this.id;
          });

        })
      }
      else
      {
        alert("speaker details are not deleted");
      }
    });
  }  
}