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
 * The MultiDefinition model module.
 * @module model/MultiDefinition
 * @version 0.0.5
 */
class MultiDefinition {
    /**
     * Constructs a new <code>MultiDefinition</code>.
     * Object containing information needed for a multi media type.
     * @alias module:model/MultiDefinition
     */
    constructor() { 
        
        MultiDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiDefinition} obj Optional instance to populate.
     * @return {module:model/MultiDefinition} The populated <code>MultiDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiDefinition();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('frameOffset')) {
                obj['frameOffset'] = ApiClient.convertToType(data['frameOffset'], ['Number']);
            }
            if (data.hasOwnProperty('layout')) {
                obj['layout'] = ApiClient.convertToType(data['layout'], ['Number']);
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['frameOffset'])) {
            throw new Error("Expected the field `frameOffset` to be an array in the JSON data but got " + data['frameOffset']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['layout'])) {
            throw new Error("Expected the field `layout` to be an array in the JSON data but got " + data['layout']);
        }

        return true;
    }


}



/**
 * If multi-stream list of ids of sub-videos
 * @member {Array.<Number>} ids
 */
MultiDefinition.prototype['ids'] = undefined;

/**
 * Frame of sub-video, offset from media in slot 0.
 * @member {Array.<Number>} frameOffset
 */
MultiDefinition.prototype['frameOffset'] = undefined;

/**
 * 2-element array to define rxc layout
 * @member {Array.<Number>} layout
 */
MultiDefinition.prototype['layout'] = undefined;

/**
 * Resolution to fetch on each sub-video
 * @member {Number} quality
 */
MultiDefinition.prototype['quality'] = undefined;






export default MultiDefinition;

