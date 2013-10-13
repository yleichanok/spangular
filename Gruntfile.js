module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    src: ['./dist/*']
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './',
                    dest: './dist',
                    src: [
                        './app/**',
                        './styles/**',
                        './assets/**',
                        './index.html',
                        './favicon.ico',
                        './libs/angular/angular.min.js',
                        './libs/angular/angular.min.js.map',
                        './libs/angular-ui-router/release/angular-ui-router.min.js'
                    ]
                }]
            }
        },
        jshint: {
            dist: {
                src: ['./app/**/*.js', './Gruntfile.js'],
                options: {
                    jshintrc: './.jshintrc'
                }
            }
        },
        less: {
            dist: {
                files: {
                    './dist/styles/app.css': './styles/app.less'
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    './dist/styles/app.min.css': './dist/styles/app.css'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    './dist/app/SPAngular.min.js': './app/**/*.js'
                }
            }
        },
        preprocess: {
            dist: {
                options: {
                    context: {
                        RELEASE: true
                    }
                },
                files: {
                    './dist/index.html': './dist/index.html'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './dist/index.html': './dist/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'jshint',
        'less',
        'preprocess',
        'htmlmin',
        'cssmin',
        'uglify'
    ]);

};