const path = require('path');

const config = {
    entry: 'src/converse.js',
    externals: [{
                "window": "window"
    }],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'converse.js'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            "almond":                   "almond/almond",
            "awesomplete":              "awesomplete-avoid-xss/awesomplete",
            "babel":                    "requirejs-babel/babel-5.8.34.min",
            "backbone":                 "backbone/backbone",
            "backbone.browserStorage":  "backbone.browserStorage/backbone.browserStorage",
            "backbone.noconflict":      "../src/backbone.noconflict",
            "backbone.overview":        "backbone.overview/backbone.overview",
            "emojione":                 "emojione/lib/js/emojione",
            "es6-promise":              "es6-promise/dist/es6-promise.auto",
            "eventemitter":             "otr/build/dep/eventemitter",
            "form-utils":               "../src/form-utils",
            "jquery":                   "jquery/dist/jquery",
            "jquery.browser":           "jquery.browser/dist/jquery.browser",
            "jquery.noconflict":        "../src/jquery.noconflict",
            "lodash":                   "lodash/lodash",
            "lodash.converter":         "3rdparty/lodash.fp",
            "lodash.fp":                "../src/lodash.fp",
            "lodash.noconflict":        "../src/lodash.noconflict",
            "pluggable":                "pluggable.js/dist/pluggable",
            "polyfill":                 "../src/polyfill",
            "sizzle":                   "jquery/sizzle/dist/sizzle",
            "strophe":                  "strophe.js/strophe",
            "strophe.disco":            "strophejs-plugin-disco/strophe.disco",
            "strophe.ping":             "strophejs-plugin-ping/strophe.ping",
            "strophe.rsm":              "strophejs-plugin-rsm/strophe.rsm",
            "strophe.vcard":            "strophejs-plugin-vcard/strophe.vcard",
            "text":                     "text/text",
            "tpl":                      "lodash-template-loader/loader",
            "typeahead":                "components/typeahead.js/index",
            "underscore":               "../src/underscore-shim",
            "utils":                    "../src/utils",
            "xss":                      "xss/dist/xss",
            "xss.noconflict":           "../src/xss.noconflict",

            // Converse
            "converse":                 "../src/converse",
            "inverse":                  "../src/inverse",

            "converse-bookmarks":       "../src/converse-bookmarks",
            "converse-chatboxes":       "../src/converse-chatboxes",
            "converse-chatview":        "../src/converse-chatview",
            "converse-controlbox":      "../src/converse-controlbox",
            "converse-core":            "../src/converse-core",
            "converse-disco":           "../src/converse-disco",
            "converse-dragresize":      "../src/converse-dragresize",
            "converse-headline":        "../src/converse-headline",
            "converse-inverse":         "../src/converse-inverse",
            "converse-mam":             "../src/converse-mam",
            "converse-minimize":        "../src/converse-minimize",
            "converse-muc":             "../src/converse-muc",
            "converse-muc-embedded":    "../src/converse-muc-embedded",
            "converse-notification":    "../src/converse-notification",
            "converse-otr":             "../src/converse-otr",
            "converse-ping":            "../src/converse-ping",
            "converse-register":        "../src/converse-register",
            "converse-roomslist":       "../src/converse-roomslist",
            "converse-rosterview":      "../src/converse-rosterview",
            "converse-singleton":       "../src/converse-singleton",
            "converse-vcard":           "../src/converse-vcard",

            // Off-the-record-encryption
            // "bigint":               "otr/build/dep/bigint",
            "bigint":               "../3rdparty/bigint",
            "crypto":               "otr/build/dep/crypto",
            "salsa20":              "otr/build/dep/salsa20",
            "otr":                  "otr/build/otr",

            // Locales paths
            "locales":   "../src/locales",
            "jed":       "jed/jed",
            "af":        "../locale/af/LC_MESSAGES/converse.json",
            "ca":        "../locale/ca/LC_MESSAGES/converse.json",
            "de":        "../locale/de/LC_MESSAGES/converse.json",
            "es":        "../locale/es/LC_MESSAGES/converse.json",
            "fr":        "../locale/fr/LC_MESSAGES/converse.json",
            "he":        "../locale/he/LC_MESSAGES/converse.json",
            "hu":        "../locale/hu/LC_MESSAGES/converse.json",
            "id":        "../locale/id/LC_MESSAGES/converse.json",
            "it":        "../locale/it/LC_MESSAGES/converse.json",
            "ja":        "../locale/ja/LC_MESSAGES/converse.json",
            "nb":        "../locale/nb/LC_MESSAGES/converse.json",
            "nl":        "../locale/nl/LC_MESSAGES/converse.json",
            "pl":        "../locale/pl/LC_MESSAGES/converse.json",
            "pt_BR":     "../locale/pt_BR/LC_MESSAGES/converse.json",
            "ru":        "../locale/ru/LC_MESSAGES/converse.json",
            "uk":        "../locale/uk/LC_MESSAGES/converse.json",
            "zh":        "../locale/zh/LC_MESSAGES/converse.json",

            "moment_with_locales": "../3rdparty/moment_locales",
        }
    }
}

module.exports = config;
