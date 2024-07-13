// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module 'svelte-icons/fa' {
	import { SvelteComponent } from 'svelte';
	
	export class FaFacebook extends SvelteComponent {}
	export class FaTwitter extends SvelteComponent {}
	export class FaInstagram extends SvelteComponent {}
  }
  
