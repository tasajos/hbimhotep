import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registroticket } from 'src/app/Interfaz/sdesk';
import { SdeskService } from 'src/app/services/sdesk.service';


@Component({
  selector: 'app-vticket',
  templateUrl: './vticket.component.html',
  styleUrls: ['./vticket.component.css']
})
export class VticketComponent implements OnInit{

  id:number;
  idticket! : registroticket;
  loading:boolean = false;
  
    constructor (private _verticketservice:SdeskService,
      private aRoute: ActivatedRoute) {
  
        this.id = +this.aRoute.snapshot.paramMap.get('id')!;
        
       }
  
  
    ngOnInit(): void {
      this.obtenerticket();
    }
    obtenerticket(){
  this._verticketservice.getidticket(this.id).subscribe(data => this.idticket =data);
  
  }
  
  }
  
