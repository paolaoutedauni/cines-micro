import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResevarComponent } from './resevar.component';

describe('ResevarComponent', () => {
  let component: ResevarComponent;
  let fixture: ComponentFixture<ResevarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResevarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResevarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
