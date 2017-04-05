

import { Http, Response } from '@angular/http';
import { StepsModule, ListboxModule } from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import { Component, OnInit, ElementRef, ViewChildren, Injectable ,HostListener,  Renderer} from '@angular/core';
import {HttpService} from '../service/http.service';
import {SelectItem} from 'primeng/primeng';
declare var jQuery:any;
const mapObj = {"rectangles":[
    { "name":"rect1", "color":"#FF0000" , "text":"blah bah blah" },
    { "name":"rect2", "color":"#FF00ff" , "text":"blah bah blah" },
    { "name":"rect3", "color":"#FF00dd" , "text":"blah bah blah" },
    { "name":"rect4", "color":"#00FFFF" , "text":"blah bah blah" },
    { "name":"rect5", "color":"#8A2BE2" , "text":"blah bah blah" },
    { "name":"rect6", "color":"#A52A2A" , "text":"blah bah blah" },
       { "name":"rect7", "color":"#5F9EA0" , "text":"blah bah blah" },
    { "name":"rect8", "color":"#7FFF00" , "text":"blah bah blah" },
    { "name":"rect9", "color":"#D2691E" , "text":"blah bah blah" },
    { "name":"rect10", "color":"#FF7F50" , "text":"blah bah blah" },
    { "name":"rect11", "color":"#6495ED" , "text":"blah bah blah" },
    { "name":"rect12", "color":"#FFF8DC" , "text":"blah bah blah" },
     { "name":"rect13", "color":"#FF0000" , "text":"blah bah blah" },
    { "name":"rect14", "color":"#00FFFF" , "text":"blah bah blah" },
    { "name":"rect15", "color":"#008B8B" , "text":"blah bah blah" },
    { "name":"rect16", "color":" 	#B8860B" , "text":"blah bah blah" },
    { "name":"rect17", "color":"#A9A9A9" , "text":"blah bah blah" },
    { "name":"rect18", "color":"#006400" , "text":"blah bah blah" },
       { "name":"rect19", "color":"#BDB76B" , "text":"blah bah blah" },
    { "name":"rect20", "color":"#FF8C00" , "text":"blah bah blah" },
    { "name":"rect21", "color":"#9932CC" , "text":"blah bah blah" },
    { "name":"rect22", "color":"#E9967A" , "text":"blah bah blah" },
    { "name":"rect23", "color":"#483D8B" , "text":"blah bah blah" },
    { "name":"rect24", "color":"#FF00dd" , "text":"blah bah blah" },
    { "name":"rect25", "color":"#2F4F4F" , "text":"blah bah blah" },
    { "name":"rect26", "color":"#FF00ff" , "text":"blah bah blah" },
    { "name":"rect27", "color":"#9400D3" , "text":"blah bah blah" },
    { "name":"rect28", "color":"#00BFFF" , "text":"blah bah blah" },
    { "name":"rect29", "color":"#696969" , "text":"blah bah blah" },
    { "name":"rect30", "color":"#1E90FF" , "text":"blah bah blah" },
       { "name":"rect31", "color":"#228B22" , "text":"blah bah blah" },
    { "name":"rect32", "color":"#FF00ff" , "text":"blah bah blah" },
    { "name":"rect33", "color":"#DAA520" , "text":"blah bah blah" },
    { "name":"rect34", "color":"#FFD700" , "text":"blah bah blah" },
    { "name":"rect35", "color":"#008000" , "text":"blah bah blah" },
    { "name":"rect36", "color":"#ADFF2F" , "text":"blah bah blah" },
     { "name":"rect37", "color":"#CD5C5C" , "text":"blah bah blah" },
    { "name":"rect38", "color":"#F0E68C" , "text":"blah bah blah" },
    { "name":"rect39", "color":"#7CFC00" , "text":"blah bah blah" },
    { "name":"rect40", "color":"#F08080" , "text":"blah bah blah" },
    { "name":"rect41", "color":"#00FF00" , "text":"blah bah blah" },
    { "name":"rect42", "color":"#32CD32" , "text":"blah bah blah" },
       { "name":"rect43", "color":"#FF00FF" , "text":"blah bah blah" },
    { "name":"rect44", "color":"#800000" , "text":"blah bah blah" },
    { "name":"rect45", "color":"#66CDAA" , "text":"blah bah blah" },
    { "name":"rect46", "color":"#0000CD" , "text":"blah bah blah" },
    { "name":"rect47", "color":"#BA55D3" , "text":"blah bah blah" },
    { "name":"rect48", "color":"#9370DB" , "text":"blah bah blah" },
    { "name":"rect49", "color":"#00FA9A" , "text":"blah bah blah" },
    { "name":"rect50", "color":"#FF00dd" , "text":"blah bah blah" },
       { "name":"rect51", "color":"#48D1CC" , "text":"blah bah blah" },
    { "name":"rect52", "color":"#808000" , "text":"blah bah blah" },
    { "name":"rect53", "color":"#6B8E23" , "text":"blah bah blah" },
    { "name":"rect54", "color":"#FFA500" , "text":"blah bah blah" },
    { "name":"rect55", "color":"#CD853F" , "text":"blah bah blah" },
    { "name":"rect56", "color":" 	#663399" , "text":"blah bah blah" },
]};

@Component({
    templateUrl: './dashboard.html',
    providers:[HttpService]
})
@Injectable()
export class DashboardDemo implements OnInit {

  func2(e:any){
   var target = e.target || e.srcElement || e.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
console.log(idAttr);

}
startdateval:any;
str_num:any;
mydate;
val4;
val5;
shftrect:number=0;
 rem:any;
 days:any;
 today=Date.now();
 myDate3=Date.now();
  myDate4=Date.now();
    rectangles: SelectItem[];
    selectedRectangles: string[];
    listenFunc :Function;
    globalListenFunc: Function;
  val3="2017-03-20";
  myDate1:any;
  
   myDate2:any;
    val2="2017-2-20";
val:number;
    datevalues:any[]=[];
    items :any[]=[];
    startDate1;
    startDate2;
startDate = new Date( this.val2).getTime();

  users: Array<any>;
  rectanglesArr:any []=[];
 constructor(private httpService:HttpService) { 
httpService.fetchGetData().subscribe(users => {this.users=users.date1;
this.val4 =JSON.stringify(users.date1);
this.val5 =JSON.stringify(users.date2);
this.myDate1=new Date(this.val4).getTime();
this.myDate2=new Date(this.val5).getTime();
console.log(this.myDate1);
console.log(this.myDate2);
this.rem=this.myDate2-this.myDate1;
console.log(this.rem);
this.days=Math.floor(this.rem/86400000);
console.log(this.days);
this.myDate=this.myDate1;
this.myDate3=this.myDate1.toString();
this.myDate4=this.myDate2.toString();
}
);
httpService.fetchGetDatarectabngles().subscribe(
  data =>{
    
    
    const myArray = [];
    var ii=0;
    for (var key in data){
      
myArray.push(data["rect"+ii]);
this.rectanglesArr[ii]=myArray[ii];
ii =ii+1;
    }
    
    console.log(myArray.length);

this.rectanglesArr=myArray;
  


  }


)
  }

  convertDateToDays(){

    
  }

 // new var

str :string;
 //new vars ends
    rect = {rect:"",color:""};
   
    //today: number = Date.now()+86400000*this.val;
    myDate:number ;
 
 
 // today= moment().date(); 


  
  
  to_day: number = Date.now();
 
    svgItem = [];
    col = [];
 running:boolean;
 mapfunc(){
  
 for(var i=1;i<57;i++)
   {this.svgItem[i] = document.getElementById("rect"+i);

this.svgItem[i].setAttribute("fill",mapObj.rectangles[i-1].color);
    this.rect.rect="rect"+i;
    this.rect.color="rect"+(i-1);

   
}
alert(this.svgItem[13].getAttribute("x"));
/*
//post data 
        this.httpService.postData(this.rect ).subscribe(
     ( data: Response) => console.log(data)
   );    
*/

          }
        
mapfunc1(){

 for(var i=1;i<57;i++)
   {this.svgItem[i] = document.getElementById("rect"+i);
this.col[i]=this.randomColor();
this.svgItem[i].setAttribute("fill",this.col[i]);


}
 
              
          }
  rectangleItem=[]; 
  handle_int=0;             
handleChange(e) {
   
    this.shftrect= this.shftrect+1;
    this.mapfunc1();
 if(this.shftrect<8){
 this.rectangles.push({label:this.rectanglesArr[this.val], value:""});
 }
    //adding items to list ListboxModule
   
  // this.rectangles.push({label:"lll", value:"kk"});
this.myDate=this.myDate1+86400000*this.val;

 if(this.shftrect>7){
   this.rectangles.push({label:this.rectanglesArr[this.val], value:""});
  this.rectangles.shift(); 
 }

}
   
     chars = '0123456789ABCDEF'.split('');

randomColor = function () {
  var color = '#';
  for (var i = 0; i < 6; i++)
    color += this.chars[Math.floor(Math.random() * 16)];
  return color;
};
result;
startdate3;
    ngOnInit() {
     //   retrieve data from server


     console.log(this.today)
   
  this.rectangles = [];
    //this.rectangles.push({label:'The List Box', value:'Null'});
  
  setTimeout(() => {
                   // console.log( this.myDate1);
                   
                }, 1000) 
    }
  

}