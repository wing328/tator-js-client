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
    instance = new Tator.AttributeType();
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

  describe('AttributeType', function() {
    it('should create an instance of AttributeType', function() {
      // uncomment below and update the code to test AttributeType
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be.a(Tator.AttributeType);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property dtype (base name: "dtype")', function() {
      // uncomment below and update the code to test the property dtype
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property minimum (base name: "minimum")', function() {
      // uncomment below and update the code to test the property minimum
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property maximum (base name: "maximum")', function() {
      // uncomment below and update the code to test the property maximum
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property choices (base name: "choices")', function() {
      // uncomment below and update the code to test the property choices
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property autocomplete (base name: "autocomplete")', function() {
      // uncomment below and update the code to test the property autocomplete
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property useCurrent (base name: "use_current")', function() {
      // uncomment below and update the code to test the property useCurrent
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

    it('should have the property style (base name: "style")', function() {
      // uncomment below and update the code to test the property style
      //var instance = new Tator.AttributeType();
      //expect(instance).to.be();
    });

  });

}));
