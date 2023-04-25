import { Component, OnInit } from '@angular/core';
import { MoviesdataService } from '../../moviesdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  id:any;
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult: any=[];
  constructor(private serve:MoviesdataService,private route:ActivatedRoute) { 
   this.id=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.serve.getMovieDetails(this.id).subscribe((res:any)=>{
      console.log(res);
      this.getMovieDetailResult=res;
    });
    this.serve.getMovieVideo(this.id).subscribe((res:any)=>{
      console.log(res);
      this.getMovieVideoResult=res.results[0].key
      console.log(this.getMovieVideoResult);
    });
    this.serve.getMovieCast(this.id).subscribe((res:any)=>{
      console.log(res);
      this.getMovieCastResult=res.cast;
      console.log(this.getMovieCastResult);
    });
  }
}
