import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import list from '../../utils/items';

@Component({
  selector: 'app-dirty-layout',
  standalone: true,
  imports: [],
  templateUrl: './dirty-layout.component.html',
  styleUrl: './dirty-layout.component.scss'
})
export class DirtyLayoutComponent implements AfterViewInit {
  items = list.slice(0, 2000);
  @ViewChildren('listItems') listItems?: QueryList<ElementRef<HTMLLIElement>>;

  ngAfterViewInit(): void {
    const items = this.listItems?.map(item => item.nativeElement);
    if (items) {
      items.forEach(item => {
        const width = item.offsetWidth;
        const height = item.offsetHeight;
      
        item.style.width = (width + 10) + 'px';
        item.style.height = (height + 10) + 'px';
      });
    }
  }
}
