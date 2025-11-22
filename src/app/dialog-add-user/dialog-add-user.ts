import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User as UserModel } from '../../models/user.class';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss']
})
export class DialogAddUser {
  user = new UserModel();
  birthDate: Date = new Date();

  constructor() {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is:', this.user);    
  }
 }
