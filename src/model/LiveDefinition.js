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
import FeedDefinition from './FeedDefinition';

/**
 * The LiveDefinition model module.
 * @module model/LiveDefinition
 * @version 0.0.5
 */
class LiveDefinition {
    /**
     * Constructs a new <code>LiveDefinition</code>.
     * @alias module:model/LiveDefinition
     * @param url {String} URL to streaming server.
     * @param feeds {Array.<module:model/FeedDefinition>} 
     */
    constructor(url, feeds) { 
        
        LiveDefinition.initialize(this, url, feeds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, feeds) { 
        obj['url'] = url;
        obj['feeds'] = feeds;
    }

    /**
     * Constructs a <code>LiveDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiveDefinition} obj Optional instance to populate.
     * @return {module:model/LiveDefinition} The populated <code>LiveDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LiveDefinition();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('feeds')) {
                obj['feeds'] = ApiClient.convertToType(data['feeds'], [FeedDefinition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LiveDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LiveDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LiveDefinition.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        if (data['feeds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['feeds'])) {
                throw new Error("Expected the field `feeds` to be an array in the JSON data but got " + data['feeds']);
            }
            // validate the optional field `feeds` (array)
            for (const item of data['feeds']) {
                FeedDefinition.validateJsonObject(item);
            };
        }

        return true;
    }


}

LiveDefinition.RequiredProperties = ["url", "feeds"];

/**
 * URL to streaming server.
 * @member {String} url
 */
LiveDefinition.prototype['url'] = undefined;

/**
 * @member {Array.<module:model/FeedDefinition>} feeds
 */
LiveDefinition.prototype['feeds'] = undefined;






export default LiveDefinition;

