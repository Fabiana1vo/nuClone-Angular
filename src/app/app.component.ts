import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class AppComponent {
  title = 'Nu';

  @ViewChild('sliderRef')
  sliderRef!:ElementRef<HTMLElement>
  @ViewChild('cardsliderRef')
  cardsliderRef!:ElementRef<HTMLElement>
  
 

  slider?: KeenSliderInstance
  cardSliderRef?: KeenSliderInstance

  ngAfterViewInit() {
this.slider = new KeenSlider(this.sliderRef.nativeElement,{
  loop:false,
  mode:'free',
  slides:{
    perView: 4.5,
    spacing:14
  }
});
this.cardsliderRef = new KeenSlider(this.cardsliderRef.nativeElement,{
  loop:false,
  mode:'free',
  slides:{
    perView: 1.5,
    spacing:14
  }
})

  }
}
