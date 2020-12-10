import {Observable} from 'rxjs';
import {Bag} from '../types/bag';
import {BaggedItem} from '../types/bagged-item';

export interface BagRepository {
  getUserBag(userId: number): Observable<Bag>;

  deleteItemFromBag(baggedItemId: number): Observable<any>;

  addItemToBag(userId: number, baggedItem: BaggedItem);

  emptyBag(userId: number);

  updateQuantity(baggedItem: BaggedItem);
}
