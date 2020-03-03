import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerareaComponent } from './herarea.component';

describe('HerareaComponent', () => {
  let component: HerareaComponent;
  let fixture: ComponentFixture<HerareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
