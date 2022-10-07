import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-certificate',
  templateUrl: './carousel-certificate.component.html',
  styleUrls: ['./carousel-certificate.component.css']
})
export class CarouselCertificateComponent implements OnInit {


  certificate:any[]=[ 
    {img: ''},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
    {img:'../../Certificate'},
  ]

  constructor(private _confir:NgbCarouselConfig) {

  }

  ngOnInit(): void {
  }

}
