import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { user } from './user.model';
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   url = 'http://localhost:8080/invoices';

  constructor(private http: HttpClient)  { }

getalldet(): Observable<any>{
  const url = 'http://localhost:8080/invoices';
 return this.http.get<any>(url);
}
addinv(invoice: user): Observable<HttpResponse<user>>{
  const url = 'http://localhost:8080/invoices';
  console.log(invoice.property);
  // eslint-disable-next-line max-len
  //const json=`{property:'Property1',date:'3921-02-26T05:00:00.000+00:00',owner:'Owner1',invoiceNumber:101,invoiceAmount:14500,description:'Description1'}`;
return this.http.post<user>(url,invoice,{observe: 'response'});
}

// deleteEmployee(id: number): Observable<HttpResponse<void>>{
//   const url = 'http://localhost:8080/invoices';
//   return this.http.delete<void>(url+'/'+id, {observe: 'response'});
// }

deleteEmployee(id: number): Observable <any>{
    return this.http.delete<any>(this.url + '/' + id);
  }

getInvoiceDetailsById(id: number): Observable<any>{
  return this.http.get(this.url + '/' + id, {observe: 'response'});
}
}


