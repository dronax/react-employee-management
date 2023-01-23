export const addemp=(data)=>{
    return{
    type:'add',
    payload:data
    }

}
export const delemp=(data)=>{
    return{
        type:'delete',
        payload:data
    }
}
export const editemp=(data)=>{
    return{
        type:'edit',
        payload:data
    }
}

