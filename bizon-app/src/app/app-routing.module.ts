import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VebinarsComponent } from './components/vebinars/vebinars.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component: MainComponent},
  {path:'vebinars',component: VebinarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
