import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetloadingComponent } from './widgetloading.component';

describe('WidgetloadingComponent', () => {
  let component: WidgetloadingComponent;
  let fixture: ComponentFixture<WidgetloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
