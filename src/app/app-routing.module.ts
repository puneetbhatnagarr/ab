import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeblogsComponent } from './homeblogs/homeblogs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import { UpdateComponent } from './update/update.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path:'home',
component:HomeblogsComponent

},
{
  path:'getall',
component:DisplayComponent

},
{
  path:'blogview/:id',
component:ViewcomponentComponent

},
{
  path:'update/:id',
component:UpdateComponent

},

{
  path:'**',
  component:PagenotfoundComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
