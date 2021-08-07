import * as api from "../api/index";

export const getPosts=()=> async (dispatch)=>{
    
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:"FETCH_ALL",payload:data }); 
        console.log("işlem oldu");
    } catch (error) {
        console.log(error.message);
    }
}
export const createPosts=(posts)=> async (dispatch) =>{
     
    try {
           const {data} = await api.CrreatePosts(posts);
           dispatch({type:"CREATE",payload:data});
    } catch(error){
       console.log(error);
    }
}
export const DeletePost=(id)=> async (dispatch)=>{
    try{
        await api.DeletePosts(id);
        dispatch({type:"DELETE",payload:id})
    } catch(err){
        console.log(err);
    }
}
export const UpdatePost=(id,post) => async (dispatch)=>{
    try{
        const {data}=await api.UpdatePosts(id,post);
        dispatch({type:"UPDATE",payload:data});
    }catch(error){
        console.log(error);
    }
}