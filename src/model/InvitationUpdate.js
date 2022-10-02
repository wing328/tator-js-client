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
 * The InvitationUpdate model module.
 * @module model/InvitationUpdate
 * @version 0.0.5
 */
class InvitationUpdate {
    /**
     * Constructs a new <code>InvitationUpdate</code>.
     * @alias module:model/InvitationUpdate
     */
    constructor() { 
        
        InvitationUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationUpdate} obj Optional instance to populate.
     * @return {module:model/InvitationUpdate} The populated <code>InvitationUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationUpdate();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvitationUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvitationUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }

        return true;
    }


}



/**
 * Status of the invitation.
 * @member {module:model/InvitationUpdate.StatusEnum} status
 */
InvitationUpdate.prototype['status'] = undefined;

/**
 * User permission level for the organization.
 * @member {module:model/InvitationUpdate.PermissionEnum} permission
 */
InvitationUpdate.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InvitationUpdate['StatusEnum'] = {

    /**
     * value: "Accepted"
     * @const
     */
    "Accepted": "Accepted"
};


/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
InvitationUpdate['PermissionEnum'] = {

    /**
     * value: "Member"
     * @const
     */
    "Member": "Member",

    /**
     * value: "Admin"
     * @const
     */
    "Admin": "Admin"
};



export default InvitationUpdate;
