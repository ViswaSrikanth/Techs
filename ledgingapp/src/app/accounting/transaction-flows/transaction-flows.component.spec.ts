import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFlowsComponent } from './transaction-flows.component';

describe('TransactionFlowsComponent', () => {
  let component: TransactionFlowsComponent;
  let fixture: ComponentFixture<TransactionFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionFlowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
