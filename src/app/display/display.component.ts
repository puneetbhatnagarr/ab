import { Component, OnInit } from '@angular/core';
import { blogsService } from '../blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  constructor(public service:blogsService , private router:Router) {}

  getall:any

  ngOnInit(){
    
  this.service.getdata().subscribe((res:any) => {
    console.log(res);
    this.getall = res.getall; 

    // console.log('hi test',this.getall) 
  });
  }

  deleteall(id:any){
    console.log(id);
    this.service.deletedata(id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
      
    })
    
      }

}
