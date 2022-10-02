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
 * The StateTrimUpdate model module.
 * @module model/StateTrimUpdate
 * @version 0.0.5
 */
class StateTrimUpdate {
    /**
     * Constructs a new <code>StateTrimUpdate</code>.
     * @alias module:model/StateTrimUpdate
     * @param frame {Number} Frame number of new end point
     * @param endpoint {module:model/StateTrimUpdate.EndpointEnum} End point to trim to using the provided frame number.
     */
    constructor(frame, endpoint) { 
        
        StateTrimUpdate.initialize(this, frame, endpoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, frame, endpoint) { 
        obj['frame'] = frame;
        obj['endpoint'] = endpoint;
    }

    /**
     * Constructs a <code>StateTrimUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StateTrimUpdate} obj Optional instance to populate.
     * @return {module:model/StateTrimUpdate} The populated <code>StateTrimUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateTrimUpdate();

            if (data.hasOwnProperty('frame')) {
                obj['frame'] = ApiClient.convertToType(data['frame'], 'Number');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StateTrimUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StateTrimUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StateTrimUpdate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['endpoint'] && !(typeof data['endpoint'] === 'string' || data['endpoint'] instanceof String)) {
            throw new Error("Expected the field `endpoint` to be a primitive type in the JSON string but got " + data['endpoint']);
        }

        return true;
    }


}

StateTrimUpdate.RequiredProperties = ["frame", "endpoint"];

/**
 * Frame number of new end point
 * @member {Number} frame
 */
StateTrimUpdate.prototype['frame'] = undefined;

/**
 * End point to trim to using the provided frame number.
 * @member {module:model/StateTrimUpdate.EndpointEnum} endpoint
 */
StateTrimUpdate.prototype['endpoint'] = undefined;





/**
 * Allowed values for the <code>endpoint</code> property.
 * @enum {String}
 * @readonly
 */
StateTrimUpdate['EndpointEnum'] = {

    /**
     * value: "start"
     * @const
     */
    "start": "start",

    /**
     * value: "end"
     * @const
     */
    "end": "end"
};



export default StateTrimUpdate;
