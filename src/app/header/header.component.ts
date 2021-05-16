import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  head : boolean = false ;
  display : boolean = false ;
  headSubs: Subscription = new Subscription;
  constructor(private headService : GlobalService) { }

  ngOnInit(): void {
    this.headSubs = this.headService.headSubj.subscribe( (head : boolean) => {
      this.head = head ;
    }) 
  }
  onDisplay() {
    this.display = ! this.display;
    console.log(this.display);
  }
}
