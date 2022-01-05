import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonrenderComponent } from './buttonrender.component';

describe('ButtonrenderComponent', () => {
  let component: ButtonrenderComponent;
  let fixture: ComponentFixture<ButtonrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonrenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
