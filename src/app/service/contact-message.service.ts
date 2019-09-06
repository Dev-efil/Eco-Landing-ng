import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactMessage } from '../model/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {
  contactMessageData : ContactMessage;
  _url = 'http://localhost:3000/contact/submitted';
  constructor(private _http: HttpClient)
  { 
  }

  sendMessage(clientContact: ContactMessage)
  {
    return this._http.post<any>(this._url, clientContact);
  }
}
 