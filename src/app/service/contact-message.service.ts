import { Injectable } from '@angular/core';
import { ContactMessage } from '../model/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {
  contactMessageData : ContactMessage;

  constructor() { }
}
