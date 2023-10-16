import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'
const preline = require('preline/plugin')
const prettierPluginSvelte = require("prettier-plugin-svelte")
const prettierPluginTailwindcss = require("prettier-plugin-tailwindcss");


/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),'node_modules/preline/dist/*.js',],
	theme: {
		extend: {},
	},
	plugins: [forms,typography,...skeleton(), preline, prettierPluginTailwindcss, prettierPluginSvelte],
}
