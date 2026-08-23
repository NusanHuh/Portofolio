import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter()
	},

	compilerOptions: {
		runes: ({ filename }: { filename: string }) =>
			filename.includes('node_modules') ? undefined : true
	}
};

export default config;
