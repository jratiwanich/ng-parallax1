import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxjsComponent } from './parallaxjs.component';

describe('ParallaxjsComponent', () => {
  let component: ParallaxjsComponent;
  let fixture: ComponentFixture<ParallaxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
