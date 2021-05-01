import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-variable/global.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  constructor(private headService: GlobalService) { }

  ngOnInit(): void {
    this.headService.changeHead(false)
  }

}
