import { Component } from '@angular/core';

@Component({
  selector: 'app-add-images',
  standalone: true,
  imports: [],
  templateUrl: './add-images.component.html',
  styleUrl: './add-images.component.scss'
})
export class AddImagesComponent {
  myImages : any = [];
  onSelect(event : any){
    const files = event.target.files;
    console.log(files);
    
    Array.from(files).forEach((file :any) => {
      this.myImages.push(file)
    });
  }
  Upload(){
    console.log(this.myImages);
    
  }
}
