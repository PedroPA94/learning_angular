import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig, appSettings } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings }]
})
export class AppComponent {
  title = 'learning-angular';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(APP_CONFIG) config: AppConfig) {}
}
