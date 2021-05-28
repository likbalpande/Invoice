import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { NavController } from '@ionic/angular';
import { user } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.page.html',
  styleUrls: ['./invoice-details.page.scss'],
})
export class InvoiceDetailsPage implements OnInit {
  singleInvoice: user;
  constructor(private userService: UserserviceService,
              private activateRoute: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit(): void {
    this.singleInvoice = new user();
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log('Employee Id' + id);
    console.log('Checking the details');
    this.userService.getInvoiceDetailsById(+id).subscribe((incomingData: HttpResponse<user>) => {
      this.singleInvoice = incomingData.body;
      console.log(this.singleInvoice);
    },error => {
           console.log('error', error);
         });
  }

  // loadall(){
  //   this.userService.getalldet().subscribe(data=>{
  //     this.userlist=data;
  //     console.log(this.userlist);
  //   }, error => {
  //     console.log('error', error);
  //   });
  // }

}
