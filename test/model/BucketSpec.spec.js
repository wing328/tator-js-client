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
    instance = new Tator.BucketSpec();
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

  describe('BucketSpec', function() {
    it('should create an instance of BucketSpec', function() {
      // uncomment below and update the code to test BucketSpec
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be.a(Tator.BucketSpec);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property accessKey (base name: "access_key")', function() {
      // uncomment below and update the code to test the property accessKey
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property secretKey (base name: "secret_key")', function() {
      // uncomment below and update the code to test the property secretKey
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property endpointUrl (base name: "endpoint_url")', function() {
      // uncomment below and update the code to test the property endpointUrl
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property archiveSc (base name: "archive_sc")', function() {
      // uncomment below and update the code to test the property archiveSc
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property liveSc (base name: "live_sc")', function() {
      // uncomment below and update the code to test the property liveSc
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

    it('should have the property gcsKeyInfo (base name: "gcs_key_info")', function() {
      // uncomment below and update the code to test the property gcsKeyInfo
      //var instance = new Tator.BucketSpec();
      //expect(instance).to.be();
    });

  });

}));
