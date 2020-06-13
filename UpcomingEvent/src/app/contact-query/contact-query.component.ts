import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-query',
  templateUrl: './contact-query.component.html',
  styleUrls: ['./contact-query.component.css']
})
export class ContactQueryComponent implements OnInit {
  details;
  customerToBeUpdated;
  constructor(private ds:DataService) { }
  ngOnInit() {
    this.ds.getData().subscribe((d)=>{
      this.details=d.desc;
    })


 function update(p)
  {
      this.customerToBeUpdated=p;
  }
  function updateConfirm()
  {
    this.ds.updatePost(this.customerToBeUpdated).subscribe((d)=>{
      if(d.status=="success")
      {
        alert("data updated");
        this.ds.getData().subscribe((d)=>{
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
}
