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
 * The Bucket model module.
 * @module model/Bucket
 * @version 0.0.5
 */
class Bucket {
    /**
     * Constructs a new <code>Bucket</code>.
     * Bucket object.
     * @alias module:model/Bucket
     */
    constructor() { 
        
        Bucket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Bucket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Bucket} obj Optional instance to populate.
     * @return {module:model/Bucket} The populated <code>Bucket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Bucket();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('endpoint_url')) {
                obj['endpoint_url'] = ApiClient.convertToType(data['endpoint_url'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('archive_sc')) {
                obj['archive_sc'] = ApiClient.convertToType(data['archive_sc'], 'String');
            }
            if (data.hasOwnProperty('live_sc')) {
                obj['live_sc'] = ApiClient.convertToType(data['live_sc'], 'String');
            }
            if (data.hasOwnProperty('gcs_key_info')) {
                obj['gcs_key_info'] = ApiClient.convertToType(data['gcs_key_info'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Bucket</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Bucket</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['access_key'] && !(typeof data['access_key'] === 'string' || data['access_key'] instanceof String)) {
            throw new Error("Expected the field `access_key` to be a primitive type in the JSON string but got " + data['access_key']);
        }
        // ensure the json data is a string
        if (data['secret_key'] && !(typeof data['secret_key'] === 'string' || data['secret_key'] instanceof String)) {
            throw new Error("Expected the field `secret_key` to be a primitive type in the JSON string but got " + data['secret_key']);
        }
        // ensure the json data is a string
        if (data['endpoint_url'] && !(typeof data['endpoint_url'] === 'string' || data['endpoint_url'] instanceof String)) {
            throw new Error("Expected the field `endpoint_url` to be a primitive type in the JSON string but got " + data['endpoint_url']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['archive_sc'] && !(typeof data['archive_sc'] === 'string' || data['archive_sc'] instanceof String)) {
            throw new Error("Expected the field `archive_sc` to be a primitive type in the JSON string but got " + data['archive_sc']);
        }
        // ensure the json data is a string
        if (data['live_sc'] && !(typeof data['live_sc'] === 'string' || data['live_sc'] instanceof String)) {
            throw new Error("Expected the field `live_sc` to be a primitive type in the JSON string but got " + data['live_sc']);
        }
        // ensure the json data is a string
        if (data['gcs_key_info'] && !(typeof data['gcs_key_info'] === 'string' || data['gcs_key_info'] instanceof String)) {
            throw new Error("Expected the field `gcs_key_info` to be a primitive type in the JSON string but got " + data['gcs_key_info']);
        }

        return true;
    }


}



/**
 * Unique integer identifying a bucket.
 * @member {Number} id
 */
Bucket.prototype['id'] = undefined;

/**
 * Unique integer identifying organization that owns this bucket.
 * @member {Number} organization
 */
Bucket.prototype['organization'] = undefined;

/**
 * Bucket name.
 * @member {String} name
 */
Bucket.prototype['name'] = undefined;

/**
 * Account access key.
 * @member {String} access_key
 */
Bucket.prototype['access_key'] = undefined;

/**
 * Account secret key.
 * @member {String} secret_key
 */
Bucket.prototype['secret_key'] = undefined;

/**
 * Endpoint URL for bucket.
 * @member {String} endpoint_url
 */
Bucket.prototype['endpoint_url'] = undefined;

/**
 * Bucket region.
 * @member {String} region
 */
Bucket.prototype['region'] = undefined;

/**
 * Storage class in which archived objects live.
 * @member {String} archive_sc
 */
Bucket.prototype['archive_sc'] = undefined;

/**
 * Storage class in which live objects live.
 * @member {String} live_sc
 */
Bucket.prototype['live_sc'] = undefined;

/**
 * JSON string containing Google Cloud Storage credentials.
 * @member {String} gcs_key_info
 */
Bucket.prototype['gcs_key_info'] = undefined;






export default Bucket;

