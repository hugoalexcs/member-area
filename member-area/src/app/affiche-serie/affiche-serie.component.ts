import { Component, OnInit } from '@angular/core';
import { SerieService } from '../core/services/serie.service';

@Component({
  selector: 'app-affiche-serie',
  templateUrl: './affiche-serie.component.html',
  styleUrls: ['./affiche-serie.component.css']
})
export class AfficheSerieComponent implements OnInit {

  
  constructor(private serieService : SerieService) { }
  series: any;
  results: any;
  ngOnInit() {
    this.series = this.serieService.getSeries()
    .subscribe((data: any) =>{
      this.series=data['results'];
    })
}
}
