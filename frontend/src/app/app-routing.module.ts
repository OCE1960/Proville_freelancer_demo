import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ActivateComponent } from './components/activate/activate.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent,
  canActivate: [BeforeLoginService] },
  {path: 'signup', component: SignupComponent,
  canActivate: [BeforeLoginService] },
  {path: 'activate/:id', component: ActivateComponent,
  canActivate: [BeforeLoginService] },
  {path: 'dashboard', component: DashBoardComponent,
  canActivate: [AfterLoginService] },
  {path: 'request-password-reset', component: RequestResetComponent},
  {path: 'response-password-reset', component: ResponseResetComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ProjectRouting = [
                        LoginComponent,
                        SignupComponent, RequestResetComponent,
                        ResponseResetComponent, DashBoardComponent, PageNotFoundComponent,
                        ActivateComponent, HomeComponent
                      ];
