import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities:any = [];

  //xây dựng function
  constructor(
    private router : Router,
    private http : HttpClient,
    public toastController : ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getCities().subscribe(re=>{
      console.log("Re",re)
      this.cities = re;
    })
  }

  //điều hướng liên kết đến đường dẫn đích
  goToHome(){
    this.router.navigate(['/home'])
  }

  //lấy nhiều dữ liệu 
  getCities(){
    return this.http.get('assets/files/cities.json')
    .pipe(
      map((re:any)=>{
        return re.data;
      })
    )
  }

  //thông báo nổi xuất hiện trong thời gian ngắn
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'selected city',
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  //thông báo ra màn hình và click để đóng thông báo
  async presentToastWithOption(){
    const toast = await this.toastController.create({
      // header: "header toast",
      message: 'click to close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler:()=>{
            console.log('Favorite City')
          }
        },
        {
          role: 'cancel',
          text: 'Done',
          handler:()=>{
            console.log('Cancel City')
          }
        }
      ]
    });
    toast.present();
  }

  //giống một cửa sổ nhỏ thông báo ra màn hình có tối đa 3 nút
  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "delete city",
      message: "the city has been successfully removed",
      buttons: ["OK"]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  //giống một cửa sổ nhỏ thông báo ra màn hình có tối đa 3 nút
  async presentAlert2(){
    const alert = await this.alertController.create({
      header: "delete city",
      message: "the city has been successfully removed",
      buttons: [
        {
          role: 'cancel',
          text: "No",
          handler: ()=>{
            console.log("No cancel")
          }
        },
        {
          text: "Yes",
          handler: ()=>{
            console.log("City removed")
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
