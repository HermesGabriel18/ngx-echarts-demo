import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeWidgetComponent } from './theme-widget.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeWidgetRoutingModule {}
