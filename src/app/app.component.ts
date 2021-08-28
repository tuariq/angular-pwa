import { Component } from '@angular/core';
import { ApplicationStateServiceService } from './core/services/application-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputToBody: number = 1;
  isMobileResolution: boolean;
  constructor(private applicationStateServiceService: ApplicationStateServiceService) {
    this.isMobileResolution = this.applicationStateServiceService.getIsMobileResolution();
  }

  menuIconClick() {
    this.inputToBody = ++this.inputToBody;
  }
}
