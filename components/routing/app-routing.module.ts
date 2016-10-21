import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {RestauranteListComponent} from '../restaurantes-list';
import {RestauranteDetailComponent} from '../restaurante-detail';
import {RestauranteAddComponent} from '../restaurante-add';
import {RestauranteEditComponent} from '../restaurante-edit';
@NgModule({
    imports: [
        RouterModule.forRoot([

            { path: 'Home', component: RestauranteListComponent }
            , { path: '', component: RestauranteListComponent }
            , { path: 'restaurante/:id', component: RestauranteDetailComponent }
            , { path: 'crear_restaurante', component: RestauranteAddComponent }
            , { path: 'editar_restaurante/:id', component: RestauranteEditComponent }

        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
