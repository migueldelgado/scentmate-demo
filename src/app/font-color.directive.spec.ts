import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontColorDirective } from './font-color.directive';

@Component({
  template: `<p app-font-color="blue">HOME</p>`
})
class TestComponent { }

describe('FontColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, FontColorDirective ],
      // schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create an instance', () => {
  //   const p: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
  //   const directive = new FontColorDirective(p);
  //   expect(directive).toBeTruthy();
  // });

  it('Should change font color to red', () => {
    const p: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(p.style.color).toBe('blue');
  })
});
