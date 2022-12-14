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
    instance = new Tator.ChangeLogDescriptionOfChange();
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

  describe('ChangeLogDescriptionOfChange', function() {
    it('should create an instance of ChangeLogDescriptionOfChange', function() {
      // uncomment below and update the code to test ChangeLogDescriptionOfChange
      //var instance = new Tator.ChangeLogDescriptionOfChange();
      //expect(instance).to.be.a(Tator.ChangeLogDescriptionOfChange);
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instance = new Tator.ChangeLogDescriptionOfChange();
      //expect(instance).to.be();
    });

    it('should have the property old (base name: "old")', function() {
      // uncomment below and update the code to test the property old
      //var instance = new Tator.ChangeLogDescriptionOfChange();
      //expect(instance).to.be();
    });

  });

}));
