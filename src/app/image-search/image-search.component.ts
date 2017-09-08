import { imageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  image: any [];
  ngOnInit() {}
  
  constructor(private imageService: imageService) { }
  
  searchImage(query: string){
    return this.imageService.getImage(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Request Completed"),
    );
  }
  


}
