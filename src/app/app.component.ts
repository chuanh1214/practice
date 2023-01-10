import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Customers', url: '/customers', icon: 'people'},
    { title: 'Cities', url: '/cities', icon: 'location'},
    { title: 'Login', url: '/login', icon: 'log-in'},
    { title: 'Toggle', url: '/toggle', icon: 'arrow-forward'},
  ];
  public labels = [];
  constructor() {}
  shareApp(){
   Share.share({
      title: 'Share any thing you want',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',

    });
  }
}
