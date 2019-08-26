import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch :'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'features',
    component : FeaturesComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'admin',
    component : DashboardComponent
  },
  {
    path :'**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
