import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs/operators';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  id: any;
  results:any;
  data: any;
  
  constructor(private route: ActivatedRoute,private searchService: SearchService) {
    this.route.params
    .subscribe( (params: any) => this.id = params.find)
   }
  ngOnInit() {
    this.getResult(this.id);
  }
 
  getResult(id: any){
    console.log(id);
    this.searchService.getResult(id)
    .subscribe(data => {
     this.results = data['results'];
    });
  }
}
