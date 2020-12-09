import {Component, OnInit} from '@angular/core';
import {Item} from '../../types/item';
import {ItemsServerService} from '../../repositories/items-server.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Reviews} from '../../types/review';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = { label: "" };
  reviews: Reviews;

  constructor(private itemService: ItemsServerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItemById();
    this.getReviews();
  }

  private getItemById() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      switchMap(id => this.itemService.getItemById(id))
    ).subscribe(item => this.item = item);
  }

  private getReviews() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      switchMap(id => this.itemService.getReviews(id))
    ).subscribe(reviews => this.reviews = reviews);
  }
}