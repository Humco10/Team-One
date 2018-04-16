import { Component, OnInit } from '@angular/core';
import { Page } from '../page';


@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
	page: Page = {
		pageNum: 1,
		title: 'Login through Twitter'
	};
	constructor() { }

	ngOnInit() {
	}

}