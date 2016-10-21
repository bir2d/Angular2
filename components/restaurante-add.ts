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
    public filesToUpload:Array<File>;
    ngOnInit() {
       
    }
    
    onSubmit() {
       
        console.log(this.restaurante.getImagen())
        if (typeof this.restaurante.getImagen() === 'undefined'){
            this.restaurante.setImagen(null);
        }
        this.restauranteService.addRestaurante(this.restaurante).subscribe(result => {

            this.status = result.json().status;
            
            if (this.status === "success") {
                this.router.navigate(["/Home"]);
            }

        }
            , error => {
                this.errorMessage = <any>error;
                if (this.errorMessage !== null) {
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            })
    }
    constructor(private route: ActivatedRoute, private restauranteService: RestauranteService, private router: Router) {
        this.titulo = "Agregar Restaurante";

        this.restaurante = new Restaurante();

    }
    public resultUpload;

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;

		this.makeFileRequest("http://localhost:8080/api_res_angular2/restaurantes-api.php/upload-file", [], this.filesToUpload).then((result) => {
				this.resultUpload = result;
                                this.restaurante.setImagen( this.resultUpload.filename) ;
                            
		}, (error) =>{
			console.log(error);
		});
		
	}


	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject) => {
				var formData: any = new FormData();
				var xhr = new XMLHttpRequest();

				for(var i = 0; i < files.length; i++){
					formData.append("uploads[]", files[i], files[i].name);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
					}
				}
				xhr.open("POST", url, true);
				xhr.send(formData);
			});
	}

}