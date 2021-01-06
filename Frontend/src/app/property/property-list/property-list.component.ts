import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import IProperty from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  constructor(private housingService: HousingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let SellRent = 0;
    if (this.route.snapshot.url.toString().includes('sell')) {
      SellRent = 1;
    } else if (this.route.snapshot.url.toString().includes('rent')) {
      SellRent = 2;
    }
    console.log( 'sellrent = ' + SellRent );
    this.housingService.getAllProperties(SellRent).subscribe(
    data => {this.properties = data; },
      error => console.log(error),
      () => console.log('got list of preperties')
    );


  }

}
