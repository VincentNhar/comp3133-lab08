import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'students',
    template: '<h2>{{ getTitle() }}</h2>'
})

export class StudentsComponent{
    title: String = "My list of Students";

    getTitle(){
        return this.title;
    }

}