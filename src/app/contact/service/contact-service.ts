import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerContact } from '../model/customer-contact';

const connectionUrl: string = `${environment.SHEET_BEST_CONNECTION_URL}`;

@Injectable()
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  public appendCustomer(customerContact: CustomerContact): Observable<string> {
    console.log(JSON.stringify(customerContact));
    const httpHeaders = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.httpClient.post<string>(
      connectionUrl,
      {
        Nome: customerContact.customerName,
        Assunto: customerContact.topic,
        Celular: customerContact.customerMobile,
        'E-mail': customerContact.customerEmail,
        Empresa: customerContact.company,
        Mensagem: customerContact.customerMessage,
      },
      { headers: httpHeaders }
    );
  }
}
