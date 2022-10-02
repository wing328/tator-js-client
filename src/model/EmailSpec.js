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
import EmailAttachmentSpec from './EmailAttachmentSpec';

/**
 * The EmailSpec model module.
 * @module model/EmailSpec
 * @version 0.0.5
 */
class EmailSpec {
    /**
     * Constructs a new <code>EmailSpec</code>.
     * Send an email message to members of the project using the Tator configured AWS email service
     * @alias module:model/EmailSpec
     * @param recipients {Array.<String>} Recipients of the email message. They must be members of this project. Entries are either in \"Name <email@email.com>\" or \"email@email.com\" format
     * @param subject {String} Subject of the email message
     * @param text {String} Text body of the email message. HTML is currently not supported.
     */
    constructor(recipients, subject, text) { 
        
        EmailSpec.initialize(this, recipients, subject, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipients, subject, text) { 
        obj['recipients'] = recipients;
        obj['subject'] = subject;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>EmailSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailSpec} obj Optional instance to populate.
     * @return {module:model/EmailSpec} The populated <code>EmailSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSpec();

            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], ['String']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [EmailAttachmentSpec]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['recipients'])) {
            throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        if (data['attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attachments'])) {
                throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
            }
            // validate the optional field `attachments` (array)
            for (const item of data['attachments']) {
                EmailAttachmentSpec.validateJsonObject(item);
            };
        }

        return true;
    }


}

EmailSpec.RequiredProperties = ["recipients", "subject", "text"];

/**
 * Recipients of the email message. They must be members of this project. Entries are either in \"Name <email@email.com>\" or \"email@email.com\" format
 * @member {Array.<String>} recipients
 */
EmailSpec.prototype['recipients'] = undefined;

/**
 * Subject of the email message
 * @member {String} subject
 */
EmailSpec.prototype['subject'] = undefined;

/**
 * Text body of the email message. HTML is currently not supported.
 * @member {String} text
 */
EmailSpec.prototype['text'] = undefined;

/**
 * S3 object(s) to send as attachment(s). Ensure the attachment size does not exceed the corresponding email service limits
 * @member {Array.<module:model/EmailAttachmentSpec>} attachments
 */
EmailSpec.prototype['attachments'] = undefined;






export default EmailSpec;

