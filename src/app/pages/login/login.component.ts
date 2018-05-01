import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../animations';
import { HostBinding } from '@angular/core';

/**
 * Specifies the html and css templates that are loaded in by this component
 * when this component is initialized through ngOnInit(). Also specifies any transition
 * animations for this component in the animations variable. The animations are held
 * in a seperate module.
 */
@Component({
	//selector: 'app-pages',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [slideInDownAnimation]
})
/**
 * Class that is exported when this component is imported. OnInit is an 
 * interface that forces the programming to implement an ngOnInit method
 * which is called when this component is fired up.s
 */
export class LoginComponent implements OnInit {
	//What css is added to the animation elements
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';

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
		/**Any login javascript stuff we need will go in here */
	}
}
