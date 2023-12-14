function isOnlyReturnInFunction(node) {
  if (node.type === 'ArrowFunctionExpression')
    return true
  if (node.parent.parent.type === 'FunctionDeclaration')
    return node.parent.body[0] === node && node.parent.body.length === 1
  if (node.parent.parent.type === 'FunctionExpression')
    return node.parent.body[0] === node && node.parent.body.length === 1
  if (node.parent.parent.type === 'ArrowFunctionExpression')
    return node.parent.body[0] === node && node.parent.body.length === 1
}

module.exports = isOnlyReturnInFunction
