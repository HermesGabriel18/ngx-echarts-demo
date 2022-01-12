import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-theme-widget',
  templateUrl: './theme-widget.component.html',
  styleUrls: ['./theme-widget.component.scss'],
})
export class ThemeWidgetComponent {
  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer) {}

  onChangeTheme(e: string) {
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }
}
