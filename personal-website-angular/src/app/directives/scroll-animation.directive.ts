import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate');
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'in-view');
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });
    this.observer.observe(this.el.nativeElement);
  }
}
