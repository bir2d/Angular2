import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {RestauranteListComponent} from '../restaurantes-list';
import {RestauranteDetailComponent} from '../restaurante-detail';
@NgModule({
    imports: [
        RouterModule.forRoot([

            { path: 'Home', component: RestauranteListComponent }
            , { path: '', component: RestauranteListComponent }
            , { path: 'restaurante/:id', component: RestauranteDetailComponent }


        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
