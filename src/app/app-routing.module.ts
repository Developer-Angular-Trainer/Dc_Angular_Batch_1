import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasicsComponent } from './basics/basics.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//  Step1: Declare the routes of our components.
//  Step1:  Place router outlet inside the component where we want to display content, in this case that app.comp.html
//  Step3: routerLink on the button.
const routes: Routes = [
  {
    path:'', component:HomeComponent,
    title:'Home'
  },
{
  path:'home', component:HomeComponent,
  title:'Home'
},
{
  path:'about', component: AboutComponent,
  title:'about'
}
,

{
  path:'basics', component: BasicsComponent,
  children:[
    {

      path:'learn-pipes', component:LearnPipesComponent
    },
    {

      path:'learn-directives', component:LearnDirectivesComponent
    }
  ]
},{
path:'contact', component:ContactComponent
},
{
path:'**', component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
