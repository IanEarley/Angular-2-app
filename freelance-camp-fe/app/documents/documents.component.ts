import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    { title: "My first doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://google.com",
    },
    { title: "My second doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://google.com",
    },
    { title: "My last doc",
      description: "asdfasdfasdf asdf",
      file_url: "http://google.com",
      updated_at: "1-1-17",
      image_url: "http://google.com",
    }
  ]
}