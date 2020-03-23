import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './homepage/home-page.component';
import { NumberDirective } from './homepage/allow-only-number.directive';
import { TicketDetailsComponent } from './ticket/ticket-details.component';
import { SafetyInstComponent } from './instruction/safety-inst.component';
import { BoardingPassComponent } from './boarding/boarding-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NumberDirective,
    TicketDetailsComponent,
    SafetyInstComponent,
    BoardingPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }