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
import ConcatDefinition from './ConcatDefinition';
import LiveUpdateDefinition from './LiveUpdateDefinition';
import MediaFiles from './MediaFiles';
import MultiDefinition from './MultiDefinition';

/**
 * The MediaUpdate model module.
 * @module model/MediaUpdate
 * @version 0.0.5
 */
class MediaUpdate {
    /**
     * Constructs a new <code>MediaUpdate</code>.
     * @alias module:model/MediaUpdate
     */
    constructor() { 
        
        MediaUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MediaUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaUpdate} obj Optional instance to populate.
     * @return {module:model/MediaUpdate} The populated <code>MediaUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MediaUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('media_files')) {
                obj['media_files'] = MediaFiles.constructFromObject(data['media_files']);
            }
            if (data.hasOwnProperty('last_edit_start')) {
                obj['last_edit_start'] = ApiClient.convertToType(data['last_edit_start'], 'Date');
            }
            if (data.hasOwnProperty('last_edit_end')) {
                obj['last_edit_end'] = ApiClient.convertToType(data['last_edit_end'], 'Date');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
            if (data.hasOwnProperty('num_frames')) {
                obj['num_frames'] = ApiClient.convertToType(data['num_frames'], 'Number');
            }
            if (data.hasOwnProperty('fps')) {
                obj['fps'] = ApiClient.convertToType(data['fps'], 'Number');
            }
            if (data.hasOwnProperty('codec')) {
                obj['codec'] = ApiClient.convertToType(data['codec'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('summaryLevel')) {
                obj['summaryLevel'] = ApiClient.convertToType(data['summaryLevel'], 'Number');
            }
            if (data.hasOwnProperty('multi')) {
                obj['multi'] = MultiDefinition.constructFromObject(data['multi']);
            }
            if (data.hasOwnProperty('live')) {
                obj['live'] = LiveUpdateDefinition.constructFromObject(data['live']);
            }
            if (data.hasOwnProperty('concat')) {
                obj['concat'] = ApiClient.convertToType(data['concat'], [ConcatDefinition]);
            }
            if (data.hasOwnProperty('archive_state')) {
                obj['archive_state'] = ApiClient.convertToType(data['archive_state'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MediaUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MediaUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `media_files`
        if (data['media_files']) { // data not null
          MediaFiles.validateJSON(data['media_files']);
        }
        // ensure the json data is a string
        if (data['codec'] && !(typeof data['codec'] === 'string' || data['codec'] instanceof String)) {
            throw new Error("Expected the field `codec` to be a primitive type in the JSON string but got " + data['codec']);
        }
        // validate the optional field `multi`
        if (data['multi']) { // data not null
          MultiDefinition.validateJSON(data['multi']);
        }
        // validate the optional field `live`
        if (data['live']) { // data not null
          LiveUpdateDefinition.validateJSON(data['live']);
        }
        if (data['concat']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['concat'])) {
                throw new Error("Expected the field `concat` to be an array in the JSON data but got " + data['concat']);
            }
            // validate the optional field `concat` (array)
            for (const item of data['concat']) {
                ConcatDefinition.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['archive_state'] && !(typeof data['archive_state'] === 'string' || data['archive_state'] instanceof String)) {
            throw new Error("Expected the field `archive_state` to be a primitive type in the JSON string but got " + data['archive_state']);
        }

        return true;
    }


}



/**
 * Name of the media.
 * @member {String} name
 */
MediaUpdate.prototype['name'] = undefined;

/**
 * @member {module:model/MediaFiles} media_files
 */
MediaUpdate.prototype['media_files'] = undefined;

/**
 * Datetime of the start of the session when this media or its annotations were last edited.
 * @member {Date} last_edit_start
 */
MediaUpdate.prototype['last_edit_start'] = undefined;

/**
 * Datetime of the end of the session when this media or its annotations were last edited.
 * @member {Date} last_edit_end
 */
MediaUpdate.prototype['last_edit_end'] = undefined;

/**
 * Object containing attribute values.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
MediaUpdate.prototype['attributes'] = undefined;

/**
 * Number of frames in the video.
 * @member {Number} num_frames
 */
MediaUpdate.prototype['num_frames'] = undefined;

/**
 * Frame rate of the video.
 * @member {Number} fps
 */
MediaUpdate.prototype['fps'] = undefined;

/**
 * Codec of the original video.
 * @member {String} codec
 */
MediaUpdate.prototype['codec'] = undefined;

/**
 * Pixel width of the video.
 * @member {Number} width
 */
MediaUpdate.prototype['width'] = undefined;

/**
 * Pixel height of the video.
 * @member {Number} height
 */
MediaUpdate.prototype['height'] = undefined;

/**
 * If supplied, this video is best summarized at this frame interval
 * @member {Number} summaryLevel
 */
MediaUpdate.prototype['summaryLevel'] = undefined;

/**
 * @member {module:model/MultiDefinition} multi
 */
MediaUpdate.prototype['multi'] = undefined;

/**
 * @member {module:model/LiveUpdateDefinition} live
 */
MediaUpdate.prototype['live'] = undefined;

/**
 * List of concated videos
 * @member {Array.<module:model/ConcatDefinition>} concat
 */
MediaUpdate.prototype['concat'] = undefined;

/**
 * Marks media for archival or retrieval. Media may not be set directly to `live` or `archived`, the system performs that transition for the user.
 * @member {module:model/MediaUpdate.ArchiveStateEnum} archive_state
 */
MediaUpdate.prototype['archive_state'] = undefined;





/**
 * Allowed values for the <code>archive_state</code> property.
 * @enum {String}
 * @readonly
 */
MediaUpdate['ArchiveStateEnum'] = {

    /**
     * value: "to_archive"
     * @const
     */
    "archive": "to_archive",

    /**
     * value: "to_live"
     * @const
     */
    "live": "to_live"
};



export default MediaUpdate;

