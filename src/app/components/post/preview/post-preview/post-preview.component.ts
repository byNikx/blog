import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'nx-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  post: any;
  constructor() { }

  ngOnInit() {
    this.post = {
      name: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      text: faker.lorem.sentences(),
      title: faker.lorem.sentence(),
      poster: faker.image.image()
    };
    //  console.log(this.post);
  }

}
