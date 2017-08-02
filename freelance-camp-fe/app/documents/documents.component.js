"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map