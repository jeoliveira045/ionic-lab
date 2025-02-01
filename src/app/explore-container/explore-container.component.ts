import {Component, Input, ViewChild} from '@angular/core';
import {IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [
    IonAccordionGroup,
    IonAccordion,
    IonLabel,
    IonItem,
    IonButton
  ]
})
export class ExploreContainerComponent {
  @Input() name?: string;

  @ViewChild('accordionGroup', {static: true})
  accordionGroup?: IonAccordionGroup

  clicarBotao = () => {
    if(this.accordionGroup){
      let nativeEl = this.accordionGroup
      if(nativeEl.value === 'second'){
        nativeEl.value = undefined
      } else {
        nativeEl.value = 'second'
      }
    }
  }
}
