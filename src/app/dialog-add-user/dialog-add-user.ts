import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User as UserModel } from '../../models/user.class';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss']
})
export class DialogAddUser {
  user = new UserModel();
  birthDate: Date = new Date();
  loading = false; // für loading bar in dialog add user

  constructor(public dialogRef: MatDialogRef<DialogAddUser> ) {} // ,private firestore: AngularFirestore

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is:', this.user);
    this.loading = true;
    /* this.firestore
        .collection('user')
        .add(this.user.toJSON())
        .then((result: any) => {
          this.loading = false;
          console.log('Adding user finished', result);
          this.dialogRef.close();
      }); */
  }
}
