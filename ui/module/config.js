System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "golden-layout": "jspm_packages/goldent-layout@1.5.9/goldenlayout.js",
    "aire": "jspm_packages/github/sunshower-io/aire@1.0.0",
    "aire/*": "jspm_packages/github/sunshower-io/aire@1.0.0/*"
  },
  packages: {
    "@material/textfield": {
      "main": "dist/mdc.textfield.js"
    },
    "@material/drawer": {
      "main": "dist/mdc.drawer.js"
    },
    "@material/tabs": {
      "main": "dist/mdc.tabs.js"
    },
    "golden-layout": {
      "main": "goldenlayout.js"
    },
    "aire": {
      "main": "index.js"
    }
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "@material/button": "npm:@material/button@0.29.0",
    "@material/checkbox": "npm:@material/checkbox@0.29.0",
    "@material/drawer": "npm:@material/drawer@0.29.0",
    "@material/tabs": "npm:@material/tabs@0.29.0",
    "@material/textfield": "npm:@material/textfield@0.29.0",
    "@material/toolbar": "npm:@material/toolbar@0.29.0",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-i18n": "npm:aurelia-i18n@2.1.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-pal": "npm:aurelia-pal@1.4.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-templating": "npm:aurelia-templating@1.7.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "golden-layout": "npm:golden-layout@1.5.9",
    "i18next": "npm:i18next@10.3.0",
    "jquery": "npm:jquery@3.3.1",
    "material-components-web": "npm:material-components-web@0.28.0",
    "phosphor-dockpanel": "npm:phosphor-dockpanel@0.9.7",
    "sunshower-io/aire": "github:sunshower-io/aire@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:sunshower-io/aire@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.12"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:@material/button@0.28.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/button@0.29.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/card@0.28.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/checkbox@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/checkbox@0.29.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/selection-control": "npm:@material/selection-control@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/dialog@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.1.1",
      "focus-trap": "npm:focus-trap@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/drawer@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/drawer@0.29.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/elevation@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/theme": "npm:@material/theme@0.4.0"
    },
    "npm:@material/fab@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/form-field@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/grid-list@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/icon-toggle@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/linear-progress@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/list@0.28.0": {
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/menu@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/radio@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/ripple@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/ripple@0.29.0": {
      "@material/base": "npm:@material/base@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/select@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/list": "npm:@material/list@0.28.0",
      "@material/menu": "npm:@material/menu@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/selection-control@0.28.0": {
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/selection-control@0.29.0": {
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/slider@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/snackbar@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/switch@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/tabs@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/tabs@0.29.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/textfield@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/textfield@0.29.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/toolbar@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/toolbar@0.29.0": {
      "@material/base": "npm:@material/base@0.29.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-binding@1.6.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-i18n@2.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
      "i18next": "npm:i18next@9.1.0",
      "intl": "npm:intl@1.2.5"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-resources@1.5.4": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:focus-trap@2.4.2": {
      "tabbable": "npm:tabbable@1.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.31"
    },
    "npm:golden-layout@1.5.9": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:i18next@10.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:i18next@9.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:material-components-web@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/auto-init": "npm:@material/auto-init@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/button": "npm:@material/button@0.28.0",
      "@material/card": "npm:@material/card@0.28.0",
      "@material/checkbox": "npm:@material/checkbox@0.28.0",
      "@material/dialog": "npm:@material/dialog@0.28.0",
      "@material/drawer": "npm:@material/drawer@0.28.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/fab": "npm:@material/fab@0.28.0",
      "@material/form-field": "npm:@material/form-field@0.28.0",
      "@material/grid-list": "npm:@material/grid-list@0.28.0",
      "@material/icon-toggle": "npm:@material/icon-toggle@0.28.0",
      "@material/layout-grid": "npm:@material/layout-grid@0.24.0",
      "@material/linear-progress": "npm:@material/linear-progress@0.28.0",
      "@material/list": "npm:@material/list@0.28.0",
      "@material/menu": "npm:@material/menu@0.28.0",
      "@material/radio": "npm:@material/radio@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/select": "npm:@material/select@0.28.0",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/slider": "npm:@material/slider@0.28.0",
      "@material/snackbar": "npm:@material/snackbar@0.28.0",
      "@material/switch": "npm:@material/switch@0.28.0",
      "@material/tabs": "npm:@material/tabs@0.28.0",
      "@material/textfield": "npm:@material/textfield@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/toolbar": "npm:@material/toolbar@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-boxpanel@1.0.0-rc.0": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxengine": "npm:phosphor-boxengine@1.0.1",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-dockpanel@0.9.7": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-dragdrop": "npm:phosphor-dragdrop@0.9.1",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-nodewrapper": "npm:phosphor-nodewrapper@1.0.6",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-splitpanel": "npm:phosphor-splitpanel@1.0.0-rc.1",
      "phosphor-stackedpanel": "npm:phosphor-stackedpanel@1.0.0-rc.0",
      "phosphor-tabs": "npm:phosphor-tabs@1.0.0-rc.2",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-domutil@1.2.0": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5"
    },
    "npm:phosphor-dragdrop@0.9.1": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-messaging@1.0.6": {
      "phosphor-queue": "npm:phosphor-queue@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-panel@1.0.0-rc.1": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-properties@2.0.0": {
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0"
    },
    "npm:phosphor-splitpanel@1.0.0-rc.1": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxengine": "npm:phosphor-boxengine@1.0.1",
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-stackedpanel@1.0.0-rc.0": {
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-tabs@1.0.0-rc.2": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxpanel": "npm:phosphor-boxpanel@1.0.0-rc.0",
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "phosphor-stackedpanel": "npm:phosphor-stackedpanel@1.0.0-rc.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-widget@1.0.0-rc.1": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-nodewrapper": "npm:phosphor-nodewrapper@1.0.6",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-queue": "npm:phosphor-queue@1.0.5",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "init/configure-plugins.js",
      "lib/auth/signup/model.js",
      "lib/auth/signup/service.js",
      "lib/plugins.js",
      "lib/plugins/model.js",
      "lib/plugins/service.js",
      "lib/sunshower.js",
      "login/approvals.html!github:systemjs/plugin-text@0.0.8.js",
      "login/approvals.js",
      "login/auth.html!github:systemjs/plugin-text@0.0.8.js",
      "login/auth.js",
      "login/user.js",
      "main.js",
      "modules/main/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/index.js",
      "modules/main/routes/admin/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/admin/index.js",
      "modules/main/routes/admin/signups/signups.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/admin/signups/signups.js",
      "modules/main/routes/admin/system/system.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/admin/system/system.js",
      "modules/main/routes/main/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/main/index.js",
      "modules/main/routes/plugins/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/plugins/index.js",
      "modules/main/routes/settings/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/settings/index.js",
      "modules/main/routes/users/index.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/main/routes/users/index.js",
      "modules/welcome/activate/activate.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/welcome/activate/activate.js",
      "modules/welcome/authentication-page.js",
      "modules/welcome/login/login.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/welcome/login/login.js",
      "modules/welcome/signup/signup.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/welcome/signup/signup.js",
      "modules/welcome/welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "modules/welcome/welcome.js",
      "routes.js",
      "style-guide.html!github:systemjs/plugin-text@0.0.8.js",
      "style-guide.js"
    ],
    "aurelia.js": [
      "aire/api/security.js",
      "aire/api/security/activation-step.js",
      "aire/api/security/authentication.js",
      "aire/api/security/model.js",
      "aire/api/security/service.js",
      "aire/api/storage.js",
      "aire/api/storage/storage.js",
      "aire/components/events.js",
      "aire/index.js",
      "aire/lib/lang.js",
      "aire/lib/types.js",
      "aire/lib/uuid.js",
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:@material/drawer@0.29.0/dist/mdc.drawer.js",
      "npm:@material/tabs@0.29.0/dist/mdc.tabs.js",
      "npm:@material/textfield@0.29.0/dist/mdc.textfield.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.6.0.js",
      "npm:aurelia-binding@1.6.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-i18n@2.1.0.js",
      "npm:aurelia-i18n@2.1.0/aurelia-i18n-loader.js",
      "npm:aurelia-i18n@2.1.0/aurelia-i18n.js",
      "npm:aurelia-i18n@2.1.0/base-i18n.js",
      "npm:aurelia-i18n@2.1.0/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@2.1.0/df.js",
      "npm:aurelia-i18n@2.1.0/i18n.js",
      "npm:aurelia-i18n@2.1.0/nf.js",
      "npm:aurelia-i18n@2.1.0/relativeTime.js",
      "npm:aurelia-i18n@2.1.0/rt.js",
      "npm:aurelia-i18n@2.1.0/t.js",
      "npm:aurelia-i18n@2.1.0/utils.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.4.0.js",
      "npm:aurelia-logging@1.4.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.4.0.js",
      "npm:aurelia-pal@1.4.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.6.js",
      "npm:aurelia-router@1.0.6/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.1.js",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.5.4.js",
      "npm:aurelia-templating-resources@1.5.4/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.5.4/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.5.4/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.5.4/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.5.4/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.5.4/binding-signaler.js",
      "npm:aurelia-templating-resources@1.5.4/compose.js",
      "npm:aurelia-templating-resources@1.5.4/css-resource.js",
      "npm:aurelia-templating-resources@1.5.4/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/dynamic-element.js",
      "npm:aurelia-templating-resources@1.5.4/else.js",
      "npm:aurelia-templating-resources@1.5.4/focus.js",
      "npm:aurelia-templating-resources@1.5.4/hide.js",
      "npm:aurelia-templating-resources@1.5.4/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.5.4/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.5.4/if-core.js",
      "npm:aurelia-templating-resources@1.5.4/if.js",
      "npm:aurelia-templating-resources@1.5.4/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.5.4/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.5.4/repeat.js",
      "npm:aurelia-templating-resources@1.5.4/replaceable.js",
      "npm:aurelia-templating-resources@1.5.4/sanitize-html.js",
      "npm:aurelia-templating-resources@1.5.4/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/show.js",
      "npm:aurelia-templating-resources@1.5.4/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.7.0.js",
      "npm:aurelia-templating@1.7.0/aurelia-templating.js",
      "npm:i18next@9.1.0.js",
      "npm:i18next@9.1.0/dist/commonjs/BackendConnector.js",
      "npm:i18next@9.1.0/dist/commonjs/CacheConnector.js",
      "npm:i18next@9.1.0/dist/commonjs/EventEmitter.js",
      "npm:i18next@9.1.0/dist/commonjs/Interpolator.js",
      "npm:i18next@9.1.0/dist/commonjs/LanguageUtils.js",
      "npm:i18next@9.1.0/dist/commonjs/PluralResolver.js",
      "npm:i18next@9.1.0/dist/commonjs/ResourceStore.js",
      "npm:i18next@9.1.0/dist/commonjs/Translator.js",
      "npm:i18next@9.1.0/dist/commonjs/defaults.js",
      "npm:i18next@9.1.0/dist/commonjs/i18next.js",
      "npm:i18next@9.1.0/dist/commonjs/index.js",
      "npm:i18next@9.1.0/dist/commonjs/logger.js",
      "npm:i18next@9.1.0/dist/commonjs/postProcessor.js",
      "npm:i18next@9.1.0/dist/commonjs/utils.js",
      "npm:i18next@9.1.0/index.js",
      "npm:jquery@3.3.1.js",
      "npm:jquery@3.3.1/dist/jquery.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js"
    ]
  },
  depCache: {
    "app.js": [
      "./routes"
    ],
    "init/configure-plugins.js": [
      "aurelia-framework",
      "aurelia-i18n",
      "aurelia-fetch-client",
      "aire/api/security",
      "aire/api/storage"
    ],
    "lib/auth/signup/service.js": [
      "aurelia-dependency-injection",
      "aurelia-fetch-client",
      "./model",
      "aurelia-framework"
    ],
    "lib/plugins.js": [
      "lib/plugins/model",
      "lib/plugins/service"
    ],
    "lib/plugins/service.js": [
      "aurelia-fetch-client",
      "aurelia-dependency-injection",
      "lib/plugins"
    ],
    "lib/sunshower.js": [
      "aurelia-fetch-client"
    ],
    "login/approvals.js": [
      "./user"
    ],
    "main.js": [
      "./lib/sunshower",
      "init/configure-plugins",
      "aire/api/security"
    ],
    "modules/main/index.js": [
      "aire/api/security",
      "aurelia-framework",
      "routes",
      "aurelia-templating",
      "aire/routing",
      "jquery"
    ],
    "modules/main/routes/admin/signups/signups.js": [
      "aurelia-framework",
      "lib/auth/signup/service"
    ],
    "modules/main/routes/plugins/index.js": [
      "lib/plugins/service",
      "aurelia-framework"
    ],
    "modules/welcome/activate/activate.js": [
      "aurelia-i18n",
      "aire/api/security",
      "aurelia-framework",
      "aurelia-router",
      "../authentication-page"
    ],
    "modules/welcome/authentication-page.js": [
      "aire/api/storage",
      "init/configure-plugins",
      "main"
    ],
    "modules/welcome/login/login.js": [
      "aurelia-i18n",
      "aire/api/security",
      "aurelia-framework",
      "aurelia-router",
      "../authentication-page"
    ],
    "modules/welcome/signup/signup.js": [
      "aurelia-i18n",
      "aurelia-dependency-injection",
      "lib/auth/signup/model",
      "lib/auth/signup/service"
    ],
    "modules/welcome/welcome.js": [
      "aurelia-framework",
      "aire/api/security",
      "aurelia-dependency-injection"
    ]
  }
});