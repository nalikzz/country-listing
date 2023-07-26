import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountrysListingComponent } from './components/countrys-listing/countrys-listing.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { NativeNamePipe } from './pipe/native-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    CountrysListingComponent,
    NativeNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    SimpleModalModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
