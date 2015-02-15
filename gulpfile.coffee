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
    src      : 'source/parrot.coffee'
    debug    : 'parrot.develop.js'
    dist     : 'dist'

  dependency:
    jquery  : 'components/jquery/dist/jquery.min.js'
    quo     : 'components/quojs/quo.standalone.js'
    zepto   : 'components/zepto/zepto.min.js'

  test:
    src   : 'test/source/test.parrot.coffee'
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

# -- Tasks ---------------------------------------------------------------------

gulp.task 'develop', (cb) ->
  gulp.src path.core.src
  .pipe concat path.core.debug
  .pipe coffee().on 'error', gutil.log
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  cb()
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

gulp.task 'build', ['develop'], ->
  gulp.src [path.dependency.quo, 'dist/parrot.standalone.js']
  .pipe uglify()
  .pipe concat 'parrot.quo.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist

  gulp.src [path.dependency.jquery, 'dist/parrot.standalone.js']
  .pipe uglify()
  .pipe concat 'parrot.jquery.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist

  gulp.src [path.dependency.zepto, 'dist/parrot.standalone.js']
  .pipe uglify()
  .pipe concat 'parrot.zepto.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  return

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
    root       : [__dirname, 'test']
    livereload : true
  return

gulp.task 'browser', ->
  gulp.src path.test.index
  .pipe open()
  return

gulp.task 'test', ->
  gulp.start ['build', 'mocha', 'server', 'browser']
  gulp.watch path.core.src, ['build']
  gulp.watch path.test.src, ['mocha']
  return

gulp.task 'dev', ->
  gulp.start ['develop']
  gulp.watch path.core.src, ['develop']
  return

gulp.task 'default', ->
  gulp.start 'build'
  return
