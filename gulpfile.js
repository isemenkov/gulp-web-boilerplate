/******************************************************************************/
/*                         Gulp HTML SCSS Boilerplate                         */
/*             A boilerplate for building web projects with Gulp.             */
/*                             https://gulpjs.com/                            */
/*                                                                            */
/* Copyright (c) 2021                                       Ivan Semenkov     */
/* https://github.com/isemenkov/gulphtmlscssboilerplate     ivan@semenkov.pro */
/*                                                          Ukraine           */
/******************************************************************************/
/*                                                                            */
/* Permission is hereby granted, free of charge, to any person obtaining a    */
/* copy of this software and associated documentation files (the "Software"), */
/* to deal in the Software without restriction, including without limitation  */
/* the rights to use, copy, modify, merge, publish, distribute, sublicense,   */
/* and/or sell copies of the Software, and to permit persons to whom the      */
/* Software is furnished to do so, subject to the following conditions:       */
/*                                                                            */
/* The above copyright notice and this permission notice shall be included in */ 
/* all copies or substantial portions of the Software.                        */
/*                                                                            */
/* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR */
/* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,   */
/* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL    */
/* THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER */
/* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING    */
/* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER        */
/* DEALINGS IN THE SOFTWARE.                                                  */
/*                                                                            */
/******************************************************************************/

/* === Settings === */

const settings = {
  /* Application source path. */
  app: './app/',

  /* Dist source path. */
  dist: './dist/',
  
  /* Development enviroment settings. */
  dev: {

    /* HTML file process. */
    html: {
      /* Path to html source folder. */
      sourcePath: [
        './app/html/*.html',
      ],

      /* Path to html destination folder. */
      destPath: './app/',
    },

    /* SCSS file process. */
    scss: {

      /* Create source map file. */
      createSourceMap: true,

      /* Path to scss source folder. */
      sourcePath: [
        './app/scss/components/**/*.scss',
        './app/scss/mixins/**/*.scss',
        './app/scss/*.scss',
      ],

      /* Path to css destination folder. */
      destPath: './app/css/',

      /* Vendors paths. */
      vendors: {

        /* Path to vendor source folder. */
        sourcePath: [
          './app/scss/vendor/**/*.scss',
        ],

        /* Path to vendor destination folder. */
        destPath: './app/css/vendor/',
      },
    },

    /* JS file process. */
    scripts: {

      /* Create source map file. */
      createSourceMap: true,

      /* Path to js source folder. */
      sourcePath: [
        './app/js/components/**/*.js',
        './app/js/*.js',
      ],

      /* Vendors paths. */
      vendors: {

        /* Path to vendor source folder. */
        sourcePath: [
          './app/js/vendor/**/*.js',
        ],
      },
    },

    /* Images process. */
    images: {
  
      /* SVG image */
      svg: {

        /* Process svg images to one sprite image. */
        createSprite: true,

        /* Path to svg images for process. */ 
        sorcePath: [
          './app/images/svg/**/*.svg',
        ],

        /* Path to svg sprite destination. */
        destPath: './app/images/',

        /* SVG image sprite file name. */
        filename: 'sprite.svg',
      }
    },
  },

  /* Build enviroment settings. */
  build: {

    /* HTML file process. */
    html: {

      /* Collapse white space that contributes to text nodes in a document 
         tree. */
      collapseWhitespace: true,

      /* Strip HTML comments. */
      removeComments: true,

      /* Remove all attributes with whitespace-only values. */
      removeEmptyAttributes: true,

      /* Path to html source folder. */
      sourcePath: [
        './app/*.html',
      ],

      /* Path to html destination folder. */
      destPath: './dist/',

    },

    /* CSS file process. */
    css: {

      /* Compatibility mode ('ie10+', 'ie9', 'ie8', 'ie7'). */
      compatibility: 'ie10+',

      /* Styles format ('compressed', or 'beautify'). */
      style: 'compressed',
      
      /* Optimization level.
         - Level 0 optimizations simply means "no optimizations".
         - Level 1 optimizations (default) operate on single properties only, e.g. 
           can remove units when not required, turn rgb colors to a shorter hex 
           representation, remove comments, etc.
         - Level 2 optimizations operate at rules or multiple properties level, 
           e.g. can remove duplicate rules, remove properties redefined further 
           down a stylesheet, or restructure rules by moving them around. */
      optimizationLevel: 2,

      /* Path to css source folder. */
      sourcePath: [
        './app/css/*.css',
      ],

      /* Path to css destination folder. */
      destPath: './dist/css/',

      /* Output css file name. */
      filename: 'main.css',

      /* Vendors options. */
      vendors: {

        /* Add vendors styles to main stylesheet. */
        integrateVendors: false,

        /* Path to vendor css source folder. */
        sourcePath: [
          './app/css/vendor/*.css',
        ],      

        /* Output vendor css file name. */
        filename: 'vendor.css',
      },
    },

    /* JS file process. */
    scripts: {

      /* Style format ('compressed', or 'beautify'). */
      style: 'compressed',

      /* Path to js source folder. */
      sourcePath: [
        './app/js/**/*.js',
      ],

      /* Path to js destination folder. */
      destPath: './dist/js/',

      /* Output script file name. */
      filename: 'main.js',

      /* Vendors options. */
      vendors: {

        /* Add vendors scripts to main. */
        integrateVendors: true,

        /* Path to vendor scripts source folder. */
        sourcePath: [
          './app/js/vendor/*.js',
        ],

        /* Output script file name. */
        filename: 'vendor.js',
      },      
    },

    /* Images process. */
    images: {

      /* Path to images source folder. */
      sourcePath: [
        './app/images/*.jpg',
        './app/images/*.jpeg',
        './app/iamges/*.png',
        './app/images/*.svg',
        './app/images/*.gif',
      ],

      /* Path to images destination folder. */
      destPath: './dist/images/',
    },
  },
};

/* ===  === */

const { readFileSync } = require('fs');

/* The streaming build system. */
const { src, dest, parallel, series, watch } = require('gulp');

/* === Plugins === */

/* PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values 
   from Can I Use. */
const autoprefixer  = require('gulp-autoprefixer');

/* clean-css is a fast and efficient CSS optimizer. */
const cleanCss      = require('gulp-clean-css');

/* Uglify is a simple tool to uglify javascript & css files. */
const uglify        = require('gulp-uglify-es').default;

/* Delete files and directories. */
const del           = require('del');

/* Live CSS Reload & Browser Syncing. */
const browserSync   = require('browser-sync').create();

/* Sass plugin. */
const sass          = require('gulp-sass');

/* It is a plugin which takes a bunch of SVG files, optimizes them and bakes 
   them into SVG sprites. */
const svgSprite     = require('gulp-svg-sprite');

/* A utility for recursively including files within other ones. */
const fileInclude   = require('gulp-file-include');

/* Sourcemap generator. */
const sourcemaps    = require('gulp-sourcemaps');

/* A simple HTML minifier. */
const htmlMin       = require('gulp-htmlmin');

/* Conditionally run a task. */
const gulpIf        = require('gulp-if');

/* Plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or 
   Windows using the node-notifier module. Fallbacks to Growl or simply 
   logging. */
const notify        = require('gulp-notify');

/* Minify PNG, JPEG, GIF and SVG images. */
const imagemin         = require('gulp-imagemin');

/* Concatenate multiple files. */
const concat        = require('gulp-concat');

/* === Development process tasks === */

/* Clean dev files. */
const devClean = () => {
  return del([
    `${settings.dev.html.destPath}*.html`,
    `${settings.dev.scss.destPath}*.css`,
    `${settings.dev.scss.vendors.destPath}vendor.css`,
    `${settings.dev.scss.destPath}*.map`,
    `${settings.dev.scss.vendors.destPath}*.map`,
    `${settings.dev.scripts.destPath}*.map`,
    `${settings.dev.scripts.vendors.destPath}*.map`,
    `${settings.dev.images.svg.destPath}${settings.dev.images.svg.filename}`,
  ], { forse : true });
};

/* Process html files. */
const devProcessHtml = () => {
  return src(settings.dev.html.sourcePath)
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
    }))
    .pipe(dest(settings.dev.html.destPath))
    .pipe(browserSync.stream());
};

/* Process scss files. */
const devProcessScss = () => {
  return src(settings.dev.scss.sourcePath)
    .pipe(gulpIf(settings.dev.scss.createSourceMap, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false,
      overrideBrowserslist: ['last 10 version'],
      grid: true,
    }))
    .pipe(gulpIf(settings.dev.scss.createSourceMap, sourcemaps.write('.')))
    .pipe(dest(settings.dev.scss.destPath))
    .pipe(browserSync.stream());
};

/* Process vendors scss files. */
const devProcessVendorScss = () => {
  return src(settings.dev.scss.vendors.sourcePath)
    .pipe(gulpIf(settings.dev.scss.createSourceMap, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(gulpIf(settings.dev.scss.createSourceMap, sourcemaps.write('.')))
    .pipe(dest(settings.dev.scss.vendors.destPath))
    .pipe(browserSync.stream());
};

/* Process js script files. */
const devProcessScripts = () => {
  return src(settings.dev.scripts.sourcePath)
    .pipe(gulpIf(settings.dev.scripts.createSourceMap, sourcemaps.init()))
    .pipe(gulpIf(settings.dev.scripts.createSourceMap, sourcemaps.write('.')))
    .pipe(browserSync.stream());
};

/* Process js script files. */
const devProcessVendorsScripts = () => {
  return src(settings.dev.scripts.vendors.sourcePath)
    .pipe(gulpIf(settings.dev.scripts.createSourceMap, sourcemaps.init()))
    .pipe(gulpIf(settings.dev.scripts.createSourceMap, sourcemaps.write('.')))
    .pipe(browserSync.stream());
};

/* Create sprite from svg images. */
const devCreateSvgSprite = () => {
  return src(settings.dev.images.svg.sorcePath)
    .pipe(gulpIf(settings.dev.images.svg.createSprite, svgSprite({
      dest: settings.dev.images.svg.destPath,
      mode: {
        stack: {
          dest: '',
          sprite: settings.dev.images.svg.filename,
        }
      },
    })))
    .pipe(dest(settings.dev.images.svg.destPath));
};

/* Files changes watching. */
const devWatchingChanges = () => {
  browserSync.init({
    server: {
      baseDir: settings.app,
    },
  });
  
  watch(settings.dev.html.sourcePath, devProcessHtml);
  watch(settings.dev.scss.sourcePath, devProcessScss);
  watch(settings.dev.scss.vendors.sourcePath, devProcessVendorScss);
  watch(settings.dev.scripts.sourcePath, devProcessScripts);
  watch(settings.dev.scripts.vendors.sourcePath, devProcessVendorsScripts);
  watch(settings.dev.images.svg.sorcePath, devCreateSvgSprite);
};

/* === Build process tasks === */

/* Clean dist folder. */
const buildClean = () => {
  return del(`${settings.dist}**/*`, { forse : true });
};

/* Process html files. */
const buildProcessHtml = () => {
  return src(settings.build.html.sourcePath)
    .pipe(htmlMin({
      collapseWhitespace: settings.build.html.collapseWhitespace,
      removeComments: settings.build.html.removeComments,
      removeEmptyAttributes: settings.build.html.removeEmptyAttributes,
    }))
    .pipe(dest(settings.build.html.destPath));
};

/* Process css files. */
const buildProcessCss = () => {
  let properties = {
    compatibility: settings.build.css.compatibility,
    level: settings.build.css.optimizationLevel,
  };

  if (settings.build.css.style === 'beautify') {
    properties.format = 'beautify';
  }
  
  let sourcePath = settings.build.css.vendors.sourcePath
    .concat(settings.build.css.sourcePath);
  
  return src(sourcePath)
    .pipe(gulpIf(settings.build.css.vendors.integrateVendors, 
      concat(settings.build.css.filename)))
    .pipe(cleanCss(properties))
    .pipe(dest(settings.build.css.destPath));
};

/* Process js files. */
const buildProcessScript = () => {
  let sourcePath = settings.build.scripts.vendors.sourcePath
    .concat(settings.build.scripts.sourcePath);

  return src(sourcePath)
    .pipe(gulpIf(settings.build.scripts.vendors.integrateVendors,
      concat(settings.build.scripts.filename)))
    .pipe(gulpIf(settings.build.scripts.style === 'compressed',
      uglify().on('error', notify.onError())))
    .pipe(dest(settings.build.scripts.destPath));
};

/* Process image files. */
const buildProcessImages = () => {
  return src(settings.build.images.sourcePath)
    .pipe(imagemin())
    .pipe(dest(settings.build.images.destPath));
};

/* === Exports === */

/* Start developer server and watching source files. */
exports.default = series(parallel(devProcessHtml, devProcessScss,
  devProcessVendorScss, devProcessScripts, devProcessVendorsScripts),
  devWatchingChanges);

/* Remove development generated files. */
exports.clean = series(devClean);

/* Generate dist files. */
exports.build = series(buildClean, devCreateSvgSprite,
  parallel(devProcessScss, devProcessVendorScss), 
  parallel(buildProcessHtml, buildProcessCss, buildProcessScript,
    buildProcessImages));