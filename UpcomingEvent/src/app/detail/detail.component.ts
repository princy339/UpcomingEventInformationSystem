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
  
  eventToBeUpdated;
  constructor(private ds:DataService,private route:ActivatedRoute) { }
  
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
        
        this.ds.updateallEvent(this.eventToBeUpdated).subscribe((d)=>{
          // alert("response is coming here from api");
          if(d.status=="success")
          {
            alert("Your event is  updated");

            this.ds.getEvents().subscribe((d)=>{
              this.details=d.desc;
            })
        }
          else
          {
            alert("Event is not updated")
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