import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MangaService{

  URL_API?: string = 'https://mangaverse-api.p.rapidapi.com/manga'

  httpHeaders: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host":"mangaverse-api.p.rapidapi.com",
    "x-rapidapi-key":"90b8387a0bmshaf009bcb8dab315p1e2442jsnb5022b570294"
  })

  constructor(protected httpClient: HttpClient) {

  }

  getMangaList(page: number){
    return this.httpClient.get(`${this.URL_API!}/fetch?page=${page}`, {headers: this.httpHeaders})
  }

  getManga(id: string): Observable<any> {
    return this.httpClient.get(`${this.URL_API!}?id=${id}`, {headers: this.httpHeaders})
  }

  getMangaChapters(id: string): Observable<any>{
    return this.httpClient.get(`${this.URL_API!}/chapter?id=${id}`, {headers: this.httpHeaders})
  }


}
