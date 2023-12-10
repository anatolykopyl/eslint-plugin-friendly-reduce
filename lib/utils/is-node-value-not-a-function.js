'use strict';
const {isCallExpression} = require('./call-or-new-expression.js');
const isMethodCall = require('./is-method-call.js')
const isUndefined = require('./is-undefined.js')

// AST Types:
// https://github.com/eslint/espree/blob/master/lib/ast-node-types.js#L18
// Only types possible to be `argument` are listed
const impossibleNodeTypes = new Set([
	'ArrayExpression',
	'BinaryExpression',
	'ClassExpression',
	'Literal',
	'ObjectExpression',
	'TemplateLiteral',
	'UnaryExpression',
	'UpdateExpression',
]);

// Technically these nodes could be a function, but most likely not
const mostLikelyNotNodeTypes = new Set([
	'AssignmentExpression',
	'AwaitExpression',
	'LogicalExpression',
	'NewExpression',
	'TaggedTemplateExpression',
	'ThisExpression',
]);

const isNodeValueNotFunction = node => (
	impossibleNodeTypes.has(node.type)
	|| mostLikelyNotNodeTypes.has(node.type)
	|| isUndefined(node)
	|| (
		isCallExpression(node)
		&& !(isMethodCall(node, {
			method: 'bind',
			optionalCall: false,
			optionalMember: false,
		}))
	)
);

module.exports = isNodeValueNotFunction;