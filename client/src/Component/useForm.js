import {useState} from "react";
import {createPosts,UpdatePost} from "../actions/post";
import { useDispatch } from "react-redux";

const useForm=(CurrentId,SetCurrentId)=> {

    const dispatch =useDispatch();
    const [Character,setCharacter]=useState({
      name:"",Abilities:"",Race :"",foto_name:"",file:null
    });
    const handleSubmit = (values) => {
        const data = new FormData();
        for (var key in values) {
            data.append(key, values[key]);
        }
        console.log(values);
        if (CurrentId) {
            dispatch(UpdatePost(CurrentId, data));
            SetCurrentId(null);
        } else {
            dispatch(createPosts(data));
        }
    
    }

    return {Character,handleSubmit,setCharacter};
};

export default useForm;
