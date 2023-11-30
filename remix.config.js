import { config } from '@netlify/remix-adapter';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
	...(process.env.NODE_ENV === 'production' ? config : undefined),
	serverDependenciesToBundle: [/^react-icons/],
	// This works out of the box with the Netlify adapter, but you can
	// add your own custom config here if you want to.
	//
	// See https://remix.run/file-conventions/remix-config
	ignoredRouteFiles: ['**/.*'],
	future: {
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
