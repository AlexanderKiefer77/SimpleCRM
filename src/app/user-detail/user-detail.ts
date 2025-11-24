import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';
import { User as UserModel } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddress } from '../dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, CommonModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.scss'],
})
export class UserDetail implements OnInit {

  userId: string | null = null;
  user: UserModel = new UserModel();
  private unsubscribe: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('GOT ID', this.userId);
      this.getUser();
    })
  }

  getUser() {
    if (this.userId) {
      // Alte Subscription beenden
      if (this.unsubscribe) {
        this.unsubscribe();
      }

      const userRef = doc(db, 'users', this.userId);
      this.unsubscribe = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          this.user = new UserModel(userData);
          console.log('User from Firebase (realtime):', this.user);
        }
      });
    }
  }

  openAddressDialog() {

  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUser);
    dialog.componentInstance.user = this.user;
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddress);
    dialog.componentInstance.user = this.user;
  }

  ngOnDestroy() {
    // Cleanup bei Komponenten-Destroy
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}