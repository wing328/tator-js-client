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

/**
 * The ChangeLogDescriptionOfChangeNewInner model module.
 * @module model/ChangeLogDescriptionOfChangeNewInner
 * @version 0.0.5
 */
class ChangeLogDescriptionOfChangeNewInner {
    /**
     * Constructs a new <code>ChangeLogDescriptionOfChangeNewInner</code>.
     * @alias module:model/ChangeLogDescriptionOfChangeNewInner
     */
    constructor() { 
        
        ChangeLogDescriptionOfChangeNewInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeLogDescriptionOfChangeNewInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeLogDescriptionOfChangeNewInner} obj Optional instance to populate.
     * @return {module:model/ChangeLogDescriptionOfChangeNewInner} The populated <code>ChangeLogDescriptionOfChangeNewInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeLogDescriptionOfChangeNewInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = AttributeValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeLogDescriptionOfChangeNewInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeLogDescriptionOfChangeNewInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          AttributeValue.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * The name of the changed property
 * @member {String} name
 */
ChangeLogDescriptionOfChangeNewInner.prototype['name'] = undefined;

/**
 * @member {module:model/AttributeValue} value
 */
ChangeLogDescriptionOfChangeNewInner.prototype['value'] = undefined;






export default ChangeLogDescriptionOfChangeNewInner;

