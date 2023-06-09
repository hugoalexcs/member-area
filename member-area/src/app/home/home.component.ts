import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from '../core/models/movies';
import { MovieService } from '../core/services/movie.service';


@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit, OnDestroy{
  sticky = true;
  subs: Subscription [] = [];
  trending: any;
  pupular: any;
  topRated: any;
  originals: any;
  nowPlaying: any;



  sliderConfig ={
    slidesToShow: 9,
    slidesToScroll:2,
    arrows: true,
    autoplay:false
  };

  @ViewChild ('stickHeader') header: ElementRef | undefined;
  headerBGUrl:any;

  constructor(private movie: MovieService)
  {}

  ngOnInit(): void{
    this.subs.push(this.movie?.getTrinding()?.subscribe(data => {
      this.trending = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original'+ this.trending?.results[0].backdrop_path;
    }));
    this.subs.push(this.movie?.getPopularMovie()?.subscribe(data => this.pupular = data));
    this.subs.push(this.movie?.getTopRated()?.subscribe(data => this.topRated = data));
    this.subs.push(this.movie?.getOriginals()?.subscribe(data => this.originals = data));
    this.subs.push(this.movie?.getNowPlaying()?.subscribe(data => this.nowPlaying = data));
  }

  ngOnDestroy(): void
  {
      this.subs.map(s => s.unsubscribe());
  }
  @HostListener('window:scroll',['$event'])


  handleScrool(){
    const windowScroll  = window.pageYOffset;


    if (windowScroll >= this.header?.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }



}
