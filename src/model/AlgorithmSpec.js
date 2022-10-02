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
import AlgorithmParameter from './AlgorithmParameter';

/**
 * The AlgorithmSpec model module.
 * @module model/AlgorithmSpec
 * @version 0.0.5
 */
class AlgorithmSpec {
    /**
     * Constructs a new <code>AlgorithmSpec</code>.
     * Algorithm registration creation spec.
     * @alias module:model/AlgorithmSpec
     * @param name {String} Unique name of the algorithm workflow.
     * @param user {Number} Unique integer identifying the user registering the algorithm.
     * @param manifest {String} Server URL to argo manifest file (.yaml)
     * @param filesPerJob {Number} Number of media files to be submitted to each workflow.
     */
    constructor(name, user, manifest, filesPerJob) { 
        
        AlgorithmSpec.initialize(this, name, user, manifest, filesPerJob);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, user, manifest, filesPerJob) { 
        obj['name'] = name;
        obj['user'] = user;
        obj['manifest'] = manifest;
        obj['files_per_job'] = filesPerJob;
    }

    /**
     * Constructs a <code>AlgorithmSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmSpec} obj Optional instance to populate.
     * @return {module:model/AlgorithmSpec} The populated <code>AlgorithmSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlgorithmSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('manifest')) {
                obj['manifest'] = ApiClient.convertToType(data['manifest'], 'String');
            }
            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = ApiClient.convertToType(data['cluster'], 'Number');
            }
            if (data.hasOwnProperty('files_per_job')) {
                obj['files_per_job'] = ApiClient.convertToType(data['files_per_job'], 'Number');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [AlgorithmParameter]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlgorithmSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlgorithmSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AlgorithmSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['manifest'] && !(typeof data['manifest'] === 'string' || data['manifest'] instanceof String)) {
            throw new Error("Expected the field `manifest` to be a primitive type in the JSON string but got " + data['manifest']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['categories'])) {
            throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                AlgorithmParameter.validateJsonObject(item);
            };
        }

        return true;
    }


}

AlgorithmSpec.RequiredProperties = ["name", "user", "manifest", "files_per_job"];

/**
 * Unique name of the algorithm workflow.
 * @member {String} name
 */
AlgorithmSpec.prototype['name'] = undefined;

/**
 * Unique integer identifying the user registering the algorithm.
 * @member {Number} user
 */
AlgorithmSpec.prototype['user'] = undefined;

/**
 * Description of the algorithm.
 * @member {String} description
 */
AlgorithmSpec.prototype['description'] = undefined;

/**
 * Server URL to argo manifest file (.yaml)
 * @member {String} manifest
 */
AlgorithmSpec.prototype['manifest'] = undefined;

/**
 * Unique integer identifying the job cluster.
 * @member {Number} cluster
 */
AlgorithmSpec.prototype['cluster'] = undefined;

/**
 * Number of media files to be submitted to each workflow.
 * @member {Number} files_per_job
 */
AlgorithmSpec.prototype['files_per_job'] = undefined;

/**
 * List of categories the algorithm workflow belongs to
 * @member {Array.<String>} categories
 */
AlgorithmSpec.prototype['categories'] = undefined;

/**
 * List of algorithm workflow parameters
 * @member {Array.<module:model/AlgorithmParameter>} parameters
 */
AlgorithmSpec.prototype['parameters'] = undefined;






export default AlgorithmSpec;
