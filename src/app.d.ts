/* learn: TypeScript
First, you need a TypeScript source file. This can be a .ts file. Inside this file you should include a class definition and one or more function definitions that start with the keyword 'function'.  Next, you need to configure the TypeScript compiler options to ensure that the generated JavaScript has the correct syntax. Finally, you can run the TypeScript compiler to generate the corresponding JavaScript files.
*/

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@sveltejs/kit" />
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};