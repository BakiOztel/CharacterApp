import { useSelector } from "react-redux";
import Card from "./Card";
const Posts = ({SetCurrentId}) => { 
    const card = useSelector(state => state.posts);
    return (

        <div className="col-lg-8 col-md-6 col-sm-4">
            <div className="row gy-2">
                { 
                    card.map((post)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 card-div">
                            <Card post={post} key={post._id}SetCurrentId={SetCurrentId}  />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Posts;