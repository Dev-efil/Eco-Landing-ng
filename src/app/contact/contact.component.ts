import { Component, OnInit } from '@angular/core';
import { ContactMessageService } from '../service/contact-message.service';
import { ContactMessage } from '../model/contact-message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel = new ContactMessage('','a@.COM','sub','hi hello');

  constructor(private _service:ContactMessageService) 
  {
      
  }

  ngOnInit() {
  }

}