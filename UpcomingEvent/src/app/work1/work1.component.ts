import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  styleUrls: ['./work1.component.css']
})
export class Work1Component implements OnInit {
  latitude = 20.5937;
  longitude = 78.9629;
  nameIn;
  emailIn;
  sub;
  msg;
  na;
  lo;
  posts;
  id;
  constructor( private ds:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
        this.route.queryParamMap.subscribe((p)=>{
        this.id=p.get('id');
         //alert(p.get('id'));
          this.ds.getEvents().subscribe((d)=>{
            this.posts=d.desc;
            this.posts=this.posts.filter((p)=>{
              return p._id==this.id;
              
            })

            console.log(this.posts);



          })
    })
    //  this.route.queryParamMap.subscribe((d)=>{
    //    this.na=d.get('name');
    //    this.lo=d.get('loc');
    //  })

  }
  fun():any{
    this.ds.sendUser({eventId:this.id,name:this.nameIn,email:this.emailIn,subject:this.sub,message:this.msg})
    .subscribe((f)=>{
      if(f.status=="success"){
        alert("your interested form is submitted");
      }
      else{
        alert("some errors are there");
      }
    })
}
}
