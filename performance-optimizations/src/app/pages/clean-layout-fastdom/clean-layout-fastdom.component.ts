import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import list from '../../utils/items';

@Component({
  selector: 'app-clean-layout-fastdom',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './clean-layout-fastdom.component.html',
  styleUrl: './clean-layout-fastdom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CleanLayoutFastdomComponent {
  items = list;
}
