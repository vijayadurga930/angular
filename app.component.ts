import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  //template:`<h1>welcome to Angular Applications</h1>`,
 // styles:[`h1{color:blue}`]
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  fname:string="vijaya";
  lname:string="durga";
  myname:string;
  status:boolean=false;
  count:number=0;

  getFullName():string{
    this.myname=this.fname+this.lname;
    return this.myname;
  }
  getcount():number{
    return ++this.count;
  }
    
  
   
}
