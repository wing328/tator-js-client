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
    instance = new Tator.StateSpec();
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

  describe('StateSpec', function() {
    it('should create an instance of StateSpec', function() {
      // uncomment below and update the code to test StateSpec
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be.a(Tator.StateSpec);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be();
    });

    it('should have the property mediaIds (base name: "media_ids")', function() {
      // uncomment below and update the code to test the property mediaIds
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be();
    });

    it('should have the property localizationIds (base name: "localization_ids")', function() {
      // uncomment below and update the code to test the property localizationIds
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be();
    });

    it('should have the property frame (base name: "frame")', function() {
      // uncomment below and update the code to test the property frame
      //var instance = new Tator.StateSpec();
      //expect(instance).to.be();
    });

  });

}));
