import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './homepage/home-page.component';
import { TicketDetailsComponent } from './ticket/ticket-details.component';
import { SafetyInstComponent } from './instruction/safety-inst.component';
import { BoardingPassComponent } from './boarding/boarding-pass.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'ticket-details/:id', component: TicketDetailsComponent },
  { path: 'safety-insts', component: SafetyInstComponent },
  { path: 'boarding-pass', component: BoardingPassComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
