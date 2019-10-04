import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  show() {
    const $el = this.el.nativeElement;
    this.renderer.setStyle($el, 'display', 'block');
    this.renderer.setStyle($el.querySelector('.modal'), 'display', 'block');
  }

  hide() {
    const $el = this.el.nativeElement;
    this.renderer.setStyle($el, 'display', 'none');
    this.renderer.setStyle($el.querySelector('.modal'), 'display', 'none');
  }

}
