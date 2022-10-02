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
 * The Localization model module.
 * @module model/Localization
 * @version 0.0.5
 */
class Localization {
    /**
     * Constructs a new <code>Localization</code>.
     * @alias module:model/Localization
     */
    constructor() { 
        
        Localization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Localization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Localization} obj Optional instance to populate.
     * @return {module:model/Localization} The populated <code>Localization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Localization();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], 'Number');
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], 'Number');
            }
            if (data.hasOwnProperty('thumbnail_image')) {
                obj['thumbnail_image'] = ApiClient.convertToType(data['thumbnail_image'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
            if (data.hasOwnProperty('created_datetime')) {
                obj['created_datetime'] = ApiClient.convertToType(data['created_datetime'], 'Date');
            }
            if (data.hasOwnProperty('modified_datetime')) {
                obj['modified_datetime'] = ApiClient.convertToType(data['modified_datetime'], 'Date');
            }
            if (data.hasOwnProperty('modified_by')) {
                obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('u')) {
                obj['u'] = ApiClient.convertToType(data['u'], 'Number');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'Number');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], [['Number']]);
            }
            if (data.hasOwnProperty('frame')) {
                obj['frame'] = ApiClient.convertToType(data['frame'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Localization</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Localization</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['thumbnail_image'] && !(typeof data['thumbnail_image'] === 'string' || data['thumbnail_image'] instanceof String)) {
            throw new Error("Expected the field `thumbnail_image` to be a primitive type in the JSON string but got " + data['thumbnail_image']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['points'])) {
            throw new Error("Expected the field `points` to be an array in the JSON data but got " + data['points']);
        }

        return true;
    }


}



/**
 * Unique integer identifying this localization.
 * @member {Number} id
 */
Localization.prototype['id'] = undefined;

/**
 * Unique integer identifying project of this localization.
 * @member {Number} project
 */
Localization.prototype['project'] = undefined;

/**
 * Unique integer identifying entity type of this localization.
 * @member {Number} meta
 */
Localization.prototype['meta'] = undefined;

/**
 * Unique integer identifying media of this localization.
 * @member {Number} media
 */
Localization.prototype['media'] = undefined;

/**
 * URL of thumbnail corresponding to this localization.
 * @member {String} thumbnail_image
 */
Localization.prototype['thumbnail_image'] = undefined;

/**
 * Unique integer identifying a version.
 * @member {Number} version
 */
Localization.prototype['version'] = undefined;

/**
 * Object containing attribute values.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
Localization.prototype['attributes'] = undefined;

/**
 * Datetime this localization was created.
 * @member {Date} created_datetime
 */
Localization.prototype['created_datetime'] = undefined;

/**
 * Datetime this localization was last modified.
 * @member {Date} modified_datetime
 */
Localization.prototype['modified_datetime'] = undefined;

/**
 * Unique integer identifying the user who last modified this localization.
 * @member {Number} modified_by
 */
Localization.prototype['modified_by'] = undefined;

/**
 * Unique integer identifying the user who created this localization.
 * @member {Number} user
 */
Localization.prototype['user'] = undefined;

/**
 * Normalized horizontal position of left edge of bounding box for `box` localization types, start of line for `line` localization types, or position of dot for `dot` localization types.
 * @member {Number} x
 */
Localization.prototype['x'] = undefined;

/**
 * Normalized vertical position of top edge of bounding box for `box` localization types, start of line for `line` localization types, or position of dot for `dot` localization types.
 * @member {Number} y
 */
Localization.prototype['y'] = undefined;

/**
 * Normalized width of bounding box for `box` localization types.
 * @member {Number} width
 */
Localization.prototype['width'] = undefined;

/**
 * Normalized height of bounding box for `box` localization types.
 * @member {Number} height
 */
Localization.prototype['height'] = undefined;

/**
 * Horizontal vector component for `line` localization types.
 * @member {Number} u
 */
Localization.prototype['u'] = undefined;

/**
 * Vertical vector component for `line` localization types.
 * @member {Number} v
 */
Localization.prototype['v'] = undefined;

/**
 * List of normalized [x, y] pairs for `poly` localization types.
 * @member {Array.<Array.<Number>>} points
 */
Localization.prototype['points'] = undefined;

/**
 * Frame number of this localization if it is in a video.
 * @member {Number} frame
 */
Localization.prototype['frame'] = undefined;

/**
 * If a clone, the pk of the parent.
 * @member {Number} parent
 */
Localization.prototype['parent'] = undefined;






export default Localization;

