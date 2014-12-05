'use strict'

# -- Dependencies -------------------------------------------------------------

gulp    = require 'gulp'
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
    build : 'dist/parrot.standalone.js'

  dependencies:
    jquery: 'components/jquery/dist/jquery.min.js'
    quojs: ['components/quojs/quo.js', 'components/quojs/quo.ajax.js']
    jsurl: 'components/jsurl/url.min.js'

  test:
    src   : ['test/source/test.coffee'
             'test/source/test.url.coffee'
             'test/source/test.ajax.coffee'
             'test/source/test.storage.coffee']
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

gulp.task 'quo', ->
  origin = path.dependencies.quojs
  origin.push path.dependencies.jsurl
  origin.push path.core.build
  console.log origin
  gulp.src origin
  .pipe uglify()
  .pipe concat 'parrot.quo.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

# gulp.task 'jquery', ->
#   origin = path.dependencies.quojs
#   origin.push path.dependencies.jsurl
#   origin.push path.core.build
#   gulp.src origin
#   .pipe uglify()
#   .pipe concat 'parrot.quo.js'
#   .pipe header banner, pkg: pkg
#   .pipe gulp.dest path.core.dist
#   .pipe connect.reload()
#   return

# gulp.task 'zepto', ->
#   origin = path.dependencies.quojs
#   origin.push path.dependencies.jsurl
#   origin.push path.core.build
#   gulp.src origin
#   .pipe uglify()
#   .pipe concat 'parrot.quo.js'
#   .pipe header banner, pkg: pkg
#   .pipe gulp.dest path.core.dist
#   .pipe connect.reload()
#   return

gulp.task 'mocha', ->
  gulp.src path.test.src
  .pipe coffee().on 'error', gutil.log
  .pipe concat 'test.js'
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
  gulp.start ['develop', 'standalone', 'quo']
  return

gulp.task 'default', ->
  gulp.start 'build'
  return
