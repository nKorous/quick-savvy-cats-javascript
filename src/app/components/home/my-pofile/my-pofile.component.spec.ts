import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPofileComponent } from './my-pofile.component';

describe('MyPofileComponent', () => {
  let component: MyPofileComponent;
  let fixture: ComponentFixture<MyPofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
