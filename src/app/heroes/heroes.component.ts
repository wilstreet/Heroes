import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:any[];


  constructor (private ServicioHeroes:HeroesService){}

  ngOnInit() {

    this.ServicioHeroes.getHeroes().subscribe( data => {
      this.heroes = data;
      console.log(this.heroes);
    } )
  }
}
