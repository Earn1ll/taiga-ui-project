import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VebinarsComponent } from './components/vebinars/vebinars.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component: MainComponent},
  {path:'vebinars',component: VebinarsComponent},
  {path:'settings',component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
