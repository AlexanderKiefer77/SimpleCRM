import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User as UserModel } from '../../models/user.class';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDatepickerModule,
    FormsModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.html',
  styleUrls: ['./dialog-edit-user.scss'],
})
export class DialogEditUser {
  user: UserModel;
  loading = false;
  birthDate: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<DialogEditUser>,
    @Inject(MAT_DIALOG_DATA) public data: { user?: UserModel; userId?: string }
  ) {
    this.user = data?.user ? new UserModel(data.user) : new UserModel();
    if (this.user.birthDate) {
      this.birthDate = new Date(this.user.birthDate);
    }
  }

  async saveUser() {
    if (!this.user.id) {
      console.error('Cannot save user: ID is missing');
      return;
    }

    this.loading = true;
    try {
      const userRef = doc(db, 'users', this.user.id);
      await updateDoc(userRef, {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        birthDate: this.birthDate.getTime()
      });

      console.log('User updated');
      this.dialogRef.close();
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}