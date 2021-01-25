import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dialogo-actualizar',
  templateUrl: './dialogo-actualizar.component.html',
  styleUrls: ['./dialogo-actualizar.component.scss']
})
export class DialogoActualizarComponent implements OnInit {


  orderForm: FormGroup;
  items: FormArray;


  constructor( 
    public dialogRef: MatDialogRef<DialogoActualizarComponent>,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.orderForm = this.formBuilder.group({
      // customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });


  }

  close() {
    this.dialogRef.close("Informacion pasada");
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
