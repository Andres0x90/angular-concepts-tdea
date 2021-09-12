import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes:Routes = [
  {
    path:"",
    children:[
      {
        path:"about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class CompanyRoutingModule { }
