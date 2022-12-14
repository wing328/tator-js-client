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
 * The NotifySpec model module.
 * @module model/NotifySpec
 * @version 0.0.5
 */
class NotifySpec {
    /**
     * Constructs a new <code>NotifySpec</code>.
     * @alias module:model/NotifySpec
     * @param message {String} Message to send to administrators.
     */
    constructor(message) { 
        
        NotifySpec.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>NotifySpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotifySpec} obj Optional instance to populate.
     * @return {module:model/NotifySpec} The populated <code>NotifySpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotifySpec();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('sendAsFile')) {
                obj['sendAsFile'] = ApiClient.convertToType(data['sendAsFile'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotifySpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotifySpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotifySpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

NotifySpec.RequiredProperties = ["message"];

/**
 * Message to send to administrators.
 * @member {String} message
 */
NotifySpec.prototype['message'] = undefined;

/**
 * Whether to send message as a file. (0 or 1)
 * @member {Number} sendAsFile
 */
NotifySpec.prototype['sendAsFile'] = undefined;






export default NotifySpec;

