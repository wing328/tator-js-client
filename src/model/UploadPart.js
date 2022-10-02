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
 * The UploadPart model module.
 * @module model/UploadPart
 * @version 0.0.5
 */
class UploadPart {
    /**
     * Constructs a new <code>UploadPart</code>.
     * @alias module:model/UploadPart
     */
    constructor() { 
        
        UploadPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadPart} obj Optional instance to populate.
     * @return {module:model/UploadPart} The populated <code>UploadPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadPart();

            if (data.hasOwnProperty('ETag')) {
                obj['ETag'] = ApiClient.convertToType(data['ETag'], 'String');
            }
            if (data.hasOwnProperty('PartNumber')) {
                obj['PartNumber'] = ApiClient.convertToType(data['PartNumber'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadPart</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadPart</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ETag'] && !(typeof data['ETag'] === 'string' || data['ETag'] instanceof String)) {
            throw new Error("Expected the field `ETag` to be a primitive type in the JSON string but got " + data['ETag']);
        }

        return true;
    }


}



/**
 * Content of ETag header returned from PUT request for an upload part. NOTE: key is case-sensitive!
 * @member {String} ETag
 */
UploadPart.prototype['ETag'] = undefined;

/**
 * Part number for the given ETag response header. NOTE: key is case-sensitive!
 * @member {Number} PartNumber
 */
UploadPart.prototype['PartNumber'] = undefined;






export default UploadPart;

