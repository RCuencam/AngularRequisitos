import { Component, OnInit } from '@angular/core';
import { Requisito } from 'src/app/models/requisito';
import { RequisitosService } from 'src/app/services/requisitos.service';

@Component({
  selector: 'app-requisitos-list',
  templateUrl: './requisitos-list.component.html',
  styleUrls: ['./requisitos-list.component.css']
})
export class RequisitosListComponent implements OnInit {

  dataSource: Requisito[] = [];
  displayedColumns: string[] = ['id_Requisitos', 'Requisito'];

  constructor(private requisitoService: RequisitosService) { }

  ngOnInit(): void {
    this.requisitoService.getRequisitos().subscribe(data => {
      this.dataSource = data;
    })
  }

}
