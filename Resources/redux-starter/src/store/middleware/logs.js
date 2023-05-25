const log = (store) => (next) => (action) => {
    console.log(store);
    console.log(next);
    console.log(store);
    next(action);
}

export default log;