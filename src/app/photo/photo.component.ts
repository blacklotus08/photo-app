
import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import { PHOTOS } from '../mock-photos';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  /*photo: Photo =  {
    id:1,
    name: 'Edward'
  };
  */

  photo = PHOTOS;

  constructor() { }

  ngOnInit() {
    
  }




}