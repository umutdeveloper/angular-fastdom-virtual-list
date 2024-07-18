import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, NgZone } from '@angular/core';
import fastdom from '../../../utils/fastdom';

@Component({
  selector: 'li[app-item]',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() item!: { title: string, link: string, id: number };

  constructor(private readonly ngZone: NgZone, private elementRef: ElementRef<HTMLLIElement>) { }

  ngAfterViewInit(): void {
    const item = this.elementRef.nativeElement;
    if (item) {
      this.ngZone.runOutsideAngular(() => {
        fastdom.measure(() => {
          const width = item.offsetWidth;
          const height = item.offsetHeight;

          fastdom.mutate(() => {
            item.style.width = (width + 10) + 'px';
            item.style.height = (height + 10) + 'px';
          })
        });
      });

    }
  }

  @HostListener('click')
  onClick() {
    location.href = this.item.link;
  }
}
