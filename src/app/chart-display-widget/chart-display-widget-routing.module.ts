import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDisplayWidgetComponent } from './chart-display-widget.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDisplayWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartDisplayWidgetRoutingModule {}
