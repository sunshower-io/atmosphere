// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
    'list': [
        'index.html',
        'config.js',
        'favicon.ico',
        'LICENSE',
        'locales/en/translation.json',
        'jspm_packages/github/sunshower-io/aire@1.0.0/**/*',
        'jspm_packages/github/sunshower-io/aire@1.0.0.js',
        'jspm_packages/npm/golden-layout@1.5.9/goldenlayout.js',
        "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js",
       
        'jspm_packages/github/systemjs/plugin-css@0.1.31/**/*',
        'jspm_packages/github/systemjs/plugin-css@0.1.31.js',

        'jspm_packages/github/systemjs/plugin-text@0.0.8/**/*',
        'jspm_packages/github/systemjs/plugin-text@0.0.8.js',
        'jspm_packages/system.js',
        'jspm_packages/system-polyfills.js',
        'jspm_packages/system-csp-production.js',
        'styles/styles.css',
    ],
    // this section lists any jspm packages that have
    // unbundled resources that need to be exported.
    // these files are in versioned folders and thus
    // must be 'normalized' by jspm to get the proper
    // path.
    'normalize': [
        ['plugin-css', ['/**/*']],
        ['plugin-text', ['/**/*']],
        ['golden-layout', ['/**/*']],
        ['aire', ['/**/*']],
        [
            // include font-awesome.css and its fonts files
            'font-awesome', [
            '/css/font-awesome.min.css',
            '/fonts/*'
        ]
        ], [
            // include bootstrap's font files
            'bootstrap', [
                '/fonts/*'
            ]
        ], [
            'bluebird', [
                '/js/browser/bluebird.min.js'
            ]
        ]
    ]
};
