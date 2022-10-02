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
import TemporaryFile from './TemporaryFile';

/**
 * The VideoClip model module.
 * @module model/VideoClip
 * @version 0.0.5
 */
class VideoClip {
    /**
     * Constructs a new <code>VideoClip</code>.
     * @alias module:model/VideoClip
     */
    constructor() { 
        
        VideoClip.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoClip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoClip} obj Optional instance to populate.
     * @return {module:model/VideoClip} The populated <code>VideoClip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoClip();

            if (data.hasOwnProperty('segment_start_frames')) {
                obj['segment_start_frames'] = ApiClient.convertToType(data['segment_start_frames'], ['Number']);
            }
            if (data.hasOwnProperty('segment_end_frames')) {
                obj['segment_end_frames'] = ApiClient.convertToType(data['segment_end_frames'], ['Number']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = TemporaryFile.constructFromObject(data['file']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoClip</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoClip</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['segment_start_frames'])) {
            throw new Error("Expected the field `segment_start_frames` to be an array in the JSON data but got " + data['segment_start_frames']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['segment_end_frames'])) {
            throw new Error("Expected the field `segment_end_frames` to be an array in the JSON data but got " + data['segment_end_frames']);
        }
        // validate the optional field `file`
        if (data['file']) { // data not null
          TemporaryFile.validateJSON(data['file']);
        }

        return true;
    }


}



/**
 * List of start frames of segments that form the clip. Index associated with segment_end_frames.
 * @member {Array.<Number>} segment_start_frames
 */
VideoClip.prototype['segment_start_frames'] = undefined;

/**
 * List of end frames of segments that form the clip. Index associated with segment_start_frames.
 * @member {Array.<Number>} segment_end_frames
 */
VideoClip.prototype['segment_end_frames'] = undefined;

/**
 * @member {module:model/TemporaryFile} file
 */
VideoClip.prototype['file'] = undefined;






export default VideoClip;

