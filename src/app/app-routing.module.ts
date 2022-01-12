import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./chart-display-widget/chart-display-widget.module').then(
        (m) => m.ChartDisplayWidgetModule
      ),
  },
  {
    path: 'theme',
    loadChildren: () =>
      import('./theme-widget/theme-widget.module').then(
        (m) => m.ThemeWidgetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
