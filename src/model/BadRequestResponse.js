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
 * The BadRequestResponse model module.
 * @module model/BadRequestResponse
 * @version 0.0.5
 */
class BadRequestResponse {
    /**
     * Constructs a new <code>BadRequestResponse</code>.
     * @alias module:model/BadRequestResponse
     */
    constructor() { 
        
        BadRequestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BadRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BadRequestResponse} obj Optional instance to populate.
     * @return {module:model/BadRequestResponse} The populated <code>BadRequestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BadRequestResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BadRequestResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BadRequestResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }

        return true;
    }


}



/**
 * Error message for bad request.
 * @member {String} message
 */
BadRequestResponse.prototype['message'] = undefined;

/**
 * Detailed error message for bad request.
 * @member {String} details
 */
BadRequestResponse.prototype['details'] = undefined;






export default BadRequestResponse;

