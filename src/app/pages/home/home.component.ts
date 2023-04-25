import { Component, OnInit } from '@angular/core';
import {MoviesdataService} from  '../../moviesdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baner_data: any=[];
  trendind_movies:any=[]
  action_movies: any=[];
  adventure_movies: any=[];
  comedy__movies: any=[];
  dosumentry_movies: any=[];
  sciencefrc_movies: any=[];
  thrill_movies: any=[];

  constructor(private serve:MoviesdataService) { }

  ngOnInit(): void {
    this.serve.bannerapi().subscribe((res:any)=>{
      this.baner_data=res.results
      // console.log(this.baner_data);
    });
    // trending movies api
    this.serve.trendingMovieApiData().subscribe((res:any)=>{
      console.log(res);
      this.trendind_movies=res.results;
    });
    // action movies
    this.serve.fetchActionMovies().subscribe((res:any)=>{
      console.log(res)
      this.action_movies=res.results;
    });
    // adventure movies
    this.serve.fetchAdventureMovies().subscribe((res:any)=>{
    console.log(res)
    this.adventure_movies=res.results;
    });
    // comedy movies
    this.serve.fetchComedyMovies().subscribe((res:any)=>{
      console.log(res);
      this.comedy__movies=res.results;
      
    });
    
    // documentry movies
    this.serve.fetchDocumentaryMovies().subscribe((res:any)=>{
      console.log(res);
      this.dosumentry_movies=res.results;
    });
    //  sciencefriction movies
    this.serve.fetchScienceFictionMovies().subscribe((res:any)=>{
      console.log(res);
      this.sciencefrc_movies=res.results;
    });
    // thrill movies
   this.serve.fetchThrillerMovies().subscribe((res:any)=>{
    console.log(res);
    this.thrill_movies=res.results;
   });
  }
  

}
