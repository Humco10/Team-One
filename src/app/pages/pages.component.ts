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
	 * current routes view data (the data object of the route).
	 */
	ngOnInit() {
		this.page.title = this.route.snapshot.data['title'];
		this.page.pageNum = this.route.snapshot.data['pageNum'];
		this.page.imgPath = this.route.snapshot.data['imgPath'];
	}
}
