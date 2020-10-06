
export function print(object) {
    console.log(object)
}

export function print(object1, object2) {
    console.log(object1, object2)
}

export function print(object1, object2, object3) {
    console.log(object1, object2, object3)
}

export function type(parameter) {
    if (typeof parameter == "number") {
        return "<class 'number'>"
    }
    else if (typeof parameter == "string") {
        return "<class 'string'>"
    }
    else if (typeof parameter == "object") {
        return "<class 'object'>"
    }
    else if (typeof parameter == "undefined") {
        return "<class 'undefined_variable'>"
    }
    else if (typeof parameter == "boolean") {
        return "<class 'boolean'>"
    }
    else if (typeof parameter == "function") {
        return "<function 'function'>"
    }
    else if (typeof parameter == "symbol") {
        return "<class 'symbol'>"
    }
    return "<class 'None'>"
}