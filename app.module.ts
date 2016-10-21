import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './components/routing/app-routing.module';


import {RestauranteListComponent} from './components/restaurantes-list';
import {RestauranteDetailComponent} from './components/restaurante-detail';
import {RestauranteAddComponent} from './components/restaurante-add';
import {RestauranteEditComponent} from './components/restaurante-edit';
@NgModule({
  imports: [BrowserModule, FormsModule,HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent,RestauranteListComponent,RestauranteDetailComponent,RestauranteAddComponent,RestauranteEditComponent],
  bootstrap: [AppComponent]

})

export class AppModule { }
