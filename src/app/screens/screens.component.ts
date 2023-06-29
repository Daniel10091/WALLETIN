import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ScreensComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() { }

}
