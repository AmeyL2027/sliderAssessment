import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreen } from './mainScreen.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreen,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainScreenRoutingModule {}
