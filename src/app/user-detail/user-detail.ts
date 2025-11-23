import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {



openAddressDialog() {};

editUserDetail() {};

editMenu() {};


}