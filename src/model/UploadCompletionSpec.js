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
import UploadPart from './UploadPart';

/**
 * The UploadCompletionSpec model module.
 * @module model/UploadCompletionSpec
 * @version 0.0.5
 */
class UploadCompletionSpec {
    /**
     * Constructs a new <code>UploadCompletionSpec</code>.
     * @alias module:model/UploadCompletionSpec
     */
    constructor() { 
        
        UploadCompletionSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadCompletionSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadCompletionSpec} obj Optional instance to populate.
     * @return {module:model/UploadCompletionSpec} The populated <code>UploadCompletionSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadCompletionSpec();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('upload_id')) {
                obj['upload_id'] = ApiClient.convertToType(data['upload_id'], 'String');
            }
            if (data.hasOwnProperty('parts')) {
                obj['parts'] = ApiClient.convertToType(data['parts'], [UploadPart]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadCompletionSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadCompletionSpec</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['upload_id'] && !(typeof data['upload_id'] === 'string' || data['upload_id'] instanceof String)) {
            throw new Error("Expected the field `upload_id` to be a primitive type in the JSON string but got " + data['upload_id']);
        }
        if (data['parts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parts'])) {
                throw new Error("Expected the field `parts` to be an array in the JSON data but got " + data['parts']);
            }
            // validate the optional field `parts` (array)
            for (const item of data['parts']) {
                UploadPart.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * An object key that can be supplied to the `Transcode` or `Media` endpoint after the file has been uploaded.
 * @member {String} key
 */
UploadCompletionSpec.prototype['key'] = undefined;

/**
 * An upload ID.
 * @member {String} upload_id
 */
UploadCompletionSpec.prototype['upload_id'] = undefined;

/**
 * List of objects containing part number for each PUT request and ETag header from each response.
 * @member {Array.<module:model/UploadPart>} parts
 */
UploadCompletionSpec.prototype['parts'] = undefined;






export default UploadCompletionSpec;
