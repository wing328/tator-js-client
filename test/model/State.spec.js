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
    instance = new Tator.State();
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

  describe('State', function() {
    it('should create an instance of State', function() {
      // uncomment below and update the code to test State
      //var instance = new Tator.State();
      //expect(instance).to.be.a(Tator.State);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property media (base name: "media")', function() {
      // uncomment below and update the code to test the property media
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property localizations (base name: "localizations")', function() {
      // uncomment below and update the code to test the property localizations
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property segments (base name: "segments")', function() {
      // uncomment below and update the code to test the property segments
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property createdDatetime (base name: "created_datetime")', function() {
      // uncomment below and update the code to test the property createdDatetime
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDatetime (base name: "modified_datetime")', function() {
      // uncomment below and update the code to test the property modifiedDatetime
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modified_by")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

    it('should have the property frame (base name: "frame")', function() {
      // uncomment below and update the code to test the property frame
      //var instance = new Tator.State();
      //expect(instance).to.be();
    });

  });

}));
