import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequisitosService } from 'src/app/services/requisitos.service';

@Component({
  selector: 'app-registrar-requisito',
  templateUrl: './registrar-requisito.component.html',
  styleUrls: ['./registrar-requisito.component.css']
})
export class RegistrarRequisitoComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private requisitoService: RequisitosService,
    private router: Router
    ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      Requisito: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar(): void {
    if(this.form.valid) {
      this.requisitoService.createRequisito(this.form.value).subscribe(response => {
        this.form.reset();
        this.router.navigate(['/'])
      })
    }
  }
}
