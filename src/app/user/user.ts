import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-user',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {

}
