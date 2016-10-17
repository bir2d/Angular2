// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {RestauranteService} from '../service/restaurante.service';
import {Restaurante} from '../model/Restaurante';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurante-list',
    templateUrl: 'app/views/restaurante-detail.html',
    providers: [RestauranteService]
})

// Clase del componente donde irán los datos y funcionalidades
export class RestauranteDetailComponent implements OnInit {
    public titulo: String;
    public Restaurantes: Restaurante[];
    public status: String;
    public errorMessage;
    ngOnInit() {
        console.log("Cargando..")
     
    }

    constructor(private restauranteService: RestauranteService) {
        this.titulo = "Detalle Restaurante";
        
    }

    getRestaurantes() {
        let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
      
        box_restaurantes.style.visibility="visible";
        this.restauranteService.getRestaurantes().subscribe(
            result => {
            this.Restaurantes = result.data,
                this.status = result.status
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
                box_restaurantes.style.display="none"
            }
            , error => {
                this.errorMessage=<any>error;
                if (this.errorMessage!==null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
              }
        )
    }

}