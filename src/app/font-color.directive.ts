import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[app-font-color]'
})
export class FontColorDirective {

  @Input('app-font-color') color: string = '';

  constructor(private elr: ElementRef) {
    elr.nativeElement.style.color = this.color;
  }

  ngOnInit() {
    this.elr.nativeElement.style.color = this.color;
  }

}
