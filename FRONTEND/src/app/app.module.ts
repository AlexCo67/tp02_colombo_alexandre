import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { internationalPhonePipe } from './internationalPhone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    TetiereComponent,
    RecapitulatifComponent,
    internationalPhonePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
