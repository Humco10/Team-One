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
	templateUrl: './applet.component.html',
	styleUrls: ['./applet.component.css'],
	animations: [slideInDownAnimation]
})
/**
 * Class that is exported when this component is imported. OnInit is an 
 * interface that forces the programming to implement an ngOnInit method
 * which is called when this component is fired up.s
 */
export class AppletComponent implements OnInit {
	//What css is added to the animation elements
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';

	//Constructs this object and the route it is attatched to.
	constructor(private route: ActivatedRoute,
		private router: Router) { }

	/*
	 * Humberto, this is where you will need to do any javascript you need for
	 * the applet page. The html/css templates is how you set up how your page
	 * and how you make it look perrty but below is where you add your event
	 * listeners, and file loading crap, etc...
	 */
	ngOnInit() {

	}
}
