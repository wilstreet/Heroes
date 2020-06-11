import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroesService } from '../service/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
hero: any[];
heroes$: Observable<any[]>;
private searchTerms = new Subject<string>();

  constructor( private ServiceHeroe:HeroesService) { }
  search(term: any): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.ServiceHeroe.searchHeroes(term)),
    );
  }
}
