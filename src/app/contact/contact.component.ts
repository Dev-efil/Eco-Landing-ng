import { Component, OnInit } from '@angular/core';
import { ContactMessageService } from '../service/contact-message.service';
import { ContactMessage } from '../model/contact-message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel = new ContactMessage('','','','');
  submitted = false;

  constructor(private _messageService:ContactMessageService) {}

  ngOnInit() {
  }

  onSubmit()
  {
    this.submitted = true;
    this._messageService.sendMessage(this.contactModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
    
  }
  // clearForm()
  // {
  //   this.form.resetForm(this.contactModel);
  // }
}