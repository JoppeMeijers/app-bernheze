import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { Observable } from 'rxjs';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-kcc',
  templateUrl: './kcc.component.html',
  styleUrls: ['./kcc.component.css']
})
export class KccComponent implements OnInit, AfterViewInit {

    lineChart;
    barChart;
    public allData :any[];
    public allCivilians: any[];
    businessDateGraph;
    civilianGraph;
    Phonesinwoners;
    Phoneszakelijk;
    PhonevisitorsData;
  	/*Aantal telefoontjes per dag */
    

questions;
    questionsRef: AngularFireList<any>;
  questions$: Observable<any[]>;
    size;
    filterBusiness;
    filterCivilian;
   
  constructor(public db: AngularFireDatabase, public questionSerivce: QuestionService) {
    
   }
   
 
  ngOnInit(){

    
    this.getAllData();
    this.getAllCivilians()
   
  }

  getAllData()
  {
      this.questionSerivce.getAllData().subscribe(res => this.getData(res));
       
  }

  getAllCivilians(){
    this.questionSerivce.getAllCivilians().subscribe(cev => this.getCivilian(cev));
  }

  getData(res){
    this.businessDateGraph = res;
    console.log(this.businessDateGraph);
  }

  getCivilian(cev){
    this.civilianGraph = cev;
    console.log(this.civilianGraph);
  }
  

  ngAfterViewInit():void{
    console.log(this.businessDateGraph);
        this.drawChart();
    
  }

  drawChart(){
   
    setTimeout(() =>{

      this.Phonesinwoners = {
        label: "Telefoontjes inwoners",
        data: this.civilianGraph,
        lineTension: 0.3,
        fill: false,
        borderColor: '#4C781A',
        backgroundColor: '#4C781A',
        pointBorderColor: '#4C781A',
        pointBackgroundColor: '#4C781A',
        pointRadius: 5,
        pointHoverRadius: 15,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        pointStyle: 'rect'
      };
    
   this.Phoneszakelijk = {
        label: "Telefoontjes zakelijk",
        data: this.businessDateGraph,
        lineTension: 0.3,
        fill: false,
        borderColor: '#6CAC22',
        backgroundColor: '#6CAC22',
        pointBorderColor: '#6CAC22',
        pointBackgroundColor: '#6CAC22',
        pointRadius: 5,
        pointHoverRadius: 15,
        pointHitRadius: 30,
        pointBorderWidth: 2
      };
    
    this.PhonevisitorsData = {
      labels: ["19 novemer", "20 november", "21 november", "22 november", "23 novmeber"],
      datasets: [this.Phonesinwoners, this.Phoneszakelijk]
    };

      
    this.lineChart = new Chart('PhonevisitorsChart', {
      type: 'line',
      data: this.PhonevisitorsData,
      options: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      }
    });	
   
    /*Onderwerp telefoontjes */
this.barChart = new Chart('bar-chart-visitsubjectsphone', {
  type: 'bar',
  data: {
    labels: ["Doorverbinden", "Melding openbare ruimte", "WMO", "Wonen", "Burgerzaken", "Afval","overig", "Afspraak maken", "Klachten", "Millieu", "Intern","Feestdagen", "Vacatures", "Terugbellen", "website","verloren en gevonden", "Subsidies","sociale dienst", "Contactgegevens"],
    datasets: [
      {
        label: "Aantal telefoontjes inwoners",
        backgroundColor: "#4C781A",
        data: [128, 87, 65, 48, 37, 36, 25, 20, 11, 5, 3, 3, 2, 2,1,1,1,1,1]
      }, {
        label: "Aantal telefoontjes zakelijk",
        backgroundColor: "#6CAC22",
        data: [70, 2, 9, 6, 1, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'gebeld over onderwerperpen inwoners v.s zakelijk'
    }
  }
});
}, 1000)
  }




}
