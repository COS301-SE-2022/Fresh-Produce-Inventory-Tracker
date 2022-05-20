import { Component, OnInit } from '@angular/core';import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';import { Model } from './contact-form';
import { NgForm } from '@angular/forms';
import '../smtp.js'; //file path may change → 
declare let Email: any;



@Component({ selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']})
    
    
    export class ContactComponent implements OnInit {
    model: Model = new Model();
    constructor( private profile: ProfileService, private snotify: SnotifyService
    ) { }
    
    ngOnInit() {
    }
    
    onSubmit(f: NgForm) {
    
    Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'udith.indrakantha@gmail.com',
    Password : '**************************',
    To : 'udith.indrakantha@gmail.com',
    From : `udith.indrakantha@gmail.com`,
    Subject : this.model.subject,
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `
    }).then( message => {alert(message); f.resetForm(); } );
      
    }
      
    }