import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesdataService {
  apiurl:any;
  api_key:any;

  constructor(private http:HttpClient) {}

  bannerapi():Observable<any>{
  return this.http.get(`${environment.siteUrl}/trending/all/week?api_key=${environment.apikey}`);
  }
  // trending movies
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/trending/movie/day?api_key=${environment.apikey}`);
  }
  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=28`);
  }
  // adventure 
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=12`);
  }

 // comedy
   fetchComedyMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${environment.siteUrl}/discover/movie?api_key=${environment.apikey}&with_genres=53`);
  }

  // search movies
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${environment.siteUrl}/search/movie?api_key=${environment.apikey}&query=${data.movieName}`);
  }
  
   // getmoviedatails
   getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${environment.siteUrl}/movie/${data}?api_key=${environment.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${environment.siteUrl}/movie/${data}/videos?api_key=${environment.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${environment.siteUrl}/movie/${data}/credits?api_key=${environment.apikey}`)
  }

}
