import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/layouts/description/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TranslateModule, SharedModule],
})
export class HomeModule {}
