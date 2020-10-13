/**
 * @fileoverview Checks that promises are not stored in global variables
 * @author Kalev Alpernas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/promise-local-handling"),

    RuleTester = require("eslint").RuleTester;


const parserOptions = {
    ecmaVersion: 2019,
    // sourceType: 'module'
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({parserOptions});
ruleTester.run("promise-local-handling", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "async function foo () { globalVar = Promise.resolve(42) }",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
