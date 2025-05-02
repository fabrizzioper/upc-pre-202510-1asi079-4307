import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Exhibition } from '../model/exhibition.entity';
import { ExhibitionsResponse } from './exhibitions.response';
import { ExhibitionAssembler } from './exhibition.assembler';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExhibitionsApiService {
  private http = inject(HttpClient);

  getAll(limit = 25): Observable<Exhibition[]> {
    const fields =
      'id,title,short_description,status,web_url,image_url,gallery_title,aic_start_at,aic_end_at';
    const url = `${environment.apiBaseUrl}/exhibitions?fields=${fields}&limit=${limit}`;
    return this.http
      .get<ExhibitionsResponse>(url)
      .pipe(map(r => ExhibitionAssembler.fromResponse(r)));
  }
}
