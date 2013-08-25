module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'test/e2e/**/*.js'
        ],
        autoWatch: false,
        browsers: ['Chrome'],
        singleRune: true,
        proxies: {
            '/app': 'http://localhost:8000/app'
        },

        junitReporter: {
            outputFile: 'test_out/e2e.xml',
            suite: 'e2e'
        }    });

};
