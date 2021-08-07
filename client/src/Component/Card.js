import "../Component-Styles/card.css"
import { useDispatch } from "react-redux";
import {DeletePost} from "../actions/post";
// D:\Kod\react\1-react-app\client\public\img\1627911235489-girl4.jpg
const Card = ({post,SetCurrentId}) => {
    const dispatch = useDispatch();

    // const DeletePost=(e)=>{
    //     e.preventDefault();
    //     console.log(props.post._id);
    //     dispatch(DeletePost(props.post._id))
    // }
    return (
        <div className="card border border-1 shadow">
            <img src={post.img} className="card-img-top imgg" alt="..." />
            <div className="card-body">
                <div className="card-title border-bottom border-3 d-flex justify-content-between">
                    <h5 className="m-0">{post.name}</h5>
                    <h5>Power:{post.Power}</h5>
                </div>
                <div className="card-text">
                    <p className="fw-light">Race:<span className="fw-lighter">{post.Race}</span></p>
                    <p>
                        Abilities:
                        <br />
                        {post.Abilities}
                    </p>
                </div>
            </div>
            <div className="card-footer d-flex  justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={()=>SetCurrentId(post._id)}>Update</button>
                <button className="btn btn-outline-danger" onClick={()=>dispatch(DeletePost(post._id)) }>Delete</button>
            </div>
        </div>
    );
}
export default Card;