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
<<<<<<< HEAD
  lat: number = 51.678418;
  lng: number = 7.809007;
  nameIn;  emailIn;  sub; msg; na; lo;posts;id;
=======
  lat: number = 26.922070;
  lng: number = 	75.778885;
  nameIn;
  emailIn;
  sub;
  msg;
  na;
  lo;
  posts;
  id;
>>>>>>> 86f067908aabc2e857109407fb158bc314d4509e
  constructor( private ds:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
        this.route.queryParamMap.subscribe((p)=>{
        this.id=p.get('id');
         // alert(p.get('id'));
          this.ds.getEvents().subscribe((d)=>{
            this.posts=d.desc;
            this.posts=this.posts.filter((p)=>{
              return p._id==this.id;
            })
          })
    })
    this.route.queryParamMap.subscribe((d)=>{
      this.na=d.get('name');
      this.lo=d.get('loc');
    })

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
