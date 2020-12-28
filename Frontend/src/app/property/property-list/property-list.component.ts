import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Pearl",
      "Type":"Town House",
      "Price":15000
    },
    {
      "Id":2,
      "Name":"Zafir",
      "Type":"Villa",
      "Price":20000
    },
    {
      "Id":3,
      "Name":"Diamnod",
      "Type":"Duplex",
      "Price":10000
    },
    {
      "Id":4,
      "Name":"Violet",
      "Type":"Town House",
      "Price":15000
    },
    {
      "Id":5,
      "Name":"Pink",
      "Type":"Villa",
      "Price":20000
    },
    {
      "Id":6,
      "Name":"Purbe",
      "Type":"Duplex",
      "Price":10000
    }

]

  constructor() { }

  ngOnInit(): void {
  }

}
