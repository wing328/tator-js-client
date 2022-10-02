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
 * The Project model module.
 * @module model/Project
 * @version 0.0.5
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * Project object.
     * @alias module:model/Project
     */
    constructor() { 
        
        Project.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'Number');
            }
            if (data.hasOwnProperty('enable_downloads')) {
                obj['enable_downloads'] = ApiClient.convertToType(data['enable_downloads'], 'Boolean');
            }
            if (data.hasOwnProperty('bucket')) {
                obj['bucket'] = ApiClient.convertToType(data['bucket'], 'Number');
            }
            if (data.hasOwnProperty('upload_bucket')) {
                obj['upload_bucket'] = ApiClient.convertToType(data['upload_bucket'], 'Number');
            }
            if (data.hasOwnProperty('backup_bucket')) {
                obj['backup_bucket'] = ApiClient.convertToType(data['backup_bucket'], 'Number');
            }
            if (data.hasOwnProperty('thumb')) {
                obj['thumb'] = ApiClient.convertToType(data['thumb'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('num_files')) {
                obj['num_files'] = ApiClient.convertToType(data['num_files'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('usernames')) {
                obj['usernames'] = ApiClient.convertToType(data['usernames'], ['String']);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Project</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Project</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // ensure the json data is a string
        if (data['thumb'] && !(typeof data['thumb'] === 'string' || data['thumb'] instanceof String)) {
            throw new Error("Expected the field `thumb` to be a primitive type in the JSON string but got " + data['thumb']);
        }
        // ensure the json data is a string
        if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
            throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['usernames'])) {
            throw new Error("Expected the field `usernames` to be an array in the JSON data but got " + data['usernames']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }

        return true;
    }


}



/**
 * Unique integer identifying the project.
 * @member {Number} id
 */
Project.prototype['id'] = undefined;

/**
 * Name of the project.
 * @member {String} name
 */
Project.prototype['name'] = undefined;

/**
 * Summary of the project.
 * @member {String} summary
 * @default ''
 */
Project.prototype['summary'] = '';

/**
 * Unique integer identifying an organization.
 * @member {Number} organization
 */
Project.prototype['organization'] = undefined;

/**
 * Whether the UI should allow downloads for this project.
 * @member {Boolean} enable_downloads
 * @default true
 */
Project.prototype['enable_downloads'] = true;

/**
 * Unique integer identifying a bucket.
 * @member {Number} bucket
 */
Project.prototype['bucket'] = undefined;

/**
 * Unique integer identifying a bucket for uploads.
 * @member {Number} upload_bucket
 */
Project.prototype['upload_bucket'] = undefined;

/**
 * Unique integer identifying a bucket for backups.
 * @member {Number} backup_bucket
 */
Project.prototype['backup_bucket'] = undefined;

/**
 * S3 key of thumbnail used to represent the project.
 * @member {String} thumb
 */
Project.prototype['thumb'] = undefined;

/**
 * Datetime when this project was created.
 * @member {String} created
 */
Project.prototype['created'] = undefined;

/**
 * Number of files in the project.
 * @member {Number} num_files
 */
Project.prototype['num_files'] = undefined;

/**
 * Size of the project in bytes.
 * @member {Number} size
 */
Project.prototype['size'] = undefined;

/**
 * Total duration of all video in the project.
 * @member {Number} duration
 */
Project.prototype['duration'] = undefined;

/**
 * List of usernames of project members.
 * @member {Array.<String>} usernames
 */
Project.prototype['usernames'] = undefined;

/**
 * Permission level of user making request.
 * @member {String} permission
 */
Project.prototype['permission'] = undefined;






export default Project;
