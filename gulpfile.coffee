'use strict'

# -- Dependencies -------------------------------------------------------------

gulp    = require 'gulp'
order   = require 'gulp-order'
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
  core:
    src   : [ 'source/parrot.coffee'
              'source/parrot.initialize.coffee'
              'source/parrot.endpoint.coffee'
              'source/parrot.url.coffee'
              'source/parrot.store.coffee' ]
    dist  : 'dist'

  dependencies: [ 'bower_components/quojs/quo.js'
                  'bower_components/quojs/quo.ajax.js'
                  'bower_components/jsurl/url.min.js' ]
  test:
    src   : [ 'test/source/test.coffee' ]
    dist  : 'test/dist'
    index : 'test/index.html'

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
  .pipe concat 'parrot.develop.js'
  .pipe coffee().on 'error', gutil.log
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

gulp.task 'standalone', ->
  gulp.src path.core.src
  .pipe concat 'parrot.standalone.js'
  .pipe coffee().on 'error', gutil.log
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

gulp.task 'production', ->
  gulp.src path.dependencies
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe concat 'parrot.js'
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

gulp.task 'mocha', ->
  gulp.src path.test.src
  .pipe coffee().on 'error', gutil.log
  .pipe gulp.dest path.test.dist
  .pipe connect.reload()
  return

gulp.task 'server', ->
  connect.server
    port       : 8001
    root       : 'test'
    livereload : true
  return

gulp.task 'browser', ->
  gulp.src path.test.index
  .pipe open()
  return

gulp.task 'test', ->
  gulp.start ['develop', 'mocha', 'server', 'browser']
  gulp.watch path.core.src, ['develop']
  gulp.watch path.test.src, ['mocha']
  return

gulp.task 'dev', ->
  gulp.start ['develop']
  gulp.watch path.core.src, ['develop']
  return

gulp.task 'build', ->
  gulp.start ['develop', 'standalone', 'production']
  return

gulp.task 'default', ->
  gulp.start 'build'
  return
