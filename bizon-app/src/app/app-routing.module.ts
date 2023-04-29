import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VebinarsComponent } from './components/vebinars/vebinars.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component: MainComponent},
  {path:'vebinars',component: VebinarsComponent},
  {path:'details',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
