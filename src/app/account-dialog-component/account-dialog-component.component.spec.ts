import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDialogComponentComponent } from './account-dialog-component.component';

describe('AccountDialogComponentComponent', () => {
  let component: AccountDialogComponentComponent;
  let fixture: ComponentFixture<AccountDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
