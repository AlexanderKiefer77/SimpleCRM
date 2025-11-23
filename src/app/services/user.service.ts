import { Injectable } from '@angular/core';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  async getUsers() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(d => d.data());
  }
}