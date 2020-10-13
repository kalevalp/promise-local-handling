/**
 * @fileoverview Checks that promises are not stored in global variables
 * @author Kalev Alpernas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Checks that promises are not stored in global variables",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        // console.log(context);
        // console.log(this);

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Identifier": (node) => {
                if (node.name === "Promise") {
                    console.log(node);
                }
            },

            "AssignmentExpression": (node) => {

            }
            // "*" : (...params) => console.log(params),
            // give me methods

        };
    }
};
