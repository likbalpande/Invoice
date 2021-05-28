import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { user } from '../user.model';
import { UserserviceService } from '../userservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  User: user;
  prop = '';
  mon = '';
  own = '';
  invn: number;
  inva: number;
  des = '';
  datePicker = '';
  datePickerMin = '';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(
    private Useice: UserserviceService,
    private navCtrl: NavController,
    private activate: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering

  ngOnInit() {
    this.User = new user();
  }
  changeDate() {}
  // eslint-disable-next-line @typescript-eslint/naming-convention
  GoBack() {
    console.log('hello');
  }
  async retu() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    if (this.prop === '') {
      const toast = this.toastController.create({
        message: 'property cannot be empty',
        duration: 3000,
      });
      (await toast).present();
    } else if (this.mon === '') {
      const toast = this.toastController.create({
        message: 'date cannot be empty',
        duration: 3000,
      });
      (await toast).present();
    } else if (this.own === '') {
      const toast = this.toastController.create({
        message: 'owner  cannot be empty',
        duration: 3000,
      });
      (await toast).present();
    } else if (this.invn == null) {
      const toast = this.toastController.create({
        message: 'invoice number cannot be empty',
        duration: 3000,
      });
      (await toast).present();
    } else if (this.inva == null) {
      const toast = this.toastController.create({
        message: 'invoice amount cannot be empty',
        duration: 3000,
      });
      (await toast).present();
    } else if (typeof this.inva !== 'number') {
      const toast = this.toastController.create({
        message: 'invoice amount cannot be string',
        duration: 3000,
      });
      (await toast).present();
    } else if (typeof this.invn !== 'number') {
      const toast = this.toastController.create({
        message: 'invoice number cannot be string',
        duration: 3000,
      });
      (await toast).present();
    }
    // eslint-disable-next-line max-len

    // eslint-disable-next-line @typescript-eslint/naming-convention
    else {
      this.User.invoiceAmount = this.inva;
      this.User.description = this.des;
      this.User.date = this.mon;
      this.User.id = this.invn;
      this.User.owner = this.own;
      this.User.property = this.prop;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      this.Useice.addinv(this.User).subscribe(
        async (User: HttpResponse<user>) => {}
      );
      this.navCtrl.navigateRoot('home');
    }
    console.log(this.prop);
  }
  showAlert() {
    this.alertController
      .create({
        header: 'Alert',
        subHeader: 'stay to continue and submit',
        message: 'Leave and not save',
        buttons: [
          {
            text: 'STAY',
            handler: () => {
              console.log('stay');
            },
          },
          {
            text: 'LEAVE',
            handler: () => {
              this.navCtrl.navigateRoot('home');
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
