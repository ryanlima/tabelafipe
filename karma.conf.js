// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
=======
    frameworks: ['jasmine', '@angular/cli'],
>>>>>>> c65d776d5e2e6066a891eb2e63759340795d0b62
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
<<<<<<< HEAD
      require('@angular-devkit/build-angular/plugins/karma')
=======
      require('@angular/cli/plugins/karma')
>>>>>>> c65d776d5e2e6066a891eb2e63759340795d0b62
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
<<<<<<< HEAD
      dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    
=======
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
>>>>>>> c65d776d5e2e6066a891eb2e63759340795d0b62
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
