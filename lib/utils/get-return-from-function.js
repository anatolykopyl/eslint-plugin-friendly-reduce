/**
 *
 * @param node {ArrowFunctionExpression | FunctionExpression | FunctionDeclaration}
 */
function getReturnFromFunction(node) {
  if (!node.body) {
    return null
  }

  if (node.body.type === 'BlockStatement') {
    const returnStatement = node.body.body.find(statement => statement.type === 'ReturnStatement');

    if (returnStatement) {
      return returnStatement.argument;
    }
  } else {
    return node.body;
  }

  return null;
}

module.exports = getReturnFromFunction;
