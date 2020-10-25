const createActionType = (actionName, page = '@Global') => ['REQUEST', 'SUCCESS', 'ERROR'].reduce((actionType, status) => ({
  ...actionType,
  [status]: `${page}/${actionName}_${status}`
}), {})

export default createActionType
