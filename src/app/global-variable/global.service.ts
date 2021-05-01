import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  private head = false;
  headSubj = new Subject<boolean>();
  constructor() { }

  emitHead() {
    this.headSubj.next(this.head);
  }
  changeHead(head : boolean) {
    this.head = head;
    this.emitHead();
  }
}
