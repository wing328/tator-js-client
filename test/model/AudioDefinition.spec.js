/**
 * Tator REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Tator);
  }
}(this, function(expect, Tator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Tator.AudioDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AudioDefinition', function() {
    it('should create an instance of AudioDefinition', function() {
      // uncomment below and update the code to test AudioDefinition
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be.a(Tator.AudioDefinition);
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property bitRate (base name: "bit_rate")', function() {
      // uncomment below and update the code to test the property bitRate
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codec (base name: "codec")', function() {
      // uncomment below and update the code to test the property codec
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property httpAuth (base name: "http_auth")', function() {
      // uncomment below and update the code to test the property httpAuth
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codecMime (base name: "codec_mime")', function() {
      // uncomment below and update the code to test the property codecMime
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codecDescription (base name: "codec_description")', function() {
      // uncomment below and update the code to test the property codecDescription
      //var instance = new Tator.AudioDefinition();
      //expect(instance).to.be();
    });

  });

}));