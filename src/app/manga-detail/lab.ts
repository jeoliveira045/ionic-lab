import {Component} from "@angular/core";
import {SidebarPage} from "../sidebar/sidebar.page";
import {IonNav} from "@ionic/angular/standalone";


@Component({
  selector: 'app-component-lab',
  imports: [
    IonNav
  ],
  template: `
    <ion-nav [root]="component"></ion-nav>
  `
})
export class LabNavComponent{
  component = SidebarPage
}
