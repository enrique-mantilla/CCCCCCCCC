import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Source} from '../../../domain/model/source.entity';
import {SourceItem} from '../source-item/source-item';

@Component({
  selector: 'app-source-list',
  imports: [
    SourceItem
  ],
  templateUrl: './source-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './source-list.css'
})
/**
 * Presentation component that renders the list of available news sources.
 */
export class SourceList {
  sources = input<Source[]>();
}
