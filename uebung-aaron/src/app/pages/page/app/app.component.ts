import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uebung-aaron';
  showMsg = localStorage;
  translatedTitle: any;
  test = 'asdf';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.translatedTitle = translate
      .get('Title.text')
      .subscribe((res: string) => {
        console.log(' test' + res);
      });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
