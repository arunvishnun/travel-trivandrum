import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'Search';
  // constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //       'thumbs-up',
  //       sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  // }

}
