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

import ApiClient from '../ApiClient';

/**
 * The TemporaryFile model module.
 * @module model/TemporaryFile
 * @version 0.0.5
 */
class TemporaryFile {
    /**
     * Constructs a new <code>TemporaryFile</code>.
     * @alias module:model/TemporaryFile
     */
    constructor() { 
        
        TemporaryFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemporaryFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemporaryFile} obj Optional instance to populate.
     * @return {module:model/TemporaryFile} The populated <code>TemporaryFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemporaryFile();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('created_datetime')) {
                obj['created_datetime'] = ApiClient.convertToType(data['created_datetime'], 'String');
            }
            if (data.hasOwnProperty('eol_datetime')) {
                obj['eol_datetime'] = ApiClient.convertToType(data['eol_datetime'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lookup')) {
                obj['lookup'] = ApiClient.convertToType(data['lookup'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemporaryFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemporaryFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['created_datetime'] && !(typeof data['created_datetime'] === 'string' || data['created_datetime'] instanceof String)) {
            throw new Error("Expected the field `created_datetime` to be a primitive type in the JSON string but got " + data['created_datetime']);
        }
        // ensure the json data is a string
        if (data['eol_datetime'] && !(typeof data['eol_datetime'] === 'string' || data['eol_datetime'] instanceof String)) {
            throw new Error("Expected the field `eol_datetime` to be a primitive type in the JSON string but got " + data['eol_datetime']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['lookup'] && !(typeof data['lookup'] === 'string' || data['lookup'] instanceof String)) {
            throw new Error("Expected the field `lookup` to be a primitive type in the JSON string but got " + data['lookup']);
        }

        return true;
    }


}



/**
 * Unique integer identifying a temporary file.
 * @member {Number} id
 */
TemporaryFile.prototype['id'] = undefined;

/**
 * Unique integer identifying a project.
 * @member {Number} project
 */
TemporaryFile.prototype['project'] = undefined;

/**
 * Unique integer identifying user who created this file.
 * @member {Number} user
 */
TemporaryFile.prototype['user'] = undefined;

/**
 * Full URL to the temporary file.
 * @member {String} path
 */
TemporaryFile.prototype['path'] = undefined;

/**
 * Datetime when this temporary file was created.
 * @member {String} created_datetime
 */
TemporaryFile.prototype['created_datetime'] = undefined;

/**
 * Datetime when this temporary file may be deleted.
 * @member {String} eol_datetime
 */
TemporaryFile.prototype['eol_datetime'] = undefined;

/**
 * Unique name for the temporary file
 * @member {String} name
 */
TemporaryFile.prototype['name'] = undefined;

/**
 * md5hash of lookup parameters
 * @member {String} lookup
 */
TemporaryFile.prototype['lookup'] = undefined;






export default TemporaryFile;
