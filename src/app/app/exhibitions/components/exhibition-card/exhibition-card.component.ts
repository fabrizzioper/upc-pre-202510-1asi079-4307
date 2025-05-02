import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { Exhibition } from '../../model/exhibition.entity';

@Component({
  selector: 'app-exhibition-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, DatePipe, TranslateModule],
  templateUrl: './exhibition-card.component.html',
  styleUrls: ['./exhibition-card.component.css']
})
export class ExhibitionCardComponent {
  @Input() exhibition!: Exhibition;
}
