module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
                    'rectangle.min.css': 'rectangle.css'
            
        }
                     
      }       
                  
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['uglify:release']);

};
