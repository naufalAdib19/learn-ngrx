export type cardImage = {
  file_name: string;
  id: number;
  mime: string;
  url: string;
};

export interface CardModels {
  id: number;
  title: string;
  medium_image: cardImage[];
  small_image: cardImage[];
  created_at: Date;
  updated_at: Date;
  published_at: string;
  content: string;
}
