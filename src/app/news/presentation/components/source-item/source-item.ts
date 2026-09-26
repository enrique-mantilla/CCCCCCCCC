import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Source} from '../../../domain/model/source.entity';

import {MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-source-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardAvatar,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './source-item.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './source-item.css'
})
/**
 * Presentation component for one source entry in the navigation list.
 */
export class SourceItem {
  source = input.required<Source>();

}
