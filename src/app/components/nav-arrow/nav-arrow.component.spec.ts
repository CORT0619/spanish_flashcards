import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavArrowComponent } from './nav-arrow.component';
import { MatIconModule } from '@angular/material/icon';

describe('NavArrowComponent', () => {
  let component: NavArrowComponent;
  let fixture: ComponentFixture<NavArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [NavArrowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
