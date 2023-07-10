import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-dougnut',
  templateUrl: './dougnut.component.html',
  styleUrls: ['./dougnut.component.css']
})
export class DougnutComponent implements OnInit, AfterViewInit {
  @ViewChild('dchart', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart<'doughnut'> | undefined;

  ngOnInit(): void {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4
        }
      ]
    };

    const config: ChartConfiguration<'doughnut', number[], unknown> = {
      type: 'doughnut',
      data: data,
    };

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, config);
    }
  }
}