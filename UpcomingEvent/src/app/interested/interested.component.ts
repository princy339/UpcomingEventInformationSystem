import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {
  details;
  id;
  constructor(private ds:DataService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParamMap.subscribe((p)=>{
      this.id=p.get('eventId');
      //alert("eventId"+ this.id);
    
      this.ds.getUser().subscribe((d)=>{
        this.details=d.desc;
        this.details= this.details.filter((p1)=>{
          return p1.eventId==this.id;
        });
        //alert(JSON.stringify(this.details));
      })
    })

  }
}
