import { Component, OnInit } from '@angular/core';
import { createWorkshop } from '../Models/createWorkshop.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-workshop',
  templateUrl: './add-workshop.component.html',
  styleUrls: ['./add-workshop.component.css']
})
export class AddWorkshopComponent implements OnInit {
  banner: any;
  logo:any;
  cForm = new createWorkshop();
  constructor(private ds: DataService) { }
  getFile(evnt: any) {
    // console.log(evnt);
     this.banner = evnt.target.files[0];
      this.logo = evnt.target.files[0];
  }
   addWorkshop(){
     const formdata = new FormData();
     formdata.set('banner', this.banner);
     formdata.set('logo', this.logo);
     formdata.set('type', this.cForm.type);
     formdata.set('title', this.cForm.title);
     formdata.set('date', this.cForm.date + '');
     formdata.set('location', this.cForm.location);
     formdata.set('fulladdress', this.cForm.fulladdress);
     formdata.set('description', this.cForm.describe);
     formdata.set('email', localStorage.getItem('email'));
     formdata.set('time', this.cForm.time);
      //console.log(formdata.get('name')); console.log(formdata.get('fulladdress'));
     this.ds.addWorkshop(formdata).subscribe(data => {
       //alert('create event status is ' + data.status); console.log(data);
    });
  }
ngOnInit() {

}
}
