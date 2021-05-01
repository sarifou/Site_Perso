import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headService : GlobalService) { }

  ngOnInit(): void {
  this.headService.changeHead(true);
  }

}
