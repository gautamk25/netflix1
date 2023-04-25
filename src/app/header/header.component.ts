import { Component, HostListener, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navng:any;
  constructor() { }
  searchbar:boolean=true;
  ngOnInit(): void {}
  @HostListener('document:scroll') scrollover (){
    console.log(document.body.scrollTop,"scrolllength");
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
     this.navng={
      'background-color':'#000000'
     }
    }else{
      this.navng={};
    }
  }
  hide(){ 
    $('#search').hide();
  }
  show(){
    $('#search').show();
  }

}
