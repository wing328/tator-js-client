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
 * The Color model module.
 * @module model/Color
 * @version 0.0.5
 */
class Color {
    /**
     * Constructs a new <code>Color</code>.
     * RGB array, RGBA array, or hex string.
     * @alias module:model/Color
     * @param {(module:model/String|module:model/[Number])} The actual instance to initialize Color.
     */
    constructor(obj = null) {
        this.actualInstance = obj;
    }

    /**
     * Constructs a <code>Color</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Color} obj Optional instance to populate.
     * @return {module:model/Color} The populated <code>Color</code> instance.
     */
    static constructFromObject(data, obj) {
        if (!data) {
            return new Color();
        }
        var match = 0;
        var errorMessages = [];
        // RGB three element array with values 0-255.
        try {
            // validate array data type
            if (!Array.isArray(data)) {
                throw new Error("Invalid data type. Expecting array. Data: " + data);
            }
            if (data.length > 3 || data.length < 3) {
                throw new Error("Invalid array size. Minimim: 3. Maximum: 3. Data: " + data);
            }
            // validate array of integer
            for (const item of data) {
                if (!(typeof item === 'number' && item % 1 === 0)) {
                    throw new Error("Invalid array items. Must be integer. Data: " + data);
                }
                if (item > 255 || item < 0) {
                    throw new Error("Invalid integer value in an array items. Max.: 255. Min.: 0. Data: " + data);
                }
            }
            obj = new Color(data);
            match++;
        } catch(err) {
            // json data failed to deserialize into [Number]
            errorMessages.push("Failed to construct [Number]: " + err)
        }

        // RGBA four element array with values 0-255.
        try {
            // validate array data type
            if (!Array.isArray(data)) {
                throw new Error("Invalid data type. Expecting array. Data: " + data);
            }
            if (data.length > 4 || data.length < 4) {
                throw new Error("Invalid array size. Minimim: 4. Maximum: 4. Data: " + data);
            }
            // validate array of integer
            for (const item of data) {
                if (!(typeof item === 'number' && item % 1 === 0)) {
                    throw new Error("Invalid array items. Must be integer. Data: " + data);
                }
                if (item > 255 || item < 0) {
                    throw new Error("Invalid integer value in an array items. Max.: 255. Min.: 0. Data: " + data);
                }
            }
            obj = new Color(data);
            match++;
        } catch(err) {
            // json data failed to deserialize into [Number]
            errorMessages.push("Failed to construct [Number]: " + err)
        }

        // Hex color string, such as #00FF00.
        try {
            // validate array of string
            if (!(typeof data === 'string')) {
                throw new Error("Invalid data. Must be string. Data: " + JSON.stringify(data));
            }
            if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(data)) {
                throw new Error("Invalid string value in an array items. Must conform to /^#(?:[0-9a-fA-F]{3}){1,2}$/. Data: " + JSON.stringify(data));
            }
            if (data.length > 7 && data.length < 7) {
                throw new Error("Invalid string value in an array items. Max. length: 7. Min. length: 7. Data: " + JSON.stringify(data));
            }
            obj = new Color(data);
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `Color` with oneOf schemas String, [Number]. JSON data: " + JSON.stringify(data));
        } else if (match === 0) {
            throw new Error("No match found constructing `Color` with oneOf schemas String, [Number]. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            return obj;
        }
    }

    /**
     * Gets the actaul instance, which can be <code>String</code>, <code>[Number]</code>.
     * @return {(module:model/String|module:model/[Number])} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actaul instance, which can be <code>String</code>, <code>[Number]</code>.
     * @param {(module:model/String|module:model/[Number])} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = Color.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual intance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

}


Color.OneOf = ["String", "[Number]"];

export default Color;
