
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js'



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  totalvisit;
  visitSubject;


  constructor(private db: AngularFireDatabase) {  }

  Visitorsphone = {
    label: "Aantal telefoontjes per dag",
    data: [149, 150, 89, 86, 133],
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

Visitorswebsite = {
    label: "Aantal websitebezoeken per dag ",
    data: [487, 507, 573, 457, 430],
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


  TotalvisitorsData = {
    labels: ["19 novemer", "20 november", "21 november", "22 november", "23 novmeber"],
    datasets: [this.Visitorswebsite, this.Visitorsphone]
  };

  chartOptions = {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  
  ngOnInit(){


this.visitSubject = new Chart('TotalvisitorsChart', {
  type: 'line',
  data: this.TotalvisitorsData,
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


/*Onderwerpen bezocht op website en over gebeld */
this.totalvisit = new Chart('bar-chart-visitsubjectstotal', {
  type: 'bar',
  data: {
    labels: ["Doorverbinden", "Melding openbare ruimte", "WMO", "Wonen", "Burgerzaken", "Afval", "Afspraak maken", "Klachten", "Millieu", "Intern","Feestdagen", "Vacatures", "Subsidies", "Contactgegevens"],
    datasets: [
      {
        label: "Aantal keer over gebeld",
        backgroundColor: "#4C781A",
        data: [198, 89, 74, 54, 38, 36, 20, 11, 5, 3, 3, 2, 1, 1]
      }, {
        label: "Aantal keer opgezocht op website",
        backgroundColor: "#6CAC22",
        data: [0, 0, 56, 471, 183, 425, 210, 0, 0, 0, 0, 54, 18, 400]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Informatie opgevraagd over de verschillende categorieën Telefoon V.S Website'
    }
  }
});


  }




}
