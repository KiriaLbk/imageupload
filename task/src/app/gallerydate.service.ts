import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallerydateService {
  arr = {};

  constructor() { }
  getDateImages(date): void{
    this.arr = date;
  }
  postDateImages(): object{
    return this.arr;
  }
}
