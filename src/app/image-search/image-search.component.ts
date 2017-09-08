import { imageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  image: any [];

  constructor(private service: imageService) { }
  ngOnInit() {
  }

}
