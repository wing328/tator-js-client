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
    instance = new Tator.Project();
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

  describe('Project', function() {
    it('should create an instance of Project', function() {
      // uncomment below and update the code to test Project
      //var instance = new Tator.Project();
      //expect(instance).to.be.a(Tator.Project);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property enableDownloads (base name: "enable_downloads")', function() {
      // uncomment below and update the code to test the property enableDownloads
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property bucket (base name: "bucket")', function() {
      // uncomment below and update the code to test the property bucket
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property uploadBucket (base name: "upload_bucket")', function() {
      // uncomment below and update the code to test the property uploadBucket
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property backupBucket (base name: "backup_bucket")', function() {
      // uncomment below and update the code to test the property backupBucket
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property thumb (base name: "thumb")', function() {
      // uncomment below and update the code to test the property thumb
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property numFiles (base name: "num_files")', function() {
      // uncomment below and update the code to test the property numFiles
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property usernames (base name: "usernames")', function() {
      // uncomment below and update the code to test the property usernames
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new Tator.Project();
      //expect(instance).to.be();
    });

  });

}));
