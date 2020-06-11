
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  private httpUrl="https://akabab.github.io/superhero-api/api/all.json"


  getHeroes():Observable<any[]> {
    return this.http.get<any[]>(this.httpUrl)
    .pipe(
      catchError(this.handleError<any[]>('getHeroes', []))
    );
  }

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    console.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
 }

 getHero(id: number): Observable<any> {
  const url = `${this.httpUrl}/${id}`;
  return this.http.get<any>(url).pipe(
    tap(_ => console.log(`fetched hero id=${id}`)),
    catchError(this.handleError<any>(`getHero id=${id}`))
  );
 }
 searchHeroes(term: string): Observable<any[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<any[]>(`${this.httpUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       console.log(`found heroes matching "${term}"`) :
       console.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<any[]>('searchHeroes', []))
  );
 }
}
