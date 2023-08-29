import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'skill',
    component: SkillComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
