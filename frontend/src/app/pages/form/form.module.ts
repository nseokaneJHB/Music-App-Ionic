import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';

@NgModule({
	imports: [
		FormPageRoutingModule,
		ReactiveFormsModule,
		CommonModule,
		FormsModule,
		IonicModule,
	],
	declarations: [FormPage]
})
export class FormPageModule {}
