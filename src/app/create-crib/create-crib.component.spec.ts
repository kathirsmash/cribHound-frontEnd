import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCribComponent } from './create-crib.component';

describe('CreateCribComponent', () => {
  let component: CreateCribComponent;
  let fixture: ComponentFixture<CreateCribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
