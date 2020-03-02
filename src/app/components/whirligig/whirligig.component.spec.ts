import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhirligigComponent } from './whirligig.component';

describe('WhirligigComponent', () => {
  let component: WhirligigComponent;
  let fixture: ComponentFixture<WhirligigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhirligigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhirligigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
