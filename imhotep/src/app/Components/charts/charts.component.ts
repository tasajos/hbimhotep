import { Component, OnInit } from '@angular/core';
import { Chart,registerables} from 'node_modules/chart.js'
import { SdeskService } from 'src/app/services/sdesk.service';
import {registroticket,ticketdashboard  } from 'src/app/Interfaz/sdesk';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart: Chart | undefined;
  totalRequerimientos: number = 0;
  totalIncidentes: number = 0;


   constructor(private charsdesk: SdeskService) {}

  ngOnInit(): void {
    this.getTiposReq();
  }

  getTiposReq(): void {
    this.charsdesk.gettiposreq().subscribe(
      (data: ticketdashboard[]) => {
        if (Array.isArray(data)) {
          this.totalRequerimientos = this.calculateTotalRequerimientos(data);
          this.totalIncidentes = this.calculateTotalIncidentes(data);
          this.renderChart();
        } else {
          console.error('Error: Data is not an array.');
        }
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  calculateTotalRequerimientos(data: ticketdashboard[]): number {
    let total = 0;
    for (const item of data) {
      total += item.totalRequerimientos;
    }
    return total;
  }

  calculateTotalIncidentes(data: ticketdashboard[]): number {
    let total = 0;
    for (const item of data) {
      total += item.totalIncidentes;
    }
    return total;
  }

  renderChart(): void {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Incidente', 'Requerimiento'],
        datasets: [{
          label: '#',
          data: [this.totalIncidentes, this.totalRequerimientos],
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