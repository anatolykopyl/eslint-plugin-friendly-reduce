function isReturnValue(node) {
  return node.parent.type === 'ReturnStatement' || node.parent.type === 'ArrowFunctionExpression'
}

module.exports = isReturnValue
