import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [] as any;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() }) 
        ))
    ).subscribe(data => {
      this.projects = data ;
      console.log(this.projects);
    })
  }

}
