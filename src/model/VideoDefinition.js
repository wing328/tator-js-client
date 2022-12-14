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
 * The VideoDefinition model module.
 * @module model/VideoDefinition
 * @version 0.0.5
 */
class VideoDefinition {
    /**
     * Constructs a new <code>VideoDefinition</code>.
     * @alias module:model/VideoDefinition
     * @param path {String} Relative URL to the file.
     * @param codec {String} Human readable codec.
     * @param resolution {Array.<Number>} Resolution of the video in pixels (height, width).
     */
    constructor(path, codec, resolution) { 
        
        VideoDefinition.initialize(this, path, codec, resolution);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, codec, resolution) { 
        obj['path'] = path;
        obj['codec'] = codec;
        obj['resolution'] = resolution;
    }

    /**
     * Constructs a <code>VideoDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoDefinition} obj Optional instance to populate.
     * @return {module:model/VideoDefinition} The populated <code>VideoDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoDefinition();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('bit_rate')) {
                obj['bit_rate'] = ApiClient.convertToType(data['bit_rate'], 'Number');
            }
            if (data.hasOwnProperty('codec')) {
                obj['codec'] = ApiClient.convertToType(data['codec'], 'String');
            }
            if (data.hasOwnProperty('resolution')) {
                obj['resolution'] = ApiClient.convertToType(data['resolution'], ['Number']);
            }
            if (data.hasOwnProperty('segment_info')) {
                obj['segment_info'] = ApiClient.convertToType(data['segment_info'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('http_auth')) {
                obj['http_auth'] = ApiClient.convertToType(data['http_auth'], 'String');
            }
            if (data.hasOwnProperty('codec_mime')) {
                obj['codec_mime'] = ApiClient.convertToType(data['codec_mime'], 'String');
            }
            if (data.hasOwnProperty('codec_description')) {
                obj['codec_description'] = ApiClient.convertToType(data['codec_description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VideoDefinition.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['codec'] && !(typeof data['codec'] === 'string' || data['codec'] instanceof String)) {
            throw new Error("Expected the field `codec` to be a primitive type in the JSON string but got " + data['codec']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['resolution'])) {
            throw new Error("Expected the field `resolution` to be an array in the JSON data but got " + data['resolution']);
        }
        // ensure the json data is a string
        if (data['segment_info'] && !(typeof data['segment_info'] === 'string' || data['segment_info'] instanceof String)) {
            throw new Error("Expected the field `segment_info` to be a primitive type in the JSON string but got " + data['segment_info']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['http_auth'] && !(typeof data['http_auth'] === 'string' || data['http_auth'] instanceof String)) {
            throw new Error("Expected the field `http_auth` to be a primitive type in the JSON string but got " + data['http_auth']);
        }
        // ensure the json data is a string
        if (data['codec_mime'] && !(typeof data['codec_mime'] === 'string' || data['codec_mime'] instanceof String)) {
            throw new Error("Expected the field `codec_mime` to be a primitive type in the JSON string but got " + data['codec_mime']);
        }
        // ensure the json data is a string
        if (data['codec_description'] && !(typeof data['codec_description'] === 'string' || data['codec_description'] instanceof String)) {
            throw new Error("Expected the field `codec_description` to be a primitive type in the JSON string but got " + data['codec_description']);
        }

        return true;
    }


}

VideoDefinition.RequiredProperties = ["path", "codec", "resolution"];

/**
 * Relative URL to the file.
 * @member {String} path
 */
VideoDefinition.prototype['path'] = undefined;

/**
 * File size in bytes.
 * @member {Number} size
 */
VideoDefinition.prototype['size'] = undefined;

/**
 * Bit rate in bits per second
 * @member {Number} bit_rate
 */
VideoDefinition.prototype['bit_rate'] = undefined;

/**
 * Human readable codec.
 * @member {String} codec
 */
VideoDefinition.prototype['codec'] = undefined;

/**
 * Resolution of the video in pixels (height, width).
 * @member {Array.<Number>} resolution
 */
VideoDefinition.prototype['resolution'] = undefined;

/**
 * Path to json file containing segment info. Required if media role is `streaming`.
 * @member {String} segment_info
 */
VideoDefinition.prototype['segment_info'] = undefined;

/**
 * If supplied will use this instead of currently connected host, e.g. https://example.com
 * @member {String} host
 */
VideoDefinition.prototype['host'] = undefined;

/**
 * If specified will be used for HTTP authorization in request for media, i.e. \"bearer TOKEN\".
 * @member {String} http_auth
 */
VideoDefinition.prototype['http_auth'] = undefined;

/**
 * Example mime: \"video/mp4; codecs=\"avc1.64001e\"\". Only relevant for streaming files, will assume example above if not present.
 * @member {String} codec_mime
 */
VideoDefinition.prototype['codec_mime'] = undefined;

/**
 * Description other than codec.
 * @member {String} codec_description
 */
VideoDefinition.prototype['codec_description'] = undefined;






export default VideoDefinition;

