import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ImcPage } from '../imc/imc';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = AboutPage;
  tabImc = ImcPage;
  tabSobre = SobrePage;

  constructor() {

  }
}
