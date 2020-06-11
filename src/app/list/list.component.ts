import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../service/heroes.service';
import { Hero } from './../modelo/heroes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heroes:any[];
  Hero: Hero;

  constructor (private ServiceHeroes:HeroesService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.ServiceHeroes.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(20, 40));
  }

}
