import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../core/services/serie.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit {

  id:any;
  serie: any;
  constructor(private route: ActivatedRoute,private serieService: SerieService) {
    this.route.params
    .subscribe( (params: any) => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id: any){
    this.serieService.getSerieByName(id)
    .subscribe(data => {
     this.serie = data;
    });
  }

}
