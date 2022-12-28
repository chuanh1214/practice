import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

users:any = [];
searchUser:any;

permission:boolean =true;
  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
    });
    this.searchUser = this.users;
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  getUsers(){
    return this.http.get("/assets/files/customers.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

  searchCustomer(event:any){
    const text = event.target.value;
    this.searchUser = this.users;
    if(text && text.trim() != ''){
      this.searchUser = this.searchUser.filter((user:any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase())>-1);
      })
    }
  }

}
