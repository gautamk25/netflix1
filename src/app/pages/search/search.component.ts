import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MoviesdataService} from '../../moviesdata.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:any=[]
  router_url: any;
  constructor(private fb:FormBuilder,private serve:MoviesdataService,private route:Router) { }
 
  ngOnInit(): void {
   this.router_url= this.route.url;
   console.log(this.router_url);
  }
  moviename=this.fb.group({
    movieName:['']
  });
  submitdata(){
    console.log(this.moviename.value);
    this.serve.getSearchMovie(this.moviename.value).subscribe((res:any)=>{
      console.log(res.results);
      this.searchResult=res.results;
    })
  }

  checkbox1Checked = false;
  checkbox2Checked = false;
  checkbox3Checked = false;
  checkbox4Checked = false;
  checkbox5Checked = false;

  onCheckboxChange(event: any, value: any) {
    if (event.target.checked) {
      console.log(value);
      // do something with value...
    }
  }
}


