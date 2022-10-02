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
import AlgorithmParameter from './AlgorithmParameter';

/**
 * The AlgorithmLaunchSpec model module.
 * @module model/AlgorithmLaunchSpec
 * @version 0.0.5
 */
class AlgorithmLaunchSpec {
    /**
     * Constructs a new <code>AlgorithmLaunchSpec</code>.
     * @alias module:model/AlgorithmLaunchSpec
     * @param algorithmName {String} Name of the algorithm to execute.
     */
    constructor(algorithmName) { 
        
        AlgorithmLaunchSpec.initialize(this, algorithmName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, algorithmName) { 
        obj['algorithm_name'] = algorithmName;
    }

    /**
     * Constructs a <code>AlgorithmLaunchSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmLaunchSpec} obj Optional instance to populate.
     * @return {module:model/AlgorithmLaunchSpec} The populated <code>AlgorithmLaunchSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlgorithmLaunchSpec();

            if (data.hasOwnProperty('algorithm_name')) {
                obj['algorithm_name'] = ApiClient.convertToType(data['algorithm_name'], 'String');
            }
            if (data.hasOwnProperty('media_query')) {
                obj['media_query'] = ApiClient.convertToType(data['media_query'], 'String');
            }
            if (data.hasOwnProperty('media_ids')) {
                obj['media_ids'] = ApiClient.convertToType(data['media_ids'], ['Number']);
            }
            if (data.hasOwnProperty('extra_params')) {
                obj['extra_params'] = ApiClient.convertToType(data['extra_params'], [AlgorithmParameter]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlgorithmLaunchSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlgorithmLaunchSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AlgorithmLaunchSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['algorithm_name'] && !(typeof data['algorithm_name'] === 'string' || data['algorithm_name'] instanceof String)) {
            throw new Error("Expected the field `algorithm_name` to be a primitive type in the JSON string but got " + data['algorithm_name']);
        }
        // ensure the json data is a string
        if (data['media_query'] && !(typeof data['media_query'] === 'string' || data['media_query'] instanceof String)) {
            throw new Error("Expected the field `media_query` to be a primitive type in the JSON string but got " + data['media_query']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['media_ids'])) {
            throw new Error("Expected the field `media_ids` to be an array in the JSON data but got " + data['media_ids']);
        }
        if (data['extra_params']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['extra_params'])) {
                throw new Error("Expected the field `extra_params` to be an array in the JSON data but got " + data['extra_params']);
            }
            // validate the optional field `extra_params` (array)
            for (const item of data['extra_params']) {
                AlgorithmParameter.validateJsonObject(item);
            };
        }

        return true;
    }


}

AlgorithmLaunchSpec.RequiredProperties = ["algorithm_name"];

/**
 * Name of the algorithm to execute.
 * @member {String} algorithm_name
 */
AlgorithmLaunchSpec.prototype['algorithm_name'] = undefined;

/**
 * Query string used to filter media IDs. If supplied, media_ids will be ignored.
 * @member {String} media_query
 */
AlgorithmLaunchSpec.prototype['media_query'] = undefined;

/**
 * List of media IDs. Must supply media_query or media_ids.
 * @member {Array.<Number>} media_ids
 */
AlgorithmLaunchSpec.prototype['media_ids'] = undefined;

/**
 * Extra parameters to pass into the algorithm
 * @member {Array.<module:model/AlgorithmParameter>} extra_params
 */
AlgorithmLaunchSpec.prototype['extra_params'] = undefined;






export default AlgorithmLaunchSpec;
