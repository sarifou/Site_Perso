import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private dbPath = '/projects';
  projectsRef : AngularFireList<any> ;
  projectRef : AngularFireObject<any> | undefined ;
  constructor(private db: AngularFireDatabase) {
    this.projectsRef = db.list(this.dbPath);
   }

   getAllProjects() {
     return this.projectsRef;
   }

  getProject(id: any){
    this.projectRef = this.db.object('projectsObjects/' +id);
    return this.projectRef ;
  }
}
