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
 * The LocalizationSpec model module.
 * @module model/LocalizationSpec
 * @version 0.0.5
 */
class LocalizationSpec {
    /**
     * Constructs a new <code>LocalizationSpec</code>.
     * Localization creation spec. Attribute key/values must be included in the base object.
     * @alias module:model/LocalizationSpec
     * @extends Object
     * @param mediaId {Number} Unique integer identifying a media.
     * @param type {Number} Unique integer identifying a localization type.
     * @param frame {Number} Frame number of this localization if it is in a video.
     */
    constructor(mediaId, type, frame) { 
        
        LocalizationSpec.initialize(this, mediaId, type, frame);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mediaId, type, frame) { 
        obj['media_id'] = mediaId;
        obj['type'] = type;
        obj['frame'] = frame;
    }

    /**
     * Constructs a <code>LocalizationSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalizationSpec} obj Optional instance to populate.
     * @return {module:model/LocalizationSpec} The populated <code>LocalizationSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocalizationSpec();

            ApiClient.constructFromObject(data, obj, 'AttributeValue');
            

            if (data.hasOwnProperty('media_id')) {
                obj['media_id'] = ApiClient.convertToType(data['media_id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
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
     * Validates the JSON data with respect to <code>LocalizationSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocalizationSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LocalizationSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['points'])) {
            throw new Error("Expected the field `points` to be an array in the JSON data but got " + data['points']);
        }

        return true;
    }


}

LocalizationSpec.RequiredProperties = ["media_id", "type", "frame"];

/**
 * Unique integer identifying a media.
 * @member {Number} media_id
 */
LocalizationSpec.prototype['media_id'] = undefined;

/**
 * Unique integer identifying a localization type.
 * @member {Number} type
 */
LocalizationSpec.prototype['type'] = undefined;

/**
 * Unique integer identifying the version.
 * @member {Number} version
 */
LocalizationSpec.prototype['version'] = undefined;

/**
 * Normalized horizontal position of left edge of bounding box for `box` localization types, start of line for `line` localization types, or position of dot for `dot` localization types.
 * @member {Number} x
 */
LocalizationSpec.prototype['x'] = undefined;

/**
 * Normalized vertical position of top edge of bounding box for `box` localization types, start of line for `line` localization types, or position of dot for `dot` localization types.
 * @member {Number} y
 */
LocalizationSpec.prototype['y'] = undefined;

/**
 * Normalized width of bounding box for `box` localization types.
 * @member {Number} width
 */
LocalizationSpec.prototype['width'] = undefined;

/**
 * Normalized height of bounding box for `box` localization types.
 * @member {Number} height
 */
LocalizationSpec.prototype['height'] = undefined;

/**
 * Horizontal vector component for `line` localization types.
 * @member {Number} u
 */
LocalizationSpec.prototype['u'] = undefined;

/**
 * Vertical vector component for `line` localization types.
 * @member {Number} v
 */
LocalizationSpec.prototype['v'] = undefined;

/**
 * List of normalized [x, y] pairs for `poly` localization types.
 * @member {Array.<Array.<Number>>} points
 */
LocalizationSpec.prototype['points'] = undefined;

/**
 * Frame number of this localization if it is in a video.
 * @member {Number} frame
 */
LocalizationSpec.prototype['frame'] = undefined;

/**
 * If a clone, the pk of the parent.
 * @member {Number} parent
 */
LocalizationSpec.prototype['parent'] = undefined;






export default LocalizationSpec;

