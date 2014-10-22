module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON "package.json"

    meta:
      file    : 'hope'
      package : '.',
      temp    : 'build',
      banner: '/* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy/m/d") %>\n' +
              '   <%= pkg.homepage %>\n' +
              '   Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>' +
              ' - Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n'

    resources:
      src:      ['src/hope.coffee']
      spec:     ['spec/*.coffee']

    coffee:
      src:
        files:
          '<%= meta.temp %>/<%= meta.file %>.js': '<%= resources.src %>'
          '<%= meta.temp %>/spec.js': '<%= resources.spec %>'

    uglify:
      options:
        compress: false
        banner: '<%= meta.banner %>'
      package:
        files: '<%=meta.package%>/<%=meta.file%>.js': '<%= meta.temp %>/<%= meta.file %>.js'

    jasmine:
        pivotal:
          src: '<%=meta.package%>/<%=meta.file%>.js'
          options:
            specs: '<%= meta.temp %>/spec.js',

    watch:
      src:
        files: ['<%= resources.src %>', '<%= resources.spec %>']
        tasks: ['coffee', 'uglify', 'jasmine']


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'default', ['coffee', 'uglify', 'jasmine']
