import { ChangeDetectionStrategy, Component, ElementRef, NgZone, QueryList, ViewChildren } from '@angular/core';
import list from '../../utils/items';

@Component({
  selector: 'app-clean-layout',
  standalone: true,
  imports: [],
  templateUrl: './clean-layout.component.html',
  styleUrl: './clean-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CleanLayoutComponent {
  items = list;
  @ViewChildren('listItems') listItems?: QueryList<ElementRef<HTMLLIElement>>;

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const items = this.listItems?.map(item => item.nativeElement);
    if (items) {
      this.ngZone.runOutsideAngular(() => {
        const dimensions = Array.from(items).map(item => {
          return {
            width: item.offsetWidth,
            height: item.offsetHeight
          };
        });

        requestAnimationFrame(() => {
          dimensions.forEach((dim, index) => {
            items[index].style.width = (dim.width + 10) + 'px';
            items[index].style.height = (dim.height + 10) + 'px';
          });
        });
      });
      
    }
  }

  onClick(link: string) {
    location.href = link;
  }
}
