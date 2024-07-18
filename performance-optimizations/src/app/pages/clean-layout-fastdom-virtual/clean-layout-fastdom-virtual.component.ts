import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkDynamicHeightDirective } from './directives/cdk-dynamic-height.directive';
import list from '../../utils/items';

@Component({
  selector: 'app-clean-layout-fastdom-virtual',
  standalone: true,
  imports: [ItemComponent, ScrollingModule, CdkDynamicHeightDirective],
  templateUrl: './clean-layout-fastdom-virtual.component.html',
  styleUrl: './clean-layout-fastdom-virtual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CleanLayoutFastdomVirtualComponent {
  items = list;
}
