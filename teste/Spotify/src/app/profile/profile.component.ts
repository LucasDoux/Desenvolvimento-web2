import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersistUsers } from '../services/users.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	user: User;

	constructor(
		private route: ActivatedRoute,
		private pu: PersistUsers,
		private router: Router
	) {}

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('user'));
	}

	onDelete(user: User) {
		this.pu.deleteUser(this.user);
		localStorage.removeItem('user');
		this.router.navigate(['/']);
	}

	onEdit(userId: number) {}
}
