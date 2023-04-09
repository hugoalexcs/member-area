import { Component, OnInit } from '@angular/core';
import { FilmService } from '../core/services/film.service';

@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }
  films: any;
  results: any;
  ngOnInit() {
    this.films = this.filmService.getFilm()
    .subscribe((data: any) =>{
      this.films=data['results'];
    })
  }

}
