import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  xx = '';
  eve = '';
  number = '';
  text = ' ';
  function() {
    this.number = '95' ;
    this.text = 'Le nombre de places vides est affichée ';
  }
  function2() {
    this.eve = 'le soir';
    this.xx = ' le parking sera fermé dans pas longtemps';
}
  ngOnInit() {
  }

  closeModal() {
  }

}
