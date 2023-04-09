import { Component, OnInit } from '@angular/core';
import { FilmService } from '../core/services/film.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
