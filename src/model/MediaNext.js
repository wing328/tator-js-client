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
 * The MediaNext model module.
 * @module model/MediaNext
 * @version 0.0.5
 */
class MediaNext {
    /**
     * Constructs a new <code>MediaNext</code>.
     * @alias module:model/MediaNext
     */
    constructor() { 
        
        MediaNext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MediaNext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaNext} obj Optional instance to populate.
     * @return {module:model/MediaNext} The populated <code>MediaNext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MediaNext();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MediaNext</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MediaNext</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} next
 */
MediaNext.prototype['next'] = undefined;






export default MediaNext;

