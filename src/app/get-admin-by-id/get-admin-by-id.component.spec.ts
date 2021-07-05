import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdminByIdComponent } from './get-admin-by-id.component';

describe('GetAdminByIdComponent', () => {
  let component: GetAdminByIdComponent;
  let fixture: ComponentFixture<GetAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdminByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
