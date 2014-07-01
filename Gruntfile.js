module.exports = function(grunt) {

	// grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-githooks');
 
	grunt.initConfig({

		htmlhint: {
			validate: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
				},
				src: ['**/*.html']
			}
		},

		jshint: {
			validate: {
				options: {
					curly: true,
					eqeqeq: true,
					eqnull: true
				},

				files: {
					src: ['helloWorld.js']
				}
			}
		},

		githooks: {
    		all: {
      		'pre-commit': ['default']
    		}
  		}
	});

	grunt.registerTask('default', ['jshint']);
}