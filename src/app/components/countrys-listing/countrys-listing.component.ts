import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CountryService } from 'src/app/service/country.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { CountryDetailComponent } from '../country-detail/country-detail.component';

@Component({
  selector: 'app-countrys-listing',
  templateUrl: './countrys-listing.component.html',
  styleUrls: ['./countrys-listing.component.scss']
})
export class CountrysListingComponent implements OnInit {

  countryList: Array<any> = [];
  temp: Array<any> = [];
  ColumnMode = ColumnMode;

  constructor(
    private countryService: CountryService,
    private simpleModalService: SimpleModalService
  ) { }

  ngOnInit(): void {
    this.getAllCountry();

  }

  private getAllCountry() {
    this.countryService.getAllCountry().subscribe((res: any) => {
      this.countryList = res.map((e: any) => {
        return { ...e, ... { all: e } }
      });
      this.temp = this.countryList;
    })
  }

  viewCountryDetail(country: any) {
    this.simpleModalService.addModal(CountryDetailComponent, {country:country},{
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  }

  updateFilter(val: any) {
    const value = val.target.value.toString().toLowerCase().trim();
    // get the amount of columns in the table
    const count = 6;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.countryList = this.temp.filter((item:any) => {
      // iterate through each row's column data
      
      for (let i = 0; i < count; i++) {
        if (
          (item[keys[i]] &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }
}
