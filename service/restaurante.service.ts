import {Restaurante} from '../model/Restaurante';
import {Http,Response} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable"
import { Injectable } from '@angular/core';

@Injectable()
export class RestauranteService{
    constructor(private _http: Http){
        
    }
    getRestaurantes():Observable<Response>{
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurantes")
        .map(res=>res.json());
    }
    getRestaurante(id:string):Observable<Response>{
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurante/"+id)
        .map(res=>res.json());
    }
}