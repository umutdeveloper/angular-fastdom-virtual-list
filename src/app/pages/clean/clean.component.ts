import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkDynamicHeightDirective } from './directives/cdk-dynamic-height.directive';
import list from '../../utils/items';

@Component({
  selector: 'app-clean',
  standalone: true,
  imports: [ItemComponent, ScrollingModule, CdkDynamicHeightDirective],
  templateUrl: './clean.component.html',
  styleUrl: './clean.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleanComponent {
  items = list;
}
