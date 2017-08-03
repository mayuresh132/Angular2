import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdataBindingComponent } from './eventdata-binding.component';

describe('EventdataBindingComponent', () => {
  let component: EventdataBindingComponent;
  let fixture: ComponentFixture<EventdataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
