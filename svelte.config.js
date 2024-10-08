import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			/**
			 * Useful for importing SvelteKit types
			 * @example
			 * import type { PageData } from '$routes/<your-route>/$types'
			 **/
			$routes: './src/routes',
			$utils: './src/lib/utils'
		}
	}
}

export default config
