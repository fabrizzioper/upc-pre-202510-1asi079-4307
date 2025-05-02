// /api/v1/exhibitions?fields=… devuelve { data: ExhibitionResource[], ... }
export interface ExhibitionResource {
    id: number;
    title: string;
    short_description: string | null;
    status: string;
    web_url: string;
    image_url: string | null;
    gallery_title: string | null;
    aic_start_at: string;
    aic_end_at: string;
  }
  
  export interface ExhibitionsResponse {
    data: ExhibitionResource[];
  }
  