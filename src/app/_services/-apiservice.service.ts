import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl: string = "https://en.wikipedia.org/w/api.php";
 
  constructor(private http:HttpClient) { }
  searchItem(data:string){
    return this.http.get("https://en.wikipedia.org/w/api.php",{

      params: {
        action:'query',
        list:'search',
        srsearch:data,
        utf8:'1',
        format:'json',
        origin:'*',
      }

    })

  }

}
