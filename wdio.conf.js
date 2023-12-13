const {join} = require(path)

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/',
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
  "appium:platformVersion": "9.0",
  "appium:deviceName": "ebac-qe",
  "appium:automationName": "UiAutomator2",
  "appium:app": "C:\\Users\\Sergio W\\Documents\\apk\\Android-NativeDemoApp-0.4.0.apk",
  "appium:appActivity": "MainActivity"

    }]
}