import { Component, OnInit } from '@angular/core';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  download() {
    const pdf = './../assets/cv.pdf';
    const pdfName ='Mamadou_CV'
    FileSaver.saveAs(pdf, pdfName);
  }
}
