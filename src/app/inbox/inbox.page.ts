import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
