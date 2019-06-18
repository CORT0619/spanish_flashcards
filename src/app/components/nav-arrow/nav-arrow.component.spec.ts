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
    component.currElement = 2;
    spyOn(component.go, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#goBackward', () => {
    it('should call go.emit with currCard and decrement currCard', () => {
      component.length = 5;
      component.goBackward();
      expect(component.go.emit).toHaveBeenCalledWith(1);
    });

    it('should not call go.emit', () => {
      component.goBackward();
      expect(component.go.emit).not.toHaveBeenCalled();
    });
  });

  describe('#goForward', () => {
    it('should call go.emit with currCard and increment currCard', () => {
      component.length = 5;
      component.goForward();
      expect(component.go.emit).toHaveBeenCalledWith(3);
    });

    it('should not call go.emit', () => {
      component.goForward();
      expect(component.go.emit).not.toHaveBeenCalled();
    });
  });
});
