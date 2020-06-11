import { Component, OnInit, Input } from '@angular/core';
import {HeroesService} from './../service/heroes.service'
import { Hero } from '../modelo/heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  @Input() hero: Hero;
  heroes:any[];

  constructor(
    private ServicioHeroes:HeroesService,
    private route: ActivatedRoute,
    private location: Location

    ) { }

    ngOnInit(): void {
      this.getHeroes();
    }

    getHeroes(): void {
      this.ServicioHeroes.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(45,46));
    }


  }


