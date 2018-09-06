import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
//name:string = "techsith";
nameList = ['John','Judy','Mark','Vijay', 'Joe']
  constructor() { }

  ngOnInit() {
  }

}
