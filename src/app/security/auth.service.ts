import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {options} from "ionicons/icons";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedReq = req.clone({
      setHeaders: {
        "x-rapidapi-host":"mangaverse-api.p.rapidapi.com",
        "x-rapidapi-key":"16368228ddmsh46d9e2cbb67c9a5p175e79jsn929dbf4d99f7"
      }
    })
    return next.handle(clonedReq);

  }
}
