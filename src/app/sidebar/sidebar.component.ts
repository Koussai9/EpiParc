import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faCar,
  faPlus,
  faGasPump,
  faBellConcierge,
  faLocationDot,
  faFlag,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faHouse = faHouse;
  faCar = faCar;
  faPlus = faPlus;
  faGasPump = faGasPump;
  faBellConcierge = faBellConcierge;
  faLocationDot = faLocationDot;
  faFlag = faFlag;
  faGear = faGear;
  constructor() {}

  ngOnInit(): void {}
}