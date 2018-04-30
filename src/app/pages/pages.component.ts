import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { slideInDownAnimation } from '../animations';
import { HostBinding } from '@angular/core';

/**
 * Specifies the html and css templates that are loaded in by this component
 * when this component is initialized through ngOnInit(). Also specifies any transition
 * animations for this component in the animations variable. The animations are held
 * in a seperate module.
 */
@Component({
	//selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.css'],
	animations: [slideInDownAnimation]
})
/**
 * Class that is exported when this component is imported. OnInit is an 
 * interface that forces the programming to implement an ngOnInit method
 * which is called when this component is fired up.s
 */
export class PagesComponent implements OnInit {
	//What css is added to the animation elements
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';

	//Each PageComponent has a page object with these default values.
	page: Page = {
		pageNum: 0,//this.determinePageNum(),
		title: 'Default Title',
		imgPath: 'siteImage.png'//this.determineTitle()
	};

	//Constructs this object and the route it is attatched to.
	constructor(private route: ActivatedRoute,
		private router: Router) { }

	/*
	 * This method is what is called right after this component is constructed
	 * and put into the page. Basically all this method does right now is it
	 * sets the current pages title, pagnum, and image path to the ones in the
	 * current routes view data (the data object of the route) and also 
	 * sets up the event listeners for the navigation links in the
	 * template html file loaded in from above. These listners basically
	 * tell the router to navigate to a given view using a given path.
	 */
	ngOnInit() {
		this.page.title = this.route.snapshot.data['title'];
		this.page.pageNum = this.route.snapshot.data['pageNum'];
		this.page.imgPath = this.route.snapshot.data['imgPath'];

		let pageOne = document.getElementById("page1");
		let pageTwo = document.getElementById("page2");
		let pageThree = document.getElementById("page3");
		let pageFour = document.getElementById("page4");

		//Adds event listeners in order to navigate the views
		pageOne.addEventListener("click", (evt) => {
			//anchor tag doesn't load a new page
			evt.preventDefault();

			//Change the path to this, and tell router to refresh view based 
			//on this new path.
			this.router.navigate(['./applet']);
		}, false);

		//Same as above
		pageTwo.addEventListener("click", (evt) => {
			evt.preventDefault();
			this.router.navigate(['./history']);
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
