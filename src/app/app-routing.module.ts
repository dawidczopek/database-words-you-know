import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllwordsComponent} from "./allwords/allwords.component";

const routes: Routes = [
    { path: 'allwords', component: AllwordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
