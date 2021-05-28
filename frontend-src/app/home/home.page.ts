/* eslint-disable max-len */

import { UserserviceService } from './userservice.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { NavController, ToastController } from '@ionic/angular';
import { HttpResponse } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { user } from './user.model';

import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
userlist: any=[];
  constructor(private userser: UserserviceService,private navCtrl: NavController,private activate: ActivatedRoute,
    private alertController: AlertController, private toastController: ToastController ) {}
// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
ngOnInit(): void {
    this.loadall();
  }
  loadall(){
    this.userser.getalldet().subscribe(data=>{
      this.userlist=data;
      console.log(this.userlist);
    }, error => {
      console.log('error', error);
    });
  }

  showAlert(id) {

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Do you want to delete?',
      message: 'Delete is permanent and cannot be undone!',
      buttons: [ {
        text: 'Cancel',
        handler: () => {
          console.log('Delete Aborted!');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          this.deleteEmployee(id);
        }
      },]
    }).then(res => {
      res.present();
    });
  }

  async deleteEmployee(id: number){
      console.log('Employee Id to delete ' + id);
      this.userser.deleteEmployee(id).subscribe(data=>{
        console.log('Deleted!');
      }, error=>{
        console.log('Error');
      }
      );
      //return console.log('Deleted');
    }
}


//Not Working
//async deleteEmployee(id: string){
  //   console.log('Employee Id to delete ' + id);
  //   this.empService.deleteEmployee(id);
  //   return console.log('Deleted');
  // }

   //Working As well
  // loadAll(){
  //   this.empService.getAllEmployee().subscribe(data=>{
  //     this.empList=data;
  //     console.log(this.empList);
  //   }, error => {
  //     console.log('error', error);
  //   });
  // }

//Working As well
  // loadAll(){
  //   this.empService.getAllEmployee().subscribe( async (empList: HttpResponse<Employee[]>) => {
  //     this.empList=empList.body;
  //     console.log(this.empList);
  //     const toast = await this.toastController.create({
  //       message: 'employee Details loaded Successfully',
  //       duration: 3000
  //     });
  //     return await toast.present();
  //   } );
  //   }
