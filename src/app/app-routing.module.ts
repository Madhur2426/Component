import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillInfoComponent } from './fill-info/fill-info.component';

const routes: Routes = [{path:'fillinfo',component:FillInfoComponent},
{path:'',component:FillInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
