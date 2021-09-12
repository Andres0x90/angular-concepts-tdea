import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { ViewComponent } from './posts/pages/view/view.component';

const routes:Routes = [
  {
    path: "",
    loadChildren: () => import("./company/company.module").then(m =>  m.CompanyModule)
  },
  {
    path: "posts",
    loadChildren : () => import("./posts/posts.module").then(m => m.PostsModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
