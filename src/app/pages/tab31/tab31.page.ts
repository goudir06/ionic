import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab31',
  templateUrl: './tab31.page.html',
  styleUrls: ['./tab31.page.scss'],
})
export class Tab31Page implements OnInit {
  xx = '';
  eve = '';
  number = '';
  text = ' ';
  function() {
    this.number = '70' ;
    this.text = 'Le nombre de places vides est affichée ';
  }
  function2() {
    this.eve = 'le Samedi';
    this.xx = '  le samedi, la possibilite d atteindre une place est diminue';
}
  ngOnInit() {
  }

  closeModal() {
  }

}
