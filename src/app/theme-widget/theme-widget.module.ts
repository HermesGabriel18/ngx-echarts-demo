import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeWidgetComponent } from './theme-widget.component';
import { ThemeWidgetRoutingModule } from './theme-widget-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ThemeWidgetComponent],
  imports: [
    CommonModule,
    ThemeWidgetRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class ThemeWidgetModule {}
