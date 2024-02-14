# Gex Icons

This repository contains icons[^1.1] intended for use in the Gex Component
Library[^1.2] per the Gex Design System[^1.3] housed in the GexUI[^1]
repository.

[^1.1]: <https://figma.com/file/kvMmlPoqMjNLraXH650Vcz/ℹ️-Gex-Icons>
[^1.2]: <https://figma.com/file/TzBgRzUiUB7CBAoJU2LEy9/🧩-Gex-Components>
[^1.3]: <https://figma.com/file/9ps3lRhg6kKFkKnQYeuTab/🎨-Gex-Styles>
[^1]: <https://github.com/PetPartners/IPG.DesignSystems.Gex>

## Setup

The npm dependencies are light as you can see in [package.json](./package.json).
Lets hop in and get you some Icon's!

### Getting started

```shell
# clone repository locally...
gh repo clone darcher-figo/gexicons && cd gexicons

# align node version
nvm use                 # ...or nvm install
nvm install-latest-npm  # ...or npm i -g npm@latest

# check versions
node  --version         # e.g. 21.6.1
npm   --version         # e.g. 10.4.0

# setup env
npm run setupUI         # there's no UI yet... but checkout `./src` for icons.

# then...
npm run build           # look in `./dist` for full optimized icons bundle.
```

## Categories

|                          View                          | Group                                                                 | Categories                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------------------------------------------------: | :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Shipping](icons/core-line.streamline/Shipping/)                      | [`box`](icons/core-line.streamline/Shipping/Box/) [`transfer`](icons/core-line.streamline/Shipping/Transfer/) [`warehouse`](icons/core-line.streamline/Shipping/Warehouse/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [AI](icons/core-line.streamline/Artificial%20Intelligence)            | [`ai`](icons/core-line.streamline/Artificial%20Intelligence/Artificial%20Intelligence/) [`deepfake`](icons/core-line.streamline/Artificial%20Intelligence/Deepfake/) [`system`](icons/core-line.streamline/Artificial%20Intelligence/Robot/) [`spark`](icons/core-line.streamline/Artificial%20Intelligence/Spark/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Business](icons/core-line.streamline/Business/)                      | [`office`](icons/core-line.streamline/Business/Business%20Office/) [`marketing`](icons/core-line.streamline/Business/Marketing%20Strategy/) [`production`](icons/core-line.streamline/Business/Production)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Mail](icons/core-line.streamline/Mail/)                              | [`chat`](icons/core-line.streamline/Mail/Chat%20Bubble/) [`inbox`](icons/core-line.streamline/Mail/Inbox/) [`send`](icons/core-line.streamline/Mail/Send/) [`signs`](icons/core-line.streamline/Mail/Signs/) [`emoji`](icons/core-line.streamline/Mail/Smiley/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Work / Education](icons/core-line.streamline/Work%20Education/)      | [`learn`](icons/core-line.streamline/Work%20Education/Learning/) [`office`](icons/core-line.streamline/Work%20Education/Office/) [`school`](icons/core-line.streamline/Work%20Education/School/) [`collaboration`](icons/core-line.streamline/Work%20Education/Working%20Collaborations/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Food / Drink](icons/core-line.streamline/Food%20Drink/)              | [`allergies`](icons/core-line.streamline/Food%20Drink/Allergens/) [`beverage`](icons/core-line.streamline/Food%20Drink/Drinks/) [`food`](icons/core-line.streamline/Food%20Drink/Food/) [`kitchenware`](icons/core-line.streamline/Food%20Drink/Kitchenware/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Nature / Ecology](icons/core-line.streamline/Nature%20Ecology/)      | [`astronomy`](icons/core-line.streamline/Nature%20Ecology/Astronomy/) [`nature`](icons/core-line.streamline/Nature%20Ecology/Nature/) [`science`](icons/core-line.streamline/Nature%20Ecology/Science/) [`sustainable`](icons/core-line.streamline/Nature%20Ecology/Sustainable%20Development%20Goal/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                        |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Img / Photography](icons/core-line.streamline/Images%20Photography/) | [`accessories`](icons/core-line.streamline/Images%20Photography/Accessories/) [`camera`](icons/core-line.streamline/Images%20Photography/Camera/) [`flash`](icons/core-line.streamline/Images%20Photography/Flash/) [`record`](icons/core-line.streamline/Images%20Photography/Photos/) [`pictures`](icons/core-line.streamline/Images%20Photography/Pictures/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Phone](icons/core-line.streamline/Phone/)                            | [`contact`](icons/core-line.streamline/Phone/Contact/) [`cellphone`](icons/core-line.streamline/Phone/Mobile%20Phone/) [`mode`](icons/core-line.streamline/Phone/Mode/) [`notification`](icons/core-line.streamline/Phone/Notification/) [`signal`](icons/core-line.streamline/Phone/Signal/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Culture](icons/core-line.streamline/Culture/)                        | [`mythology`](icons/core-line.streamline/Culture/Astrology/) [`events`](icons/core-line.streamline/Culture/News/) [`politics`](icons/core-line.streamline/Culture/Politics/) [`religions`](icons/core-line.streamline/Culture/Religions/) [`symbols`](icons/core-line.streamline/Culture/Symbols/) [`tickets`](icons/core-line.streamline/Culture/Tickets/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Map / Travel](icons/core-line.streamline/Map%20Travel/)              | [`airport`](icons/core-line.streamline/Map%20and%20Travel/Airport/) [`disability`](icons/core-line.streamline/Map%20and%20Travel/Disability/) [`hotel`](icons/core-line.streamline/Map%20and%20Travel/Hotel/) [`map`](icons/core-line.streamline/Map%20and%20Travel/Map/) [`places`](icons/core-line.streamline/Map%20and%20Travel/Places/) [`transportation`](icons/core-line.streamline/Map%20and%20Travel/Transportation/) [`wayfinder`](icons/core-line.streamline/Map%20and%20Travel/Wayfinder/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Programming](icons/core-line.streamline/Programming/)                | [`applications`](icons/core-line.streamline/Programming/Applications/) [`browser`](icons/core-line.streamline/Programming/Browser/) [`bugs`](icons/core-line.streamline/Programming/Bugs/) [`storage`](icons/core-line.streamline/Programming/Clouds/) [`modules`](icons/core-line.streamline/Programming/Modules/) [`feeds`](icons/core-line.streamline/Programming/RSS/) [`scripts`](icons/core-line.streamline/Programming/Script/) [`internet`](icons/core-line.streamline/Programming/Web/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Entertainment](icons/core-line.streamline/Entertainment/)            | [`camera`](icons/core-line.streamline/Entertainment/Camera/) [`buttons`](icons/core-line.streamline/Entertainment/Control%20Buttons/) [`gaming`](icons/core-line.streamline/Entertainment/Gaming/) [`leisure`](icons/core-line.streamline/Entertainment/Leisure/) [`music`](icons/core-line.streamline/Entertainment/Music%20Notes/) [`party`](icons/core-line.streamline/Entertainment/Party/) [`playlist`](icons/core-line.streamline/Entertainment/Playlist/) [`radio`](icons/core-line.streamline/Entertainment/Radio%20Walkman/) [`recording`](icons/core-line.streamline/Entertainment/Recording/) [`volume`](icons/core-line.streamline/Entertainment/Volume%20Control/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Healthcare](icons/core-line.streamline/Health/)                      | [`ambulance`](icons/core-line.streamline/Health/Ambulance/) [`appointments`](icons/core-line.streamline/Health/Health%20Appointments/) [`documents`](icons/core-line.streamline/Health/Health%20Files/) [`laboratory`](icons/core-line.streamline/Health/Laboratory/) [`medical`](icons/core-line.streamline/Health/Medical/) [`programs`](icons/core-line.streamline/Health/Medical%20Apps/) [`monitoring`](icons/core-line.streamline/Health/Medical%20Monitoring/) [`personnel`](icons/core-line.streamline/Health/Medical%20Personnel/) [`insignia`](icons/core-line.streamline/Health/Medical%20Symbols/) [`transfusion`](icons/core-line.streamline/Health/Transfusion/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Money / Shopping](icons/core-line.streamline/Money%20Shopping/)      | [`atm`](icons/core-line.streamline/Money%20Shopping/ATM/) [`bags`](icons/core-line.streamline/Money%20Shopping/Bags/) [`bank`](icons/core-line.streamline/Money%20Shopping/Bank/) [`store`](icons/core-line.streamline/Money%20Shopping/Building%20Store/) [`cart`](icons/core-line.streamline/Money%20Shopping/Cart/) [`cash`](icons/core-line.streamline/Money%20Shopping/Cash/) [`transaction`](icons/core-line.streamline/Money%20Shopping/Cashier/) [`currency`](icons/core-line.streamline/Money%20Shopping/Currency/) [`fashion`](icons/core-line.streamline/Money%20Shopping/Fashion/) [`furniture`](icons/core-line.streamline/Money%20Shopping/Furniture/) [`gift`](icons/core-line.streamline/Money%20Shopping/Gift%20Present/) [`graphs`](icons/core-line.streamline/Money%20Shopping/Graphs/) [`jewelry`](icons/core-line.streamline/Money%20Shopping/Jewelry/) [`legal`](icons/core-line.streamline/Money%20Shopping/Legal/) [`safe`](icons/core-line.streamline/Money%20Shopping/Safe/) [`sports`](icons/core-line.streamline/Money%20Shopping/Sports/) [`wallet`](icons/core-line.streamline/Money%20Shopping/Wallet/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Computer / Devices](icons/core-line.streamline/Computer%20Devices/)  | [`battery`](icons/core-line.streamline/Computer%20Devices/Battery/) [`chips`](icons/core-line.streamline/Computer%20Devices/Chips/) [`computer`](icons/core-line.streamline/Computer%20Devices/Computer/) [`connection`](icons/core-line.streamline/Computer%20Devices/Connection/) [`controller`](icons/core-line.streamline/Computer%20Devices/Controller/) [`database`](icons/core-line.streamline/Computer%20Devices/Database/) [`handheld`](icons/core-line.streamline/Computer%20Devices/Handheld/) [`keyboard`](icons/core-line.streamline/Computer%20Devices/Keyboard/) [`logo`](icons/core-line.streamline/Computer%20Devices/Logo/) [`mouse`](icons/core-line.streamline/Computer%20Devices/Mouse/) [`devices`](icons/core-line.streamline/Computer%20Devices/Other%20Devices/) [`printer`](icons/core-line.streamline/Computer%20Devices/Printer/) [`robot`](icons/core-line.streamline/Computer%20Devices/Robot/) [`screens`](icons/core-line.streamline/Computer%20Devices/Screens/) [`smartwatch`](icons/core-line.streamline/Computer%20Devices/Smartwatch/) [`storage`](icons/core-line.streamline/Computer%20Devices/Storage/) [`virtual`](icons/core-line.streamline/Computer%20Devices/Virtual%20Reality/) [`voicemail`](icons/core-line.streamline/Computer%20Devices/Voice%20Mail/) [`webcam`](icons/core-line.streamline/Computer%20Devices/Webcam/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Interface](icons/core-line.streamline/Interface%20Essential/)        | [`3d`](icons/core-line.streamline/Interface%20Essential/3D/) [`alerts`](icons/core-line.streamline/Interface%20Essential/Alerts/) [`bookmarks`](icons/core-line.streamline/Interface%20Essential/Bookmark%20Favorite/) [`calendar`](icons/core-line.streamline/Interface%20Essential/Calendar/) [`contents`](icons/core-line.streamline/Interface%20Essential/Contents/) [`cursor`](icons/core-line.streamline/Interface%20Essential/Cursor/) [`dashboard`](icons/core-line.streamline/Interface%20Essential/Dashboard/) [`gestures`](icons/core-line.streamline/Interface%20Essential/Hand%20Gestures/) [`help`](icons/core-line.streamline/Interface%20Essential/Help/) [`home`](icons/core-line.streamline/Interface%20Essential/Home/) [`id`](icons/core-line.streamline/Interface%20Essential/Id/) [`lock`](icons/core-line.streamline/Interface%20Essential/Lock%20Unlock/) [`login`](icons/core-line.streamline/Interface%20Essential/Logi%20Logout/) [`security`](icons/core-line.streamline/Interface%20Essential/Security/) [`signal`](icons/core-line.streamline/Interface%20Essential/Signal/) [`trophy`](icons/core-line.streamline/Interface%20Essential/Trophy%20Award/) [`store`](icons/core-line.streamline/Interface%20Essential/Upload%20Download/) [`user`](icons/core-line.streamline/Interface%20Essential/User/) [`validation`](icons/core-line.streamline/Interface%20Essential/Validation/) [`vectors`](icons/core-line.streamline/Interface%20Essential/Vectors/) [`weather`](icons/core-line.streamline/Interface%20Essential/Weather/) [`time`](icons/core-line.streamline/Interface%20Essential/Time/) [`presentation`](icons/core-line.streamline/Interface%20Essential/Presentation/) [`pathfinder`](icons/core-line.streamline/Interface%20Essential/Pathfinder/)                                                                                                    |
| [:mag:](https://www.streamlinehq.com/icons/core-line/) | [Essential](icons/core-line.streamline/Interface%20Essential/)        | [`edit`](icons/core-line.streamline/Interface%20Essential/Add%20Remove%20Delete/) [`align`](icons/core-line.streamline/Interface%20Essential/Align/) [`arrows`](icons/core-line.streamline/Interface%20Essential/Arrows/) [`edit`](icons/core-line.streamline/Interface%20Essential/Edit/) [`files`](icons/core-line.streamline/Interface%20Essential/Files%20Folders/) [`flip`](icons/core-line.streamline/Interface%20Essential/Flip/) [`media`](icons/core-line.streamline/Interface%20Essential/Image%20Audio%20Video/) [`layouts`](icons/core-line.streamline/Interface%20Essential/Layouts/) [`lighting`](icons/core-line.streamline/Interface%20Essential/Lighting/) [`color`](icons/core-line.streamline/Interface%20Essential/Color/) [`layout`](icons/core-line.streamline/Interface%20Essential/Columns%20Rows/) [`links`](icons/core-line.streamline/Interface%20Essential/Link%20Unlink/) [`shapes`](icons/core-line.streamline/Interface%20Essential/Geometric%20Shape/) [`controls`](icons/core-line.streamline/Interface%20Essential/Page%20Controller/) [`view`](icons/core-line.streamline/Interface%20Essential/View/) [`print`](icons/core-line.streamline/Interface%20Essential/Print/) [`position`](icons/core-line.streamline/Interface%20Essential/Resize%20Move/) [`warp`](icons/core-line.streamline/Interface%20Essential/Warp/) [`setting`](icons/core-line.streamline/Interface%20Essential/Setting/) [`share`](icons/core-line.streamline/Interface%20Essential/Share/) [`mathematics`](icons/core-line.streamline/Interface%20Essential/Mathematics/) [`search`](icons/core-line.streamline/Interface%20Essential/Search/) [`hierarchy`](icons/core-line.streamline/Interface%20Essential/Hierarchy/) [`select`](icons/core-line.streamline/Interface%20Essential/Select%20Copy/) [`formatting`](icons/core-line.streamline/Interface%20Essential/Text%20Formatting/) |

## Legal

The Streamline[^2.0] Core Line icon bundle[^2.1], acquired via the providers
online store[^2.2], is licensed[^2.3] for usage under Creative Common's
international non-commercial share-alike (version 4.0) attribution[^2.4].

[^2.0]: <https://streamlinehq.com>
[^2.1]: <https://streamlinehq.com/icons/core-line>
[^2.2]: <https://store.streamlinehq.com/products/core-line-3-302-icons>
[^2.3]:
    <https://help.streamlinehq.com/en/articles/6067458-one-time-purchase-license>

[^2.4]: <https://creativecommons.org/licenses/by-nc-sa/4.0>

<!--

/**
 *
 *
 *
 *
		'removeXMLNS',
		'removeNonInheritableGroupAttrs',
		{
			name: 'removeXlink',
			active: false,
			// params: {
			// 	includeLegacy: false,
			// },
		},
		{
			name: 'removeDesc',
			active: false,
			// params: {
			// 	removeAny: true,
			// },
		},
		{
			name: 'cleanupIds',
			active: false,
			// params: {
			// 	remove: true,
			// 	minify: true,
			// 	preserve: [],
			// 	preservePrefixes: ['gex-*'],
			// 	force: false,
			// },
		},
		{
			name: 'prefixIds',
			active: false,
			// params: {
			// 	prefix: 'gex-',
			// 	delim: '',
			// 	prefixIds: true,
			// 	prefixClassNames: false,
			// },
		},

		{
			name: 'removeComments',
			active: false,
			// params: {
			// 	removeAll: true,
			// 	preserve: [], // '@', '?', '!', 'TODO', '**', 'NOTE'
			// },
		},
		{
			name: 'removeHiddenElems',
			active: false,
			// params: {
			// 	isHidden: true,
			// 	opacity0: true,
			// 	circleR0: true,
			// 	ellipseRX0: true,
			// 	ellipseRY0: true,
			// 	rectWidth0: true,
			// 	pathEmptyD: true,
			// 	displayNone: true,
			// 	rectHeight0: true,
			// 	imageWidth0: true,
			// 	imageHeight0: true,
			// 	patternWidth0: true,
			// 	patternHeight0: true,
			// 	polygonEmptyPoints: true,
			// 	polylineEmptyPoints: true,
			// },
		},

		// ! Depreciated when not in overrides
		// {
		// 	name: 'applyTransform',
		// 	params: {
		// 		transforms: [
		// 		],
		// 	},
		// },
		{
			name: 'addClassesToSVGElement',
			active: false,
			// params: {
			// 	classNames: ['gex-icon'],
			// },
		},

		//! Depreciated - no longer usable
		// {
		// 	name: 'removeDeprecatedAttrs',
		// 	params: {
		// 		removeUnsafe: false,
		// 	},
		// },

		{
			name: 'removeAttributesBySelector',
			active: false,
			// params: {
			// 	selector: ['[fill-rule]', '[clip-rule]'],
			// },
		},
		{
			name: 'removeEditorsNSData',
			active: false,
			// params: {
			// 	additionalNamespaces: ['data-*'],
			// },
		},
		{
			name: 'removeAttrs',
			active: false,
		},
		{
			name: 'removeRasterImages',
			active: false,
		},
		{
			name: 'removeScriptElement',
			active: false,
		},
		{
			name: 'removeStyleElement',
			active: false,
		},
		{
			name: 'removeElementsByAttr',
			active: false,
		},
		{
			name: 'removeViewBox',
			active: false,
		},
		{
			name: 'removeOffCanvasPaths',
			active: false,
		},
		{
			name: 'removeDimensions',
			active: false,
		},
		{
			name: 'removeTitle',
			active: false,
		},
 *
 *
 *
 *
 *
 */

-->

### Visual of bundled Icons and compression rates:

This is bundled to `dist/v0.3.2` (versioned in dist based on `package.json`'s `$npm_package_version` 

<img width="1833" alt="Screenshot 2024-02-13 at 21 46 44" src="https://github.com/darcher-figo/gexicons/assets/117687494/f3143605-ae90-4172-8010-113a88e1decc">
