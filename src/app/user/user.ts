import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { User as UserModel } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
// import { NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule ], // ,NgForOf
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})

export class User {

  user = new UserModel();
  allUsers = [];


  constructor(public dialog: MatDialog) { // ,private firestore: AngularFirestore
  }

  /*
  ngOnInit(): void {
    this.firestore
    .collection('users');
    .valueChanges()
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }
  */

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
