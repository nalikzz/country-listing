import { Component, Input, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent extends SimpleModalComponent<null, null> implements OnInit {

  @Input() country:any;

  constructor() { super()}

  ngOnInit(): void {
  }

}
