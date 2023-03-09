export type Action ={type:"ADD_TOKEN"}

export const addToken = (token: string) => ({
    type: "ADD_TOKEN",
    payload: token
})


