import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'nx-post-preview-with-image',
  templateUrl: './post-preview-with-image.component.html',
  styleUrls: ['./post-preview-with-image.component.scss']
})
export class PostPreviewWithImageComponent implements OnInit {

  post: any;
  constructor() { }

  ngOnInit() {
    this.post = {
      name: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      text: faker.lorem.sentences(),
      title: faker.lorem.sentence()
    };
    //faker.helpers.contextualCard();
    //    console.log(this.post);
  }

}
