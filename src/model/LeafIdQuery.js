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
import FloatArrayQuery from './FloatArrayQuery';

/**
 * The LeafIdQuery model module.
 * @module model/LeafIdQuery
 * @version 0.0.5
 */
class LeafIdQuery {
    /**
     * Constructs a new <code>LeafIdQuery</code>.
     * @alias module:model/LeafIdQuery
     */
    constructor() { 
        
        LeafIdQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeafIdQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeafIdQuery} obj Optional instance to populate.
     * @return {module:model/LeafIdQuery} The populated <code>LeafIdQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeafIdQuery();

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
     * Validates the JSON data with respect to <code>LeafIdQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeafIdQuery</code>.
     */
    static validateJSON(data) {
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
 * Array of leaf IDs to retrieve.
 * @member {Array.<Number>} ids
 */
LeafIdQuery.prototype['ids'] = undefined;

/**
 * Searches on `float_array` attributes.
 * @member {Array.<module:model/FloatArrayQuery>} float_array
 */
LeafIdQuery.prototype['float_array'] = undefined;






export default LeafIdQuery;

