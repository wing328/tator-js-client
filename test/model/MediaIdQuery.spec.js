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
    instance = new Tator.MediaIdQuery();
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

  describe('MediaIdQuery', function() {
    it('should create an instance of MediaIdQuery', function() {
      // uncomment below and update the code to test MediaIdQuery
      //var instance = new Tator.MediaIdQuery();
      //expect(instance).to.be.a(Tator.MediaIdQuery);
    });

    it('should have the property ids (base name: "ids")', function() {
      // uncomment below and update the code to test the property ids
      //var instance = new Tator.MediaIdQuery();
      //expect(instance).to.be();
    });

    it('should have the property localizationIds (base name: "localization_ids")', function() {
      // uncomment below and update the code to test the property localizationIds
      //var instance = new Tator.MediaIdQuery();
      //expect(instance).to.be();
    });

    it('should have the property stateIds (base name: "state_ids")', function() {
      // uncomment below and update the code to test the property stateIds
      //var instance = new Tator.MediaIdQuery();
      //expect(instance).to.be();
    });

    it('should have the property floatArray (base name: "float_array")', function() {
      // uncomment below and update the code to test the property floatArray
      //var instance = new Tator.MediaIdQuery();
      //expect(instance).to.be();
    });

  });

}));
