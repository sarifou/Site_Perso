import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProjectService } from '../services/project/project.service';
import { GlobalService } from '../global-variable/global.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [] as any;

  constructor(private projectService: ProjectService, private headService: GlobalService) { }

  ngOnInit(): void {
    this.headService.changeHead(false);
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() }) 
        ))
    ).subscribe(data => {
      this.projects = data;
      this.projects.sort(()=> Math.random() - 0.5)
    })
  }

}
