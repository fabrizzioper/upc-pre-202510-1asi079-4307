import { Exhibition } from '../model/exhibition.entity';
import { ExhibitionResource, ExhibitionsResponse } from './exhibitions.response';

export class ExhibitionAssembler {
  static toEntity(r: ExhibitionResource): Exhibition {
    return {
      id: r.id,
      title: r.title,
      shortDescription: r.short_description ?? '',
      status: r.status,
      webUrl: r.web_url,
      imageUrl: r.image_url ?? '',
      galleryTitle: r.gallery_title ?? '',
      startAt: r.aic_start_at,
      endAt: r.aic_end_at
    };
  }

  static fromResponse(resp: ExhibitionsResponse): Exhibition[] {
    return resp.data.map(this.toEntity);
  }
}
