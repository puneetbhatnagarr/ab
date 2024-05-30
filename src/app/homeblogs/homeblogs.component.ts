import { Component, OnInit } from '@angular/core';
import { blogsService } from '../blogs.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-homeblogs',
  templateUrl: './homeblogs.component.html',
  styleUrls: ['./homeblogs.component.css']
})
export class HomeblogsComponent implements OnInit {
  constructor(public service: blogsService , private router:Router) { }
 
  form1: any;
  newdata: any;

  ngOnInit(): void {
   

    this.form1 = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      description: new FormControl(''),
    });
  }

  demo1() {
    console.log(this.form1.value);
    this.service.insertuser(this.form1.value).subscribe(() => {
     
    });

    this.form1.reset({});
  }

  democlick(){
    
    this.router.navigate(['/getall'])
  }
}
