import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public projet : any;
  constructor(private projectService : ProjectService, private router: ActivatedRoute) {
    this.projet = {} ;
   }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.getDetailsProject(id);
  }

  getDetailsProject(id: any) {
    this.projectService.getProject(id).valueChanges().subscribe(data => {
      this.projet = data;
      console.log(data);
    })
  }

}
