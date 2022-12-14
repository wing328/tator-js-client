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
 * The LeafSpec model module.
 * @module model/LeafSpec
 * @version 0.0.5
 */
class LeafSpec {
    /**
     * Constructs a new <code>LeafSpec</code>.
     * @alias module:model/LeafSpec
     * @extends Object
     * @param name {String} Name of the leaf.
     * @param type {Number} Unique integer identifying a leaf type.
     */
    constructor(name, type) { 
        
        LeafSpec.initialize(this, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type) { 
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>LeafSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeafSpec} obj Optional instance to populate.
     * @return {module:model/LeafSpec} The populated <code>LeafSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeafSpec();

            ApiClient.constructFromObject(data, obj, 'AttributeValue');
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeafSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeafSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LeafSpec.RequiredProperties) {
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

LeafSpec.RequiredProperties = ["name", "type"];

/**
 * Name of the leaf.
 * @member {String} name
 */
LeafSpec.prototype['name'] = undefined;

/**
 * Unique integer identifying a leaf type.
 * @member {Number} type
 */
LeafSpec.prototype['type'] = undefined;

/**
 * ID to use as parent if there is one.
 * @member {Number} parent
 */
LeafSpec.prototype['parent'] = undefined;






export default LeafSpec;

