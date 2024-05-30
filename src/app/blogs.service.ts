import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class blogsService {
  url = 'http://localhost:4000/api/test/'

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get(this.url + 'getall')
  }

  insertuser(insertall: any) {
    console.log(insertall);
    return this.http.post(this.url + 'bloginsert', insertall)
  }

  getOne(id: any) {
    console.log(id);
    return this.http.get(this.url + 'blogview/' + id);
  }

  updateprofile(data: any, id: any) {
    return this.http.put(this.url + 'blogupdate/' + id, data);
  }

  deletedata(id:any){
    return this.http.delete(this.url+'blogdelete/'+id);
  }
}