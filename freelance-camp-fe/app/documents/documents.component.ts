import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    { title: "My first doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://cdn2.hubspot.net/hub/53/file-2586076494-jpeg/hire-manage-freelancer.jpeg",
    },
    { title: "My second doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://www.java-studios.com/wp-content/uploads/2016/07/freelancing.jpg",
    },
    { title: "My last doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://www.surelyjobs.com/wp-content/uploads/2016/02/edfsdfs.jpg",
    }
  ]
}