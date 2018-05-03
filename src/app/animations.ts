import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
	//Animations are triggered in a component that binds to this trigger
	trigger('routeAnimation', [
		//No idea what this is for. Site just had this so i used it.
		state('*',
			style({
				opacity: 1,
				transform: 'translateX(0)'
			})
		),
		//As the elements enter in, have them not be see through and also ease in within
		//0.2 seconds from the left.
		transition(':enter', [
			style({
				opacity: 0,
				transform: 'translateX(-100%)'
			}),
			animate('1s ease-in')
		]),
		//If user is leaving the page. Ease the elements out within 0.5 seconds.
		//The elements are not see through, and it eases out in the y direction
		transition(':leave', [
			animate('1s ease-out', style({
				opacity: 0,
				transform: 'translateY(100%)'
			}))
		])
	]);