import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @ViewChild("p") p: NgForm;
  submittedForm: "bedankt voor het invullen";

  id;
  employee;
  title;
  desc;

  constructor(private QuestionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
    });
  }

  add(newQuestion: HTMLInputElement){
    this.QuestionService.add(newQuestion);
    this.p.resetForm();
  }


}
