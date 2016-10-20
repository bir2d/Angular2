// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {RestauranteService} from '../service/restaurante.service';
import {Restaurante} from '../model/Restaurante';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    
    templateUrl: 'app/views/restaurante-add.html',
    providers: [RestauranteService]
})

// Clase del componente donde irán los datos y funcionalidades
export class RestauranteAddComponent implements OnInit {
    public titulo: String;
    public restaurante: Restaurante;
    public status: String;
    public errorMessage;
    ngOnInit() {
        
       
    }
   
    constructor(private route: ActivatedRoute, private restauranteService: RestauranteService, private router: Router) {
        this.titulo = "Agregar Restaurante";
        this.restaurante=new Restaurante();
    }

 

}