import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdata-binding',
  templateUrl: './eventdata-binding.component.html',
  styleUrls: ['./eventdata-binding.component.css']
})
export class EventdataBindingComponent implements OnInit {
MyDate:any;
  constructor() {

}
  ngOnInit() {
  }
getChange(){
this.MyDate= new Date().toString();
}
}
