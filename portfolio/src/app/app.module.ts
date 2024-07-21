import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './project/components/header/header.component';
import { AboutComponent } from './project/components/about/about.component';
import { SkillsComponent } from './project/components/skills/skills.component';
import { ProjectsComponent } from './project/components/projects/projects.component';
import { DeliverablesComponent } from './project/components/deliverables/deliverables.component';
import { ExperienceComponent } from './project/components/experience/experience.component';
import { FooterComponent } from './project/components/footer/footer.component';
import { HomeComponent } from './project/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    DeliverablesComponent,
    ExperienceComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
