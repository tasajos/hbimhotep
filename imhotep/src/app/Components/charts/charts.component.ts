import { Component, OnInit } from '@angular/core';
import { Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(){}

    ngOnInit(): void {
this.RenderChart();

    }


    RenderChart(){
      //const ctx = document.getElementById('myChart');

      const myChart =  new Chart("piechart", {
        type: 'bar',
        data: {
          labels: ['Incidente',  'Requerimiento'],
          datasets: [{
            label: '# ',
            data: [25, 10],
            borderWidth: 2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
                          ],
                          borderColor: [
                            'rgb(255, 99, 132)',                         
                            'rgb(75, 192, 192)'
                           

                          ],

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    }
  }


