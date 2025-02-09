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
        "x-rapidapi-key":"90b8387a0bmshaf009bcb8dab315p1e2442jsnb5022b570294"
      }
    })
    return next.handle(clonedReq);

  }
}
