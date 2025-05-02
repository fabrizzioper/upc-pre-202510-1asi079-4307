import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatGridListModule } from '@angular/material/grid-list';  // ⭐ NUEVO
import { ExhibitionCardComponent } from '../exhibition-card.component';
import { Exhibition } from '../../../model/exhibition.entity';
import { ExhibitionsApiService } from '../../../services/exhibitions-api.service';

@Component({
  selector: 'app-exhibition-list',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatGridListModule,          // ⭐ AÑADIDO
    ExhibitionCardComponent
  ],
  templateUrl: './exhibition-list.component.html',
  styleUrls: ['./exhibition-list.component.css']
})
export class ExhibitionListComponent implements OnInit {
  exhibitions: Exhibition[] = [];
  private api = inject(ExhibitionsApiService);

  ngOnInit() {
    this.api.getAll().subscribe(list => (this.exhibitions = list));
  }
}
