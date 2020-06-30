import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-work-shop',
  templateUrl: './all-work-shop.component.html',
  styleUrls: ['./all-work-shop.component.css']
})
export class AllWorkShopComponent implements OnInit {
  details;
  id;
  eventToBeUpdated;
  constructor(private ds: DataService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit() {
      this.ds.getEvents().subscribe((d)=>{
      this.details=d.desc;

// check if it is member or admin
        if(!(localStorage.getItem('role')=="admin"))
        {
            this.details = this.details.filter((pp)=>{
              return pp.email == localStorage.getItem('email');
            });
        }
      })
}

fun(id):any{
    //alert(id); 
    this.router.navigate(['/dashboard/interested'],{queryParams:{eventId:id}});
    } 
    fun1(id):any{
      //alert(id);
      this.router.navigate(['/dashboard/detail'],{queryParams:{id:id}});
      } 
      
      update(f):any
      {
          this.eventToBeUpdated=f;
      }
    updateConfirm()
      {
        this.ds.updateEvent(this.eventToBeUpdated).subscribe((d)=>{
          if(d.status=="success")
          {
            alert("data updated");

            this.ds.getEvents().subscribe((d)=>{
              this.details=d.desc;
            })
        }
          else
          {
            alert("Data is not updated")
          }
        });
      }
  delete(p)
  {
    this.ds.deleteEvent(p).subscribe((d)=>{
      if(d.status=="success")
      {
        alert("data is deleted"); 
        this.ds.getEvents().subscribe((d)=>{
          this.details=d.desc;
        })
      }
      else
      {
        alert("gadbad ho gyi")
      }
    });
  }
    

}
