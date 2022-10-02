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
import AttributeValue from './AttributeValue';
import FloatArrayQuery from './FloatArrayQuery';

/**
 * The StateBulkUpdate model module.
 * @module model/StateBulkUpdate
 * @version 0.0.5
 */
class StateBulkUpdate {
    /**
     * Constructs a new <code>StateBulkUpdate</code>.
     * @alias module:model/StateBulkUpdate
     */
    constructor() { 
        
        StateBulkUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StateBulkUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StateBulkUpdate} obj Optional instance to populate.
     * @return {module:model/StateBulkUpdate} The populated <code>StateBulkUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateBulkUpdate();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
            if (data.hasOwnProperty('media_query')) {
                obj['media_query'] = ApiClient.convertToType(data['media_query'], 'String');
            }
            if (data.hasOwnProperty('media_ids')) {
                obj['media_ids'] = ApiClient.convertToType(data['media_ids'], ['Number']);
            }
            if (data.hasOwnProperty('localization_ids')) {
                obj['localization_ids'] = ApiClient.convertToType(data['localization_ids'], ['Number']);
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('float_array')) {
                obj['float_array'] = ApiClient.convertToType(data['float_array'], [FloatArrayQuery]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StateBulkUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StateBulkUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['media_query'] && !(typeof data['media_query'] === 'string' || data['media_query'] instanceof String)) {
            throw new Error("Expected the field `media_query` to be a primitive type in the JSON string but got " + data['media_query']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['media_ids'])) {
            throw new Error("Expected the field `media_ids` to be an array in the JSON data but got " + data['media_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['localization_ids'])) {
            throw new Error("Expected the field `localization_ids` to be an array in the JSON data but got " + data['localization_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }
        if (data['float_array']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['float_array'])) {
                throw new Error("Expected the field `float_array` to be an array in the JSON data but got " + data['float_array']);
            }
            // validate the optional field `float_array` (array)
            for (const item of data['float_array']) {
                FloatArrayQuery.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Attribute values to bulk update an entity list.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
StateBulkUpdate.prototype['attributes'] = undefined;

/**
 * Query string used to filter media IDs. This can be used to avoid serialization and download of a media ID list.
 * @member {String} media_query
 */
StateBulkUpdate.prototype['media_query'] = undefined;

/**
 * Array of parent media IDs for which states should be retrieved.
 * @member {Array.<Number>} media_ids
 */
StateBulkUpdate.prototype['media_ids'] = undefined;

/**
 * Array of child localization IDs for which states should be retrieved.
 * @member {Array.<Number>} localization_ids
 */
StateBulkUpdate.prototype['localization_ids'] = undefined;

/**
 * Array of state IDs to retrieve.
 * @member {Array.<Number>} ids
 */
StateBulkUpdate.prototype['ids'] = undefined;

/**
 * Searches on `float_array` attributes.
 * @member {Array.<module:model/FloatArrayQuery>} float_array
 */
StateBulkUpdate.prototype['float_array'] = undefined;






export default StateBulkUpdate;
