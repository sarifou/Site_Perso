import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private headService: GlobalService) { }

  ngOnInit(): void {
    this.headService.changeHead(false);
  }

}
