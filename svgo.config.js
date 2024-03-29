export default {
	floatPrecision: 3,
	finalNewline: true,
	multipass: true,
	recursive: true,
	pretty: true,
	indent: 3,

	js2svg: {
		datauri: 'base64',
		minify: true,
		indent: 3,
	},

	plugins: [
		'reusePaths',
		'collapseGroups',
		'removeUnusedNS',
		'removeEmptyAttrs',
		'removeUselessDefs',
		'removeEditorsNSData',
		'removeEmptyContainers',
		'convertOneStopGradients',
		'cleanupEnableBackground',
		'convertEllipseToCircle',
		'removeXMLProcInst',
		'sortDefsChildren',
		'collapseGroups',
		'removeMetadata',
		'removeDoctype',
		'mergeStyles',

		//? See <https://github.com/svg/svgo/blob/main/plugins/plugins-types.d.ts>
		{
			name: 'removeUselessStrokeAndFill',
			params: {
				fill: true,
				stroke: true,
				removeNone: true,
			},
		},
		{
			name: 'removeUnknownsAndDefaults',
			params: {
				unknownAttrs: true,
				unknownContent: true,
				defaultAttrs: false,
				defaultMarkupDeclarations: true,
				uselessOverrides: true,
				keepDataAttrs: false,
				keepAriaAttrs: true,
				keepRoleAttr: true,
			},
		},
		{
			name: 'moveElemsAttrsToGroup',
			params: {
				onlyMatchedOnce: false,
				applyToSelf: true,
				elems: [
					'*',
					'path',
					'stroke-miterlimit',
					'stroke',
					'stroke-width',
					'fill',
					'fill-opacity',
					'stroke-linecap',
					'stroke-linejoin',
				],
			},
		},
		{
			name: 'cleanupNumericValues',
			params: {
				leadingZero: false,
				defaultPx: true,
				convertToPx: true,
			},
		},
		{
			name: 'convertStyleToAttrs',
			params: {
				keepImportant: true,
			},
		},
		{
			name: 'cleanupListOfValues',
			params: {
				leadingZero: false,
				defaultPx: true,
				convertToPx: true,
			},
		},
		{
			name: 'convertShapeToPath',
			params: {
				convertArcs: true,
			},
		},
		{
			name: 'convertTransform',
			params: {
				convertToShorts: true,
				degPrecision: 3,
				transformPrecision: 3,
				matrixToTransform: true,
				shortTranslate: true,
				shortScale: true,
				shortRotate: true,
				removeUseless: true,
				collapseIntoOne: true,
				leadingZero: false,
				negativeExtraSpace: true,
			},
		},
		{
			name: 'convertPathData',
			params: {
				applyTransforms: true,
				applyTransformsStroked: true,
				makeArcs: {
					threshold: 3,
					tolerance: 3,
				},
				straightCurves: true,
				convertToQ: true,
				lineShorthands: true,
				convertToZ: true,
				curveSmoothShorthands: true,
				transformPrecision: 3,
				smartArcRounding: true,
				removeUseless: true,
				collapseRepeated: true,
				utilizeAbsolute: false,
				leadingZero: false,
				negativeExtraSpace: true,
				noSpaceAfterFlags: true,
				forceAbsolutePath: false,
			},
		},
		{
			name: 'removeEmptyText',
			params: {
				text: true,
				comment: true,
				tref: true,
			},
		},
		{
			name: 'convertColors',
			params: {
				currentColor: true,
				names2hex: true,
				rgb2hex: false,
				shorthex: true,
				convertCase: 'lower',
				shortname: true,
				shorten: true,
				keepCurrentColor: true,
			},
		},
		{
			name: 'cleanupAttrs',
			params: {
				newlines: true,
				trim: true,
				spaces: true,
			},
		},
		{
			name: 'inlineStyles',
			params: {
				onlyMatchedOnce: false,
				removeMatchedSelectors: true,
				useMqs: true,
				usePseudos: true,
			},
		},
		{
			name: 'minifyStyles',
			params: {
				restructure: true,
				forceMediaMerge: false,
				comments: true,
				usage: {
					ids: true,
					classes: true,
					tags: true,
				},
			},
		},
		{
			name: 'mergePaths',
			params: {
				noSpaceAfterFlags: true,
			},
		},
		{
			name: 'sortAttrs',
			params: {
				xmlnsOrder: 'alphabetical',
			},
		},
		{
			name: 'moveGroupAttrsToElems',
			params: {
				onlyMatchedOnce: false,
				moveTransform: true,
				moveOpacity: true,
				moveStyle: true,
			},
		},
		{
			name: 'addAttributesToSVGElement',
			params: {
				attribute: {
					role: 'img',
					focusable: 'false',
					'aria-label': 'Icon',
					xmlns: 'http://www.w3.org/2000/svg',
				},
			},
		},
	],
}
