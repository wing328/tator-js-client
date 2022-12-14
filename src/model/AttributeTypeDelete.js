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
 * The AttributeTypeDelete model module.
 * @module model/AttributeTypeDelete
 * @version 0.0.5
 */
class AttributeTypeDelete {
    /**
     * Constructs a new <code>AttributeTypeDelete</code>.
     * Deletes an existing attribute from a type.
     * @alias module:model/AttributeTypeDelete
     */
    constructor() { 
        
        AttributeTypeDelete.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeTypeDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeTypeDelete} obj Optional instance to populate.
     * @return {module:model/AttributeTypeDelete} The populated <code>AttributeTypeDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeTypeDelete();

            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('attribute_to_delete')) {
                obj['attribute_to_delete'] = ApiClient.convertToType(data['attribute_to_delete'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeTypeDelete</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeTypeDelete</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entity_type'] && !(typeof data['entity_type'] === 'string' || data['entity_type'] instanceof String)) {
            throw new Error("Expected the field `entity_type` to be a primitive type in the JSON string but got " + data['entity_type']);
        }
        // ensure the json data is a string
        if (data['attribute_to_delete'] && !(typeof data['attribute_to_delete'] === 'string' || data['attribute_to_delete'] instanceof String)) {
            throw new Error("Expected the field `attribute_to_delete` to be a primitive type in the JSON string but got " + data['attribute_to_delete']);
        }

        return true;
    }


}



/**
 * The entity type containing the attribute to rename.
 * @member {String} entity_type
 */
AttributeTypeDelete.prototype['entity_type'] = undefined;

/**
 * The attribute to delete.
 * @member {String} attribute_to_delete
 */
AttributeTypeDelete.prototype['attribute_to_delete'] = undefined;






export default AttributeTypeDelete;

