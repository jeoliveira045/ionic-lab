import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MangaService{

  URL_API?: string = 'https://mangaverse-api.p.rapidapi.com/manga'

  httpHeaders: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host":"mangaverse-api.p.rapidapi.com",
    "x-rapidapi-key":"16368228ddmsh46d9e2cbb67c9a5p175e79jsn929dbf4d99f7"
  })

  constructor(protected httpClient: HttpClient) {

  }

  getManga(page: number){
    return this.httpClient.get(`${this.URL_API!}/fetch?page=${page}`, {headers: this.httpHeaders})
  }


}
