import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './components/page/create-page/create-page.component';
import { LinkPageComponent } from './components/page/link-page/link-page.component';
import { LinksListPageComponent } from './components/page/links-list-page/links-list-page.component';
import { LoginPageComponent } from './components/page/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreatePageComponent
  }, {
    path: '',
    component: LoginPageComponent
  }, {
    path: 'links',
    component: LinksListPageComponent
  }, {
    path: 'links/:id',
    component: LinkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
