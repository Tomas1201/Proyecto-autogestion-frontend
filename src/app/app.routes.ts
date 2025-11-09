import { Routes } from '@angular/router';
import { MainView } from './admin-panel/main-view/main-view';
import { CareerSelfManagement } from './admin-panel/career-self-management/career-self-management';
import { ProfessorSelfManagement } from './admin-panel/professor-self-management/professor-self-management';
import { StudentSelfManagement } from './admin-panel/student-self-management/student-self-management';
import { SubjectSelfManagement } from './admin-panel/subject-self-management/subject-self-management';

export const routes: Routes = [{path:'', redirectTo:'/MainView', pathMatch:'full'},

{path:'MainView', component: MainView},
{ path: 'Career', component: CareerSelfManagement},
{ path: 'Professor', component: ProfessorSelfManagement},
{ path: 'Student', component: StudentSelfManagement},
{ path: 'Subject', component: SubjectSelfManagement},


];