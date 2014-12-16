'use strict'

# -- Dependencies --------------------------------------------------------------

gulp    = require 'gulp'
concat  = require 'gulp-concat'
coffee  = require 'gulp-coffee'
header  = require 'gulp-header'
uglify  = require 'gulp-uglify'
gutil   = require 'gulp-util'
connect = require 'gulp-connect'
open    = require 'gulp-open'
pkg     = require './package.json'

# -- Files ---------------------------------------------------------------------

path =
  core:
    src   : [ 'source/parrot.coffee'
              'source/parrot.url.coffee'
              'source/parrot.ajax.coffee'
              'source/parrot.store.coffee'
              'source/parrot.notification.coffee'
              'source/parrot.device.coffee' ]
    dist  : 'dist'
    build : 'dist/parrot.standalone.js'

  dependency:
    jquery  : 'components/jquery/dist/jquery.min.js'
    quo     : 'components/quojs/quo.standalone.js'
    zepto   : 'components/zepto/zepto.min.js'
    partial : 'components/fn-partial/dist/fn-partial.js'

  test:
    src   : ['test/source/test.url.coffee'
             'test/source/test.ajax.coffee'
             'test/source/test.store.coffee'
             'test/source/test.notification.coffee']
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
  dep = path.dependency
  gulp.src [dep.quo, dep.partial, path.core.build]
  .pipe uglify()
  .pipe concat 'parrot.quo.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

gulp.task 'jquery', ->
  dep = path.dependency
  gulp.src [dep.jquery, dep.partial, path.core.build]
  .pipe uglify()
  .pipe concat 'parrot.jquery.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
  return

gulp.task 'zepto', ->
  dep = path.dependency
  gulp.src [dep.zepto, dep.partial, path.core.build]
  .pipe uglify()
  .pipe concat 'parrot.zepto.js'
  .pipe header banner, pkg: pkg
  .pipe gulp.dest path.core.dist
  .pipe connect.reload()
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
  gulp.start ['develop', 'mocha', 'server', 'browser']
  gulp.watch path.core.src, ['develop']
  gulp.watch path.test.src, ['mocha']
  return

gulp.task 'dev', ->
  gulp.start ['develop']
  gulp.watch path.core.src, ['develop']
  return

gulp.task 'build', ->
  gulp.start ['develop', 'standalone', 'quo', 'jquery', 'zepto']
  return

gulp.task 'default', ->
  gulp.start 'build'
  return
