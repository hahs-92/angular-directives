import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  myForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  notValid(field: string) {
    return this.myForm.get(field)?.invalid || false;
  }
}
