import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { User as UserModel } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { collection, onSnapshot  } from 'firebase/firestore';
import { db } from './../firebase.config'; // Pfad anpassen



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})

export class User {

  user = new UserModel();
  allUsers: UserModel[] = [];



  constructor(public dialog: MatDialog) {}



  ngOnInit(): void {
  const usersCollection = collection(db, 'users');

  onSnapshot(usersCollection, snapshot => {
    this.allUsers = snapshot.docs.map(doc => doc.data() as UserModel);
    console.log('Realtime Users', this.allUsers);
  }, error => {
    console.error('Error fetching users', error);
  });

}



  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
