import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User as UserModel } from '../../models/user.class';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-address.html',
  styleUrls: ['./dialog-edit-address.scss'],
})
export class DialogEditAddress {

  user: UserModel = new UserModel();
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddress>) {}

  async saveUser() {
    this.loading = true;
    try {
      const userRef = doc(db, 'users', this.user.id!);
      await updateDoc(userRef, {
        adress: this.user.adress,
        zipCode: this.user.zipCode,
        city: this.user.city
      });
      console.log('Address updated');
      this.dialogRef.close();
    } catch (error) {
      console.error('Error updating address:', error);
    } finally {
      this.loading = false;
    }
  }
}