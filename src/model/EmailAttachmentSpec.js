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
 * The EmailAttachmentSpec model module.
 * @module model/EmailAttachmentSpec
 * @version 0.0.5
 */
class EmailAttachmentSpec {
    /**
     * Constructs a new <code>EmailAttachmentSpec</code>.
     * Email attachment spec.
     * @alias module:model/EmailAttachmentSpec
     * @param key {String} S3 key of file
     * @param name {String} Name of file to use in attachment
     */
    constructor(key, name) { 
        
        EmailAttachmentSpec.initialize(this, key, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name) { 
        obj['key'] = key;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>EmailAttachmentSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailAttachmentSpec} obj Optional instance to populate.
     * @return {module:model/EmailAttachmentSpec} The populated <code>EmailAttachmentSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailAttachmentSpec();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailAttachmentSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailAttachmentSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailAttachmentSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

EmailAttachmentSpec.RequiredProperties = ["key", "name"];

/**
 * S3 key of file
 * @member {String} key
 */
EmailAttachmentSpec.prototype['key'] = undefined;

/**
 * Name of file to use in attachment
 * @member {String} name
 */
EmailAttachmentSpec.prototype['name'] = undefined;






export default EmailAttachmentSpec;

