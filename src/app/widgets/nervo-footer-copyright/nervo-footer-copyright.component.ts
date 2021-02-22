import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nervo-footer-copyright',
  templateUrl: './nervo-footer-copyright.component.html',
  styleUrls: ['./nervo-footer-copyright.component.scss']
})
export class NervoFooterCopyrightComponent {

 currentYear = new Date().getFullYear();
 
}
