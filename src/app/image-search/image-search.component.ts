import { imageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  images: any [];
  ngOnInit() {}
  imagesFound: boolean = false;

  handkeSuccess(data){
    console.log(data.hits)
    this.images = data.hits
    this.imagesFound = true;
  }
  
  handleError(error){
    console.log(error);
  }
  
  constructor(private imageService: imageService) { }
  
  searchImage(query: string){
    return this.imageService.getImage(query).subscribe(
      data => this.handkeSuccess(data),
      error => this.handleError(error),
      () => console.log("Request Completed"),
    );
  }
  


}
