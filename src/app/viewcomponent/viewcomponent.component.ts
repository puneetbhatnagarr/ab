import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogsService } from '../blogs.service';

@Component({
  selector: 'app-viewcomponent',
  templateUrl: './viewcomponent.component.html',
  styleUrls: ['./viewcomponent.component.css']
})
export class ViewcomponentComponent {
  id: any;
  data: any = {}; // Initialize data as an empty object

  constructor(private activated: ActivatedRoute, private service: blogsService) { }

  ngOnInit(): void {
    this.userview();
  }

  userview() {
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.service.getOne(this.id).subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
    });
  }
}