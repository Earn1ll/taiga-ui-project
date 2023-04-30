import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {TuiCheckboxModule} from '@taiga-ui/kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiTagModule} from '@taiga-ui/kit';
import {TuiTabBarModule} from '@taiga-ui/addon-mobile';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {TuiTextAreaModule} from '@taiga-ui/kit';


import { VebinarsComponent } from "./components/vebinars/vebinars.component";
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    VebinarsComponent,
    AppComponent,
    MainComponent,
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiInputModule,
      TuiSvgModule,
      TuiButtonModule,
      TuiTableModule,
      TuiTagModule,
      TuiTabBarModule,
      TuiDataListModule,
      TuiDataListWrapperModule,
      TuiSelectModule,
      TuiTextAreaModule,
      TuiCheckboxModule

],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
