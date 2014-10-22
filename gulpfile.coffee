'use strict'

# -- Dependencies -------------------------------------------------------------

gulp    = require 'gulp'
rename  = require 'gulp-rename'
concat  = require 'gulp-concat'
coffee  = require 'gulp-coffee'
header  = require 'gulp-header'
uglify  = require 'gulp-uglify'
gutil   = require 'gulp-util'
connect = require 'gulp-connect'
open    = require 'gulp-open'
pkg     = require './package.json'

# -- Files --------------------------------------------------------------------

path =

  dist:
    name    :  'parrot'
    src     :  'dist'
    test    :  'test'

  core:
    src     :[ 'source/parrot.coffee'
               'source/parrot.basic.coffee'
               'source/parrot.device.coffee'
               'source/parrot.store.coffee'
             ]

  test:
    src     :[ 'test/source/*.coffee' ]
    index   :  'test/index.html'

banner = [ "/**"
           " * <%= pkg.name %> - <%= pkg.description %>"
           " * @version v<%= pkg.version %>"
           " * @link    <%= pkg.homepage %>"
           " * @author  <%= pkg.author.name %> (<%= pkg.author.url %>)"
           " * @license <%= pkg.license %>"
           " */"
           "" ].join("\n")

# -- Tasks --------------------------------------------------------------------

gulp.task 'develop', ->
  gulp.src path.core.src
  .pipe concat path.dist.name
  .pipe coffee().on 'error', gutil.log
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.dist.src
  .pipe connect.reload()
  return

gulp.task 'production', ->
  gulp.src path.core.src
  .pipe concat path.dist.name
  .pipe rename(path.dist.name + '.min.js')
  .pipe coffee().on 'error', gutil.log
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.dist.src
  .pipe connect.reload()
  return

gulp.task 'mocha', ->
  gulp.src path.test.src
  .pipe coffee().on 'error', gutil.log
  .pipe gulp.dest path.dist.test
  .pipe connect.reload()
  return

gulp.task 'server', ->
  connect.server
    port: 8000
    root: path.dist.test
    livereload: true

gulp.task 'browser', ->
  gulp.src path.test.index
  .pipe open()

gulp.task 'test', ->
  gulp.start ['develop', 'mocha', 'server', 'browser']
  gulp.watch path.core.src, ['develop']
  gulp.watch path.test.src, ['mocha']

gulp.task 'default', ->
  gulp.start 'production'
