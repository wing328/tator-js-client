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
 * The FeedDefinition model module.
 * @module model/FeedDefinition
 * @version 0.0.5
 */
class FeedDefinition {
    /**
     * Constructs a new <code>FeedDefinition</code>.
     * @alias module:model/FeedDefinition
     * @param name {String} Name of the feed.
     * @param resolution {Array.<Number>} Resolution of the video in pixels (height, width).
     */
    constructor(name, resolution) { 
        
        FeedDefinition.initialize(this, name, resolution);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, resolution) { 
        obj['name'] = name;
        obj['resolution'] = resolution;
    }

    /**
     * Constructs a <code>FeedDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedDefinition} obj Optional instance to populate.
     * @return {module:model/FeedDefinition} The populated <code>FeedDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeedDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resolution')) {
                obj['resolution'] = ApiClient.convertToType(data['resolution'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeedDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeedDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FeedDefinition.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['resolution'])) {
            throw new Error("Expected the field `resolution` to be an array in the JSON data but got " + data['resolution']);
        }

        return true;
    }


}

FeedDefinition.RequiredProperties = ["name", "resolution"];

/**
 * Name of the feed.
 * @member {String} name
 */
FeedDefinition.prototype['name'] = undefined;

/**
 * Resolution of the video in pixels (height, width).
 * @member {Array.<Number>} resolution
 */
FeedDefinition.prototype['resolution'] = undefined;






export default FeedDefinition;

