import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintaPageRoutingModule } from './quinta-routing.module';

import { QuintaPage } from './quinta.page';


//https://www.npmjs.com/package/angularx-qrcode
// instalar: npm install angular-qrcode --save

import { QRCodeModule } from 'angularx-qrcode';
//

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QuintaPageRoutingModule
  ],
  declarations: [QuintaPage]
})
export class QuintaPageModule {}
