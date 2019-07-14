import { Component, OnInit } from '@angular/core';
import { MovieService } from '../+state/movie.service';
import { MovieQuery } from '../+state/movie.query';
import { Observable } from 'rxjs';
import { Movie } from '../+state/movie.model';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'movie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('li', [
          style({opacity: 0, transform: 'translateX(-20px)'}),
          stagger(30, [
            animate('300ms cubic-bezier(.17,.67,.11,.98)')
          ])
        ])
      ])
    ])
  ]
})
export class MovieHomeComponent implements OnInit {
  movies$:Observable<Movie[]>; // 
  loading$:Observable<boolean>;
  constructor(private service:MovieService, private query:MovieQuery) { // will put MovieService into service(variable name) ..dependency injection

   }

  ngOnInit() {
    this.service.get();
    this.loading$ = this.query.selectLoading();
    this.movies$ = this.query.selectAll({ sortBy: "rating" });
  }

}
