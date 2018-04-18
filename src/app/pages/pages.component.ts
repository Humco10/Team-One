import { Component, OnInit } from '@angular/core';
import { Page } from '../page';


@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
	page: Page = {
		pageNum: this.determinePageNum(),
		title: this.determineTitle()
	};
	constructor() { }

	ngOnInit() {
		let pageOne = document.getElementById("page1");
		let pageTwo = document.getElementById("page2");
		let pageThree = document.getElementById("page3");
		let pageFour = document.getElementById("page4");

		pageOne.addEventListener("click", (evt) => {
			evt.preventDefault();
			//this.page.title = "Excelsior the Game";
			//this.page.pageNum = 2;
			//document.getElementById("title").innerHTML = this.page.title;
			//document.getElementById("pageNum").innerHTML = "Page: " + this.page.pageNum;
			location.pathname = "applet";
		}, false);

		pageTwo.addEventListener("click", (evt) => {
			evt.preventDefault();
			//this.page.title = "Find a Tweet";
			//this.page.pageNum = 3;
			//document.getElementById("title").innerHTML = this.page.title;
			//document.getElementById("pageNum").innerHTML = "Page: " + this.page.pageNum;
			location.pathname = "tweets";
		}, false);

		pageThree.addEventListener("click", (evt) => {
			evt.preventDefault();
			//this.page.title = "Random Shtuff";
			//this.page.pageNum = 4;
			//document.getElementById("title").innerHTML = this.page.title;
			//document.getElementById("pageNum").innerHTML = "Page: " + this.page.pageNum;
			location.pathname = "random";
		}, false);

		pageFour.addEventListener("click", (evt) => {
			evt.preventDefault();
			//this.page.title = "Login Through Twitter";
			//this.page.pageNum = 1;
			//document.getElementById("title").innerHTML = this.page.title;
			//document.getElementById("pageNum").innerHTML = "Page: " + this.page.pageNum;
			location.pathname = "";
		}, false);
	}

	determineTitle() {
		let path = location.pathname;
		let title = "NULL title";

		if (path === "/") {
			title = "Login Through Twitter";
		}
		else if (path === "/applet") {
			title = "Excelsior The Game!";
		}
		else if (path === "/tweets") {
			title = "Find a Tweet";
		}
		else {
			title = "Random Shtuff";
		}

		return title;
	}

	determinePageNum() {
		let path = location.pathname;
		let pageNum = -1;

		if (path === "/") {
			pageNum = 1;
		}
		else if (path === "/applet") {
			pageNum = 2;
		}
		else if (path === "/tweets") {
			pageNum = 3;
		}
		else {
			pageNum = 4;
		}

		return pageNum;
	}

}
