import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  naIn;
  locIn;
  posts;
  type;
  constructor(private router:Router, private route:ActivatedRoute, private ds:DataService) { }
  ngOnInit() {

    this.route.paramMap.subscribe((p)=>{
      this.type=p.get('type');
      //alert(this.type);

      this.ds.getEvents().subscribe((d)=>{
        this.posts=d.desc;
        
        this.posts= this.posts.filter((p)=>{
          return p.type==this.type;
        })
        //alert(JSON.stringify(this.posts));
      })
    })
}
fun(id):any{
  
this.router.navigate(['/work1'],{queryParams:{id:id}});
}
}

