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
 * The AlgorithmParameterValue model module.
 * @module model/AlgorithmParameterValue
 * @version 0.0.5
 */
class AlgorithmParameterValue {
    /**
     * Constructs a new <code>AlgorithmParameterValue</code>.
     * Value of algorithm parameter
     * @alias module:model/AlgorithmParameterValue
     * @param {(module:model/Number|module:model/String)} The actual instance to initialize AlgorithmParameterValue.
     */
    constructor(obj = null) {
        this.actualInstance = obj;
    }

    /**
     * Constructs a <code>AlgorithmParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmParameterValue} obj Optional instance to populate.
     * @return {module:model/AlgorithmParameterValue} The populated <code>AlgorithmParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (!data) {
            return new AlgorithmParameterValue();
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate array of string
            if (!(typeof data === 'number' && data % 1 != 0)) {
                throw new Error("Invalid array items. Must be number. Data: " + JSON.stringify(data));
            }
            obj = new AlgorithmParameterValue(data);
            match++;
        } catch(err) {
            // json data failed to deserialize into Number
            errorMessages.push("Failed to construct Number: " + err)
        }

        try {
            // validate array of string
            if (!(typeof data === 'string')) {
                throw new Error("Invalid data. Must be string. Data: " + JSON.stringify(data));
            }
            obj = new AlgorithmParameterValue(data);
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `AlgorithmParameterValue` with oneOf schemas Number, String. JSON data: " + JSON.stringify(data));
        } else if (match === 0) {
            throw new Error("No match found constructing `AlgorithmParameterValue` with oneOf schemas Number, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            return obj;
        }
    }

    /**
     * Gets the actaul instance, which can be <code>Number</code>, <code>String</code>.
     * @return {(module:model/Number|module:model/String)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actaul instance, which can be <code>Number</code>, <code>String</code>.
     * @param {(module:model/Number|module:model/String)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = AlgorithmParameterValue.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual intance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

}


AlgorithmParameterValue.OneOf = ["Number", "String"];

export default AlgorithmParameterValue;

