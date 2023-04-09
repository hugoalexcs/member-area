import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../core/services/film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  id:any;
  film:any;
  constructor(private route: ActivatedRoute,private filmService: FilmService) {
    this.route.params
    .subscribe( (params: any) => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id: any){
    this.filmService.getFilmByName(id)
    .subscribe(data => {
     this.film = data;
    });
  }
}
