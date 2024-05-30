import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { blogsService } from '../blogs.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  id:any;
  data:any;
  form:any;

  b:any;

  constructor(private router:Router, private activated:ActivatedRoute, public service:blogsService) {}

  ngOnInit(): void {
      console.log(this.activated.snapshot.paramMap.get('id'))
      this.id = this.activated.snapshot.paramMap.get('id')
      console.log(this.id)
  
      this.form = new FormGroup({
        id: new FormControl(''),
        title: new FormControl(''),
        body: new FormControl(''),
        description: new FormControl(''),
  })

  this.service.getOne(+this.id).subscribe((result)=>{
    this.b = result;

  })
 this.form.patchvalue({
  title:this.b.title,
  id:this.b.id
 })
}
  

 editdata(){
 
  this.service.updateprofile(this.form.value,this.activated.snapshot.paramMap.get('id')).subscribe(
    result=>{
      console.log(result)
      this.router.navigate(['/getall']);
    }
  )
}
}
