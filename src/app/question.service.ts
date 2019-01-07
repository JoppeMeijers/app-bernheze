import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  
  businessRef: AngularFireList<any>;
  business$: Observable<any[]>;
  idQuestion;
  idLog;
  today= new Date();
  jstoday = '';



    size;
    filterBusiness;
    filterCivilian;

 
    businessData: any[];

  constructor(private db: AngularFireDatabase,private router: Router) { 
   
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+1'); 
}

  getAllData(){

   this.businessRef = this.db.list('/types/business');
   this.business$ = this.businessRef.valueChanges();  
    this.business$.subscribe(businessData=> {
      this.businessData = businessData;
      console.log(this.businessData);
    });
  }




  add(newQuestion){

    if(newQuestion.type == 'zakelijk'){
      this.db.object('/types/business/' + this.jstoday).query.ref.transaction(type => type ? ++type : 1) ;
    }

    if(newQuestion.type == 'inwoner'){
      this.db.object('/types/civilian/' + this.jstoday).query.ref.transaction(type => type ? ++type : 1);
    }

     this.idQuestion = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
    
    this.db.object('/Questions/' + this.idQuestion).set({
      questionId: (this.idQuestion),
      subject: (newQuestion.subject),
      desc: (newQuestion.type),
      description: (newQuestion.description),
      isActive: true
  });

}



}

