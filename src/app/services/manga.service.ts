import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MangaService{

  URL_API?: string = 'https://mangaverse-api.p.rapidapi.com/manga'

  constructor(protected httpClient: HttpClient) {

  }

  getMangaList(page: number){
    return this.httpClient.get(`${this.URL_API!}/fetch?page=${page}`)
  }

  getManga(id: string): Observable<any> {
    return this.httpClient.get(`${this.URL_API!}?id=${id}`)
  }

  getMangaChapters(id: string): Observable<any>{
    return this.httpClient.get(`${this.URL_API!}/chapter?id=${id}`)
  }

  getMangaChapterImages(id: string): Observable<any>{
    return this.httpClient.get(`${this.URL_API!}/image?id=${id}`)
  }


}
