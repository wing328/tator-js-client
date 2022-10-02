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
 * The OrganizationSpec model module.
 * @module model/OrganizationSpec
 * @version 0.0.5
 */
class OrganizationSpec {
    /**
     * Constructs a new <code>OrganizationSpec</code>.
     * @alias module:model/OrganizationSpec
     * @param name {String} Name of the organization.
     */
    constructor(name) { 
        
        OrganizationSpec.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>OrganizationSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationSpec} obj Optional instance to populate.
     * @return {module:model/OrganizationSpec} The populated <code>OrganizationSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

OrganizationSpec.RequiredProperties = ["name"];

/**
 * Name of the organization.
 * @member {String} name
 */
OrganizationSpec.prototype['name'] = undefined;






export default OrganizationSpec;

