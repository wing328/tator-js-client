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
 * The AlgorithmLaunch model module.
 * @module model/AlgorithmLaunch
 * @version 0.0.5
 */
class AlgorithmLaunch {
    /**
     * Constructs a new <code>AlgorithmLaunch</code>.
     * @alias module:model/AlgorithmLaunch
     */
    constructor() { 
        
        AlgorithmLaunch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AlgorithmLaunch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmLaunch} obj Optional instance to populate.
     * @return {module:model/AlgorithmLaunch} The populated <code>AlgorithmLaunch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlgorithmLaunch();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], ['String']);
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlgorithmLaunch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlgorithmLaunch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['uid'])) {
            throw new Error("Expected the field `uid` to be an array in the JSON data but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }

        return true;
    }


}



/**
 * Message indicating successful launch.
 * @member {String} message
 */
AlgorithmLaunch.prototype['message'] = undefined;

/**
 * A list of uuid strings identifying each job started.
 * @member {Array.<String>} uid
 */
AlgorithmLaunch.prototype['uid'] = undefined;

/**
 * A uuid string identifying the group of jobs started.
 * @member {String} gid
 */
AlgorithmLaunch.prototype['gid'] = undefined;






export default AlgorithmLaunch;

