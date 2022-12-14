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
 * The AudioDefinition model module.
 * @module model/AudioDefinition
 * @version 0.0.5
 */
class AudioDefinition {
    /**
     * Constructs a new <code>AudioDefinition</code>.
     * @alias module:model/AudioDefinition
     * @param path {String} Relative URL to the file.
     * @param codec {String} Human readable codec.
     */
    constructor(path, codec) { 
        
        AudioDefinition.initialize(this, path, codec);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, codec) { 
        obj['path'] = path;
        obj['codec'] = codec;
    }

    /**
     * Constructs a <code>AudioDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudioDefinition} obj Optional instance to populate.
     * @return {module:model/AudioDefinition} The populated <code>AudioDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AudioDefinition();

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
     * Validates the JSON data with respect to <code>AudioDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AudioDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AudioDefinition.RequiredProperties) {
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

AudioDefinition.RequiredProperties = ["path", "codec"];

/**
 * Relative URL to the file.
 * @member {String} path
 */
AudioDefinition.prototype['path'] = undefined;

/**
 * File size in bytes.
 * @member {Number} size
 */
AudioDefinition.prototype['size'] = undefined;

/**
 * Bit rate in bits per second
 * @member {Number} bit_rate
 */
AudioDefinition.prototype['bit_rate'] = undefined;

/**
 * Human readable codec.
 * @member {String} codec
 */
AudioDefinition.prototype['codec'] = undefined;

/**
 * If supplied will use this instead of currently connected host, e.g. https://example.com
 * @member {String} host
 */
AudioDefinition.prototype['host'] = undefined;

/**
 * If specified will be used for HTTP authorization in request for media, i.e. \"bearer TOKEN\".
 * @member {String} http_auth
 */
AudioDefinition.prototype['http_auth'] = undefined;

/**
 * Example mime: \"video/mp4; codecs=\"avc1.64001e\"\". Only relevant for streaming files, will assume example above if not present.
 * @member {String} codec_mime
 */
AudioDefinition.prototype['codec_mime'] = undefined;

/**
 * Description other than codec.
 * @member {String} codec_description
 */
AudioDefinition.prototype['codec_description'] = undefined;






export default AudioDefinition;

