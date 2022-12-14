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
 * The JobClusterSpec model module.
 * @module model/JobClusterSpec
 * @version 0.0.5
 */
class JobClusterSpec {
    /**
     * Constructs a new <code>JobClusterSpec</code>.
     * Job cluster creation spec.
     * @alias module:model/JobClusterSpec
     * @param name {String} Unique name of the job cluster.
     * @param host {String} Hostname where the cluster can be accessed.
     * @param port {Number} Port where the cluster can be accessed.
     * @param token {String} Token for accessing the job cluster.
     * @param cert {String} Certificate for accessing the job cluster.
     */
    constructor(name, host, port, token, cert) { 
        
        JobClusterSpec.initialize(this, name, host, port, token, cert);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, host, port, token, cert) { 
        obj['name'] = name;
        obj['host'] = host;
        obj['port'] = port;
        obj['token'] = token;
        obj['cert'] = cert;
    }

    /**
     * Constructs a <code>JobClusterSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobClusterSpec} obj Optional instance to populate.
     * @return {module:model/JobClusterSpec} The populated <code>JobClusterSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobClusterSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('cert')) {
                obj['cert'] = ApiClient.convertToType(data['cert'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JobClusterSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JobClusterSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JobClusterSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['cert'] && !(typeof data['cert'] === 'string' || data['cert'] instanceof String)) {
            throw new Error("Expected the field `cert` to be a primitive type in the JSON string but got " + data['cert']);
        }

        return true;
    }


}

JobClusterSpec.RequiredProperties = ["name", "host", "port", "token", "cert"];

/**
 * Unique name of the job cluster.
 * @member {String} name
 */
JobClusterSpec.prototype['name'] = undefined;

/**
 * Hostname where the cluster can be accessed.
 * @member {String} host
 */
JobClusterSpec.prototype['host'] = undefined;

/**
 * Port where the cluster can be accessed.
 * @member {Number} port
 */
JobClusterSpec.prototype['port'] = undefined;

/**
 * Token for accessing the job cluster.
 * @member {String} token
 */
JobClusterSpec.prototype['token'] = undefined;

/**
 * Certificate for accessing the job cluster.
 * @member {String} cert
 */
JobClusterSpec.prototype['cert'] = undefined;






export default JobClusterSpec;

