import { Injectable } from '@angular/core';
import {CategoriesRepository} from './categories-repository';
import {Observable} from 'rxjs';
import {Categories} from '../types/category';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServerService implements CategoriesRepository {

  private static readonly URL: string = environment.serverAddress + '/categories';

  constructor(private httpClient: HttpClient) { }

  query(): Observable<Categories> {
    return this.httpClient.get<Categories>(CategoriesServerService.URL);
  }
}