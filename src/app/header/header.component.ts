import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';
import { Subscription } from 'rxjs';
import './../../assets/smtp.js';
declare let Email : any ;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  head : boolean = false ;
  display : boolean = false ;
  headSubs: Subscription = new Subscription;

  constructor(private headService : GlobalService) {
    //console.log(Email);
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'cherif@sarifou.com',
      Password : '75BFB505932E7D7A165CAC848642B5AE1F85',
      To : 'mamadousarifoudiallo63@gmail.com',
      From : 'diallo.msdpro@gmail.com',
      Subject : 'Prise de contact',
      Body : 'blabla'
      }).then( (message: any)  => { 
        console.log(message)
    } );
        
  }

  ngOnInit(): void {
    this.headSubs = this.headService.headSubj.subscribe( (head : boolean) => {
      this.head = head ;
    }) 
  }
  onDisplay() {
    this.display = ! this.display;
    console.log(this.display);
    console.log(Email);
  }
}
