import { ArrayType } from '@angular/compiler';
import { Comment } from './comment';

export interface Product {
  id?: number;
  name: string;
  description: string;
  pictureUrl: string;
  altPicture: string;
  price: number;
  quantity: number;
}
