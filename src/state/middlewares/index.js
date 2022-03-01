export const logActions = store => next => actionInfo => {
    console.log(`Triggering redux ${actionInfo.type}`)
    next(actionInfo)
}