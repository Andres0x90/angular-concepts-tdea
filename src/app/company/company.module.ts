import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
      AboutComponent,
      ContactComponent,
      MenuComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  exports:[
    MenuComponent
  ]
})
export class CompanyModule { }
