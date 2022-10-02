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
 * The VersionUpdate model module.
 * @module model/VersionUpdate
 * @version 0.0.5
 */
class VersionUpdate {
    /**
     * Constructs a new <code>VersionUpdate</code>.
     * @alias module:model/VersionUpdate
     */
    constructor() { 
        
        VersionUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionUpdate} obj Optional instance to populate.
     * @return {module:model/VersionUpdate} The populated <code>VersionUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('show_empty')) {
                obj['show_empty'] = ApiClient.convertToType(data['show_empty'], 'Boolean');
            }
            if (data.hasOwnProperty('bases')) {
                obj['bases'] = ApiClient.convertToType(data['bases'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bases'])) {
            throw new Error("Expected the field `bases` to be an array in the JSON data but got " + data['bases']);
        }

        return true;
    }


}



/**
 * Name of the version.
 * @member {String} name
 */
VersionUpdate.prototype['name'] = undefined;

/**
 * Description of the version.
 * @member {String} description
 */
VersionUpdate.prototype['description'] = undefined;

/**
 * Whether to show this version on media for which no annotations exist.
 * @member {Boolean} show_empty
 */
VersionUpdate.prototype['show_empty'] = undefined;

/**
 * Array of other version IDs that are dependencies of this version.
 * @member {Array.<Number>} bases
 */
VersionUpdate.prototype['bases'] = undefined;






export default VersionUpdate;

