/******************************************************************************/
/*                            Gulp-Web-Boilerplate                            */
/*        A boilerplate for building web  projects with Gulp and scss.        */
/*                 https://gulpjs.com/ https://sass-lang.com/                 */
/*                                                                            */
/* Copyright (c) 2021                                       Ivan Semenkov     */
/* https://github.com/isemenkov/gulp-web-boilerplate        ivan@semenkov.pro */
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
        './app/html/**/*.html',
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
          './app/vendors/**/*.css',
          './app/vendors/**/*.scss',
        ],

        /* Path to vendor destination folder. */
        destPath: './app/css/',

        /* Output file name. */
        filename: 'vendor.css',
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
          './app/vendors/**/*.js',
        ],

        /* Path to vendor destination folder. */
        destPath: './app/js/',

        /* Output file name. */
        filename: 'vendor.js',
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

    /* Font process. */
    fonts: {

      /* Fonts formats. */
      formats: {
        
        /* Create woff font. */
        woff: true,

        /* Create woff2 font. */
        woff2: true,

        /* Create eot font. */
        eot: false,
      },

      /* Path to fonts source folder. */
      sourcePath: [
        './app/fonts/ttf/**/*.ttf',
      ],

      /* Path to fonts destination folder. */
      destPath: './app/fonts/',
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
        './app/images/*.png',
        './app/images/*.svg',
        './app/images/*.gif',
      ],

      /* Path to images destination folder. */
      destPath: './dist/images/',
    },

    /* Resources process. */
    resources: {

      /* Path to resources source folder. */
      sourcePath: [
        './app/resources/**',
      ],

      /* Path to resources destination folder. */
      destPath: './dist/resources/',
    },

    /* Font process. */
    fonts: {

      /* Path to fonts source folder. */
      sourcePath: [
        './app/fonts/*.woff',
        './app/fonts/*.woff2',
        './app/fonts/*.eot',
      ],

      /* Path to resources destination folder. */
      destPath: './dist/fonts/',
    },
  },
};

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

/* Create a WOFF font from a TTF one. */
const ttf2woff      = require('gulp-ttf2woff');

/* Create a WOFF2 font from a TTF font. */
const ttf2woff2     = require('gulp-ttf2woff2');

/* Create an EOT font from a TTF one. */
const ttf2eot       = require('gulp-ttf2eot');

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
    .pipe(concat(settings.dev.scss.vendors.filename))
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
    .pipe(concat(settings.dev.scripts.vendors.filename))
    .pipe(gulpIf(settings.dev.scripts.createSourceMap, sourcemaps.write('.')))
    .pipe(dest(settings.dev.scripts.vendors.destPath))
    .pipe(browserSync.stream());
};

/* Create sprite from svg images. */
const devCreateSvgSprite = () => {
  return src(settings.dev.images.svg.sorcePath)
    .pipe(gulpIf(settings.dev.images.svg.createSprite, svgSprite({
      dest: settings.dev.images.svg.destPath,
      mode: {
        defs: {
          dest: '.',
          sprite: settings.dev.images.svg.filename,
        }
      },
    })))
    .pipe(dest(settings.dev.images.svg.destPath));
};

/* Process fonts. */
const devProcessFontWoff = () => {
  return src(settings.dev.fonts.sourcePath)
    .pipe(gulpIf(settings.dev.fonts.formats.woff, ttf2woff()))
    .pipe(gulpIf(settings.dev.fonts.formats.woff, 
      dest(settings.dev.fonts.destPath)));
};

const devProcessFontWoff2 = () => {
  return src(settings.dev.fonts.sourcePath)
    .pipe(gulpIf(settings.dev.fonts.formats.woff2, ttf2woff2()))
    .pipe(gulpIf(settings.dev.fonts.formats.woff2, 
      dest(settings.dev.fonts.destPath)));
};

const devProcessFontEot = () => {
  return src(settings.dev.fonts.sourcePath)
    .pipe(gulpIf(settings.dev.fonts.formats.eot, ttf2eot()))
    .pipe(gulpIf(settings.dev.fonts.formats.eot, 
      dest(settings.dev.fonts.destPath)));
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
  watch(settings.dev.fonts.sourcePath, series(devProcessFontWoff, 
    devProcessFontWoff2, devProcessFontEot));
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
  
  return src(settings.build.css.sourcePath)
    .pipe(cleanCss(properties))
    .pipe(dest(settings.build.css.destPath));
};

/* Process js files. */
const buildProcessScript = () => {
  return src(settings.build.scripts.sourcePath)
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

/* Process fonts files. */
const buildProcessFonts = () => {
  return src(settings.build.fonts.sourcePath)
    .pipe(dest(settings.build.fonts.destPath));
};

/* Process resource files. */
const buildProcessResource = () => {
  return src(settings.build.resources.sourcePath)
    .pipe(dest(settings.build.resources.destPath));
}

/* === Exports === */

/* Start developer server and watching source files. */
exports.default = series(
  parallel(devProcessHtml, devProcessScss, devProcessVendorScss, 
    devProcessScripts, devProcessVendorsScripts),
  devWatchingChanges);

/* Remove development generated files. */
exports.clean = series(devClean);

/* Generate dist files. */
exports.build = series(
  buildClean, devProcessFontWoff, devProcessFontWoff2, 
    devProcessFontEot,
  parallel(devProcessHtml, devCreateSvgSprite, devProcessScss, 
    devProcessVendorScss, devProcessVendorsScripts),
  parallel(buildProcessHtml, buildProcessCss, buildProcessScript, 
    buildProcessImages, buildProcessResource, buildProcessFonts));
