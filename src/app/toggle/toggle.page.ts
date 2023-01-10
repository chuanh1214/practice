import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  @ViewChild('accordionGroup',{static: true}) accordionGroup: IonAccordionGroup;
  @ViewChild('listenerOut',{ static: false }) listenerOut: ElementRef;
  private values: string[] = ['first', 'second', 'third'];
  constructor() { }

  ngOnInit() {
  }

  toggleAccording = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'third'){
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'third';
    }
  }

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };
}
