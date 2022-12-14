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
import ChangeLogDescriptionOfChangeNewInner from './ChangeLogDescriptionOfChangeNewInner';

/**
 * The ChangeLogDescriptionOfChange model module.
 * @module model/ChangeLogDescriptionOfChange
 * @version 0.0.5
 */
class ChangeLogDescriptionOfChange {
    /**
     * Constructs a new <code>ChangeLogDescriptionOfChange</code>.
     * The old and new values for the changed object
     * @alias module:model/ChangeLogDescriptionOfChange
     */
    constructor() { 
        
        ChangeLogDescriptionOfChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeLogDescriptionOfChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeLogDescriptionOfChange} obj Optional instance to populate.
     * @return {module:model/ChangeLogDescriptionOfChange} The populated <code>ChangeLogDescriptionOfChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeLogDescriptionOfChange();

            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], [ChangeLogDescriptionOfChangeNewInner]);
            }
            if (data.hasOwnProperty('old')) {
                obj['old'] = ApiClient.convertToType(data['old'], [ChangeLogDescriptionOfChangeNewInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeLogDescriptionOfChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeLogDescriptionOfChange</code>.
     */
    static validateJSON(data) {
        if (data['new']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['new'])) {
                throw new Error("Expected the field `new` to be an array in the JSON data but got " + data['new']);
            }
            // validate the optional field `new` (array)
            for (const item of data['new']) {
                ChangeLogDescriptionOfChangeNewInner.validateJsonObject(item);
            };
        }
        if (data['old']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['old'])) {
                throw new Error("Expected the field `old` to be an array in the JSON data but got " + data['old']);
            }
            // validate the optional field `old` (array)
            for (const item of data['old']) {
                ChangeLogDescriptionOfChangeNewInner.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The new values for the changed object
 * @member {Array.<module:model/ChangeLogDescriptionOfChangeNewInner>} new
 */
ChangeLogDescriptionOfChange.prototype['new'] = undefined;

/**
 * The old values for the changed object
 * @member {Array.<module:model/ChangeLogDescriptionOfChangeNewInner>} old
 */
ChangeLogDescriptionOfChange.prototype['old'] = undefined;






export default ChangeLogDescriptionOfChange;

