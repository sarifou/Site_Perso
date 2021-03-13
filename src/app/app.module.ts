import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { LearningComponent } from './learning/learning.component';
import { CertificationComponent } from './certification/certification.component';

const appRoutes : Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'project', component : ProjectComponent},
  {path: 'certification', component : CertificationComponent},
  {path: 'learning', component : LearningComponent},
  {path: 'experience', component : ExperienceComponent},
  {path: 'contact', component : ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    ExperienceComponent,
    LearningComponent,
    CertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
