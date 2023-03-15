import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SharedComponent],
})
export class SharedModule {}
