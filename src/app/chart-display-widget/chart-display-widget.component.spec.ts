import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDisplayWidgetComponent } from './chart-display-widget.component';

describe('ChartDisplayWidgetComponent', () => {
  let component: ChartDisplayWidgetComponent;
  let fixture: ComponentFixture<ChartDisplayWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDisplayWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDisplayWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
