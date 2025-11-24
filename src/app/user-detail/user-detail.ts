import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { doc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { db } from '../firebase.config';
import { User as UserModel } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddress } from '../dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule    
  ],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.scss'],
})
export class UserDetail implements OnInit, OnDestroy {

  userId: string | null = null;
  user: UserModel = new UserModel();
  private unsubscribe: Unsubscribe | null = null;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      if (this.userId) this.getUser();
    });
  }

  getUser() {
    if (this.unsubscribe) this.unsubscribe();

    const userRef = doc(db, 'users', this.userId!);
    this.unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        this.user = new UserModel({ ...data, id: docSnap.id });
        console.log('User from Firebase (realtime):', this.user);
      }
    });
  }

  editUserDetail() {
    this.dialog.open(DialogEditUser, {
      data: { user: this.user, userId: this.userId }
    });
  }

  editMenu() {
    this.dialog.open(DialogEditAddress, {
      data: { user: this.user, userId: this.userId }
    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) this.unsubscribe();
  }
}