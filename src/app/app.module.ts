import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NoAccessComponent } from './no-access/no-access.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent, BasicsComponent, CustomDirectiveDirective, CustomPipesPipe, LearnDirectivesComponent, LearnPipesComponent, ComponentAComponent, ComponentBComponent, ComponentCComponent, ComponentDComponent, HomeComponent, AboutComponent, ContactComponent, PageNotFoundComponent, HeaderComponent, LoginComponent, NoAccessComponent, UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule,MatButtonModule,
    MatCheckboxModule,MatCardModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    ReactiveFormsModule,MatFormFieldModule, MatInputModule, HttpClientModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
