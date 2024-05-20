import { Component, OnInit } from '@angular/core';
import{  faEnvelope, faMapLocation, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram=faInstagram;
  faYoutube=faYoutube;
  faLinkedin=faLinkedin;
  faenvelope=faEnvelope;
  faphone=faPhone;
  faMaplocation=faMapLocation;
  constructor() { }

  ngOnInit(): void {
  }

}

