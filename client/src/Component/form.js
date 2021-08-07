import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import {createPosts,UpdatePost} from "../actions/post";
import useForm from "./useForm";

const CharacterForm = ({ CurrentId, SetCurrentId }) => {

    const { Character, handleSubmit, setCharacter } = useForm(CurrentId, SetCurrentId);
    const post = useSelector((state) => CurrentId ? state.posts.find((p) => p._id === CurrentId) : null);
    useEffect(() => {
        if (post) {
            console.log(post);
            setCharacter({ name:post.name, Abilities:post.Abilities, Race: post.Race, foto_name: "" });
               
        }
    }, [post]);
    return (
        <Formik
            enableReinitialize
            initialValues={Character}
            validationSchema={Yup.object({
                name: Yup.string().required("Name can't be blank"),
                Abilities: Yup.string().required("Abilities can't be blank"),
                Race: Yup.string().required("Race can't be blank")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values);
                setTimeout(() => {
                  setSubmitting(false);
                  setCharacter({ name:"", Abilities:"", Race:"", foto_name: "" });
                }, 2000);
              }}
        >
            {
                ({ values,handleSubmit, touched, errors,isSubmitting,dirty,setFieldValue, handleChange }) => (
                    <div className="border border-1 form_kısmı">
                        <div className="text-center fs-4">{CurrentId ? "Update Character" : "Create Character"}</div>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-column justify-content-center">
                                <div>
                                    <label htmlFor="title_input" className="form-label">Character Name</label>
                                    <input className="form-control" value={values.name} onChange={handleChange} name="name" type="text" id="title_input" />
                                    {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
                                </div>
                                <div>
                                    <label htmlFor="acıklama_input" className="form-label">Character Abilities</label>
                                    <input className="form-control" value={values.Abilities} onChange={handleChange} name="Abilities" type="text" id="acıklama_input" />
                                    {errors.Abilities && touched.Abilities && (
                                        <div className="input-feedback">{errors.Abilities}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="yönetmen_input" className="form-label">Character Race</label>
                                    <input className="form-control" value={values.Race}  onChange={handleChange} name="Race" type="text" id="yönetmen_input" />
                                    {errors.Race && touched.Race && (
                                        <div className="input-feedback">{errors.Race}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="foto_input" className="form-label">Character foto</label>
                                    <input className="form-control" onChange={(e)=>setFieldValue("file", e.currentTarget.files[0])} type="file"  name="foto_name" id="foto_input" />
                                </div>
                                <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-outline-secondary">Gönder</button>
                            </div>
                        </form>
                    </div>
                )
            }

        </Formik>
        // event => {
        //     // setCharacter({...Character,foto_name:event.target.value});
        //     // setFille(event.target.files[0]);
        // }}
        // <div className="border border-1 form_kısmı">
        //     <div className="text-center fs-4">{CurrentId ? "Update Character" : "Create Character"}</div>
        //     <form className="mt-5" onSubmit={handleSubmit}  >
        // <div className="d-flex flex-column justify-content-center">
        //     <div>
        //         <label htmlFor="title_input" className="form-label">Character Name</label>
        //         <input className="form-control"  value={Character.name} onChange={(e)=>handleChange(e)} name="name" type="text" id="title_input" />
        //     </div>
        //     <div>
        //         <label htmlFor="acıklama_input" className="form-label">Character Abilities</label>
        //         <input className="form-control" value={Character.Abilities} onChange={(e)=>handleChange(e)} name="Abilities" type="text" id="acıklama_input" />
        //     </div>
        //     <div>
        //         <label htmlFor="yönetmen_input" className="form-label">Character Race</label>
        //         <input className="form-control" value={Character.Race} onChange={(e)=>handleChange(e)} name="Race" type="text" id="yönetmen_input" />
        //     </div>
        //     <div>
        //         <label htmlFor="foto_input" className="form-label">Character foto</label>
        //         <input className="form-control"      onChange={event=>{
        //             // setCharacter({...Character,foto_name:event.target.value});
        //             handleChange(event);
        //             setFille(event.target.files[0]);
        //         }} type="file" value={Character.foto_name} name="foto_name" id="foto_input" />
        //     </div>
        //     <button type="submit" className="btn btn-outline-secondary">Gönder</button>
        // </div>
        //     </form>
        // </div>
    );
}
export default CharacterForm;