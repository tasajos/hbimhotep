import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { registroticket } from 'src/app/Interfaz/sdesk';
import { SdeskService} from 'src/app/services/sdesk.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-listaticket',
  templateUrl: './listaticket.component.html',
  styleUrls: ['./listaticket.component.css']
})
export class ListaticketComponent implements OnInit,AfterViewInit {


  displayedColumns: string[] = ['codigo','tipo','area','estado','descripcion'];
  dataSource = new MatTableDataSource<registroticket>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _ractivoservice:SdeskService,
    private _snackBar: MatSnackBar,) {}


  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    this.dataSource.sort = this.sort;
    

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }


  obtenerdboard(){

    this._ractivoservice.getregistros().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
    this.obtenerdboard();
  
  }


};
