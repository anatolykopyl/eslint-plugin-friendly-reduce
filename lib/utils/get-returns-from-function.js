const traverse = require('eslint-traverse')

/**
 *
 * @param node {ArrowFunctionExpression | FunctionExpression | FunctionDeclaration}
 * @param context
 */
function getReturnsFromFunction(node, context) {
  if (!node.body)
    return []

  if (node.body.type === 'BlockStatement') {
    const returnStatements = []
    traverse(context, node, (path) => {
      if (path.node.type === 'ReturnStatement')
        returnStatements.push(path.node)
    })

    if (returnStatements.length)
      return returnStatements.map(returnStatement => returnStatement.argument)
  }
  else {
    return [node.body]
  }

  return []
}

module.exports = getReturnsFromFunction
