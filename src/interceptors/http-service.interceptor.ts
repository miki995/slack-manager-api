import { CallHandler, ExecutionContext, HttpService, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
    constructor(private httpService: HttpService) {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        // ** if you use normal HTTP module **
        const ctx = context.switchToHttp();
        const token = ctx.getRequest().headers['authorization'];

        this.httpService.axiosRef.defaults.headers.common['authorization'] = token;
        return next.handle().pipe();
    }
}
