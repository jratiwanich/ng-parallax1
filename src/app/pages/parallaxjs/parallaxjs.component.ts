import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-parallaxjs',
  templateUrl: './parallaxjs.component.html',
  styleUrls: ['./parallaxjs.component.scss']
})
export class ParallaxjsComponent implements OnInit, AfterContentInit {

  @ViewChild('scene', {static: true}) scene: ElementRef;  

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    const sceneDiv = this.scene.nativeElement;
    const parallaxInstance = new Parallax(sceneDiv,{
      relativeInput: true,
      hoverOnly: true
    })
  }

}
