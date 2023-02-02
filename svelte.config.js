import preprocess from 'svelte-preprocess';
// import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// more: https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
		//adapter: vercel(),
		// Override: methodOverride: { allowed: ['PATCH', 'DELETE'] },

	},
	// plugin options
  vitePlugin: {
    exclude: [],

    // experimental options
		experimental: {
      inspector: {
        toggleKeyCombo: 'meta-shift',
        holdMode: false,
        showToggleButton: 'never', //always
        //toggleButtonPos: 'bottom-left'
      }
    }
  }
};

export default config;
