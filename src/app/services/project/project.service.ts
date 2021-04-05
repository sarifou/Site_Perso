import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private dbPath = '/projects';
  projectsRef : AngularFireList<any> ;
  projectRef : AngularFireObject<any> | undefined ;
  constructor(private db: AngularFireDatabase, private storage : AngularFireStorage) {
    this.projectsRef = db.list(this.dbPath);
   }

  getAllProjects() {
     return this.projectsRef;
   }

  getProject(id: any){
    this.projectRef = this.db.object('projectsObjects/' +id);
    return this.projectRef ;
  }
  getImage(image: any) {
    return this.storage.storage.ref('images/' + image);
  }
}
