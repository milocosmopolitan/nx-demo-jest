import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { HttpService } from '@nx-demo-jest/http-service';
import { HTTPSERVICE } from '@nx-demo-jest/app-tokens';

@Injectable()
export class SessionResolver implements Resolve<any> {
  constructor(@Inject(HTTPSERVICE) private simpleHttpService: HttpService) {}

  public resolve() {
    return this.simpleHttpService.post('sessionService', 'getUserSession', {});
  }
}
