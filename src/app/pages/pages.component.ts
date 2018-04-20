import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { slideInDownAnimation } from '../animations';
import { HostBinding } from '@angular/core';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.css'],
	animations: [slideInDownAnimation]
})
export class PagesComponent implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';

	page: Page = {
		pageNum: 0,//this.determinePageNum(),
		title: 'Default Title'//this.determineTitle()
	};
	constructor(private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.page.title = this.route.snapshot.data['title'];
		this.page.pageNum = this.route.snapshot.data['pageNum'];

		let pageOne = document.getElementById("page1");
		let pageTwo = document.getElementById("page2");
		let pageThree = document.getElementById("page3");
		let pageFour = document.getElementById("page4");

		//Adds event listeners in order to navigate the views
		pageOne.addEventListener("click", (evt) => {
			evt.preventDefault();
			this.router.navigate(['./applet']);
		}, false);

		pageTwo.addEventListener("click", (evt) => {
			evt.preventDefault();
			this.router.navigate(['./tweets']);
		}, false);

		pageThree.addEventListener("click", (evt) => {
			evt.preventDefault();
			this.router.navigate(['./random']);
		}, false);

		pageFour.addEventListener("click", (evt) => {
			evt.preventDefault();
			this.router.navigate(['./']);
		}, false);
	}
}
