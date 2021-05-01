import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private headService : GlobalService) { }

  ngOnInit(): void {
    this.headService.changeHead(false);
  }

}
