import { Injectable } from '@angular/core';
import { Food } from '../models/interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  orderStatusEvent: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  closingTime: string = '19:00:00';
  openingTime = '07:00:00';
  foodArray: Food[] = [
    {
      id: '91fcca31cba046fea468af2c659bcf86',
      body: 'Ginger Tea',
      image: '../../assets/ginger.jpeg',
      alt: 'Ginger Tea',
      price: '100.00',
    },
    {
      id: '33cc84aebc4b49b9bdc181782680c493',
      body: 'Ampesi(Yam or Plantain) with vegetable stew,gizzard,sausage,fish and egg',
      image: '../../assets/AmpesiVegetableStew.jpeg',
      alt: 'Ampesi(Yam or Plantain) with vegetable stew,gizzard,sausage,fish and egg',
      price: '25.00',
    },
    {
      id: '3646754e10574da3a16a90e2ecff5e06',
      body: 'Boiled yam/plantain with kontomire sauce, wele,meat,fish and egg',
      image: '../../assets/kontomire.jpeg',
      alt: 'Boiled yam/plantain with kontomire sauce, wele,meat,fish and egg',
      price: '25.00',
    },
    {
      id: '4226d4f1e91e404880345bc18be88e5b',
      body: 'Boiled yam/plantain with Egg stew, meat,meat,fish and sausage',
      image: '../../assets/eggStew.jpeg',
      alt: 'Boiled yam/plantain with Egg stew, meat,meat,fish and sausage',
      price: '25.00',
    },
    {
      id: 'ddbf19c31b9c4844865bf59fbb8fc985',
      body: 'potato pizza',
      image: '../../assets/pizza.jpeg',
      alt: 'potato pizza',
      price: '15.00',
    },
    {
      id: 'ab62ad68aff443afa4c827a78a22e3a3',
      body: 'snail pizza',
      image: '../../assets/pizza.jpeg',
      alt: 'snail pizza',
      price: '15.00',
    },
    {
      id: '6fe15e03186f478b8c2399ae70a51960',
      body: 'mushroom pizza',
      image: '../../assets/pizza.jpeg',
      alt: 'mushroom pizza',
      price: '15.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598847',
      body: 'chiken pizza',
      image: '../../assets/pizza.jpeg',
      alt: 'chiken pizza',
      price: '15.00',
    },

    {
      id: '4d2da93389ce48aa8841c56891494942',
      body: 'beef pizza',
      image: '../../assets/pizza.jpeg',
      alt: 'beef pizza',
      price: '15.00',
    },
    {
      id: 'c92a574c98634a70998b71d110f51fd5',
      body: "Oheneba's 24/7 special",
      image: '../../assets/pizza.jpeg',
      alt: "Oheneba's 24/7 special",
      price: '15.00',
    },
  ];

  getFoodByID(id: string): Food {
    return this.foodArray.filter((item) => item.id === id)[0];
  }

  getAllFoods(): Food[] {
    return this.foodArray;
  }

  getClosingTime(): { closingTime: string; openingTime: string } {
    return { closingTime: this.closingTime, openingTime: this.openingTime };
  }
}
