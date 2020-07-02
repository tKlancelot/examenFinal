import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { DetailComputerComponent } from './components/detail-computer/detail-computer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addComputer', component: AddComputerComponent },
  { path: 'detailComputer/:id', component: DetailComputerComponent }, 
  { path: 'editComputer/:id', component: EditComputerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
