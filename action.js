export const adduser = (data) => {
    return {
        type : "add",
        payload : data
    }
}
export const deleteuser = (id) => {
    return {
        type : "delete",
        payload : id
    }
}