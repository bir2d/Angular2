import {Restaurante} from '../model/Restaurante';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable"
import { Injectable } from '@angular/core';

@Injectable()
export class RestauranteService{
    constructor(private _http: Http){
        
    }
    getRestaurantes():Observable<Response>{
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurantes")
        .map(res=>res);
    }
    getRestaurante(id:string):Observable<Response>{
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurante/"+id)
        .map(res=>res);
    }
     deleteRestaurante(id:string):Observable<Response>{
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/delete-restaurante/"+id)
        .map(res=>res);
    }
    addRestaurante(restaurante:Restaurante):Observable<Response>{
     let body = JSON.stringify(restaurante);
    body ="json="+body;   
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurantes", body, options).map(res=>res);
                    
  }
   editRestaurante(restaurante:Restaurante):Observable<Response>{
     let body = JSON.stringify(restaurante);
    body ="json="+body;    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8080/api_res_angular2/restaurantes-api.php/update-restaurante/" + restaurante.id, body, options).map(res=>res);
                    
  }
}