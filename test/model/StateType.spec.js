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
    instance = new Tator.StateType();
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

  describe('StateType', function() {
    it('should create an instance of StateType', function() {
      // uncomment below and update the code to test StateType
      //var instance = new Tator.StateType();
      //expect(instance).to.be.a(Tator.StateType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property dtype (base name: "dtype")', function() {
      // uncomment below and update the code to test the property dtype
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property media (base name: "media")', function() {
      // uncomment below and update the code to test the property media
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property association (base name: "association")', function() {
      // uncomment below and update the code to test the property association
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property interpolation (base name: "interpolation")', function() {
      // uncomment below and update the code to test the property interpolation
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property groupingDefault (base name: "grouping_default")', function() {
      // uncomment below and update the code to test the property groupingDefault
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property attributeTypes (base name: "attribute_types")', function() {
      // uncomment below and update the code to test the property attributeTypes
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property deleteChildLocalizations (base name: "delete_child_localizations")', function() {
      // uncomment below and update the code to test the property deleteChildLocalizations
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

    it('should have the property defaultLocalization (base name: "default_localization")', function() {
      // uncomment below and update the code to test the property defaultLocalization
      //var instance = new Tator.StateType();
      //expect(instance).to.be();
    });

  });

}));
