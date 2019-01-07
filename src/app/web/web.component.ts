import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  lineChart;
  barOne;
  barTwo;

  /*Aantal bezoeken op website */	
  Allvisitorswebsite = {
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

  WebsitevisitorsData = {
  labels: ["19 novemer", "20 november", "21 november", "22 november", "23 novmeber"],
  datasets: [this.Allvisitorswebsite]
};


 constructor() { }

  ngOnInit() {

    this.lineChart = new Chart('WebsitevisitorsChart', {
      type: 'line',
      data: this.WebsitevisitorsData,
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

    /*meest gezochte zoektermen op website   */	
this.barOne = new Chart('bar-chart-visitsubjectswebsite', {
  type: 'horizontalBar',
  data: {
    labels: ["Subsidie", "Monument", "Paspoort", "Vergunning", "Ruimte voor Ruimte", "WMO", "Sport", "Parkeren"],
    datasets: [
      {
        label: "Aantal bezoeken op webpagina",
        backgroundColor: ["#406714","#4b7817", "#56891b","#619a1e","#6cac22","#7ab438","#89bc4e", "#98c464", "#a6cd7a", "#b5d590"],
        data: [6, 2, 2, 2, 2, 2, 2, 1 ]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Interne zoekopdrachten november'
    }
  }
});
  /*Gezochte onderwerpen op */	
  this.barTwo = new Chart('bar-chart-mostsearched', {
    type: 'horizontalBar',
    data: {
      labels: ["Homepagina", "Afvalkalender", "Afspraak maken", "Openingstijden & Contact", "Bestuur en organisatie", "Nieuwbouw", "Contact", "Verhuizing binnen of naar de gemeente", "Inwoners en ondernemers","Vergaderingen"],
      datasets: [
        {
          label: "Aantal bezoeken op webpagina",
          backgroundColor: ["#406714","#4b7817", "#56891b","#619a1e","#6cac22","#7ab438","#89bc4e", "#98c464", "#a6cd7a", "#b5d590"],
          data: [2228,558,437,431,431,354, 350, 304, 234, 207 ]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Meest populaire webpaginas week 47 '
      }
    }
  });
    
  }

}
