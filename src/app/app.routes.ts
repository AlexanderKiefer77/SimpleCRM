import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { User } from './user/user';
import { UserDetail } from './user-detail/user-detail';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'user', component: User },
    { path: 'user/:id', component: UserDetail },
];
