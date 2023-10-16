export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [6],
		"/perguntas-frequentes": [7],
		"/recursos": [8],
		"/recursos/blogue": [9],
		"/recursos/blogue/espanhol": [10,[2]],
		"/recursos/blogue/espanhol/qual-a-diferenca-do-espanhol-da-espanha-para-com-o-resto-do-mundo": [11,[2,3]],
		"/recursos/ebooks": [12],
		"/recursos/ebooks/top-10-steps-to-become-a-poliglot-by-yourself-and-without-spending-money-ebook-demo": [13,[4]],
		"/recursos/tutoria": [14],
		"/recursos/tutoria/japanese-learning-map-with-only-free-tools": [15,[5]],
		"/sobre": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';