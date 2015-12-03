// grunt
module.exports = function(grunt){

    var banner = '/*\n' +
        ' * comparev <%= pkg.version %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * https://github.com/superRaytin/node-comparev\n' +
        ' *\n' +
        ' * Copyright 2015, Leon Shi\n' +
        ' * Released under the MIT license.\n' +
        '*/\n\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: banner
            },
            main: {
                files: [
                    {
                        src: ['dist/comparev.js'],
                        dest: 'dist/comparev.js'
                    }
                ]
            }
        },
        browserify: {
            options: {
                banner: banner
            },
            main: {
                files: [
                    {
                        src: ['lib/index.js'],
                        dest: 'dist/comparev.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify', 'uglify']);
};