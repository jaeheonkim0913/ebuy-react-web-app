import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { findAllLikesThunk } from "../../../services/items/items-thunks";
import ItemPreviewList from "../../item-preview-list";

const BuyerProfilePublic = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <>
      <div className="ps-5 pe-5">
        <div class="row">
          <div href="profile" className="col-1 wd-fill rounded-circle position-relative" style={{ width: "100px", height: "100px", backgroundColor: "gray"}}>
            <img  src={currentUser.avatar} alt="img"/>
          </div>
          <span className="col" style={{fontSize: "50px"}}>{currentUser.username}</span>
          <div className="col-6"><RoleTag role={currentUser.role} /></div>
          <div className="col"><EditProfileButton /></div>
        </div>
        <UserInfo user={currentUser} />
        <hr/>
        <LikedItems user={currentUser} />
      </div>
    </>
  )
}

const RoleTag = () => {
    return (
        <>
            <div className="rounded">
                <span className="rounded border border-success text-success p-1 ps-3 pe-3">Buyer</span>
            </div>
        </>
    )
}

const EditProfileButton = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/profile/edit-profile');
    }
    return (
        <>
            <button className="col btn btn-primary rounded-pill float-end" onClick={onClick}>
                Edit profile
            </button>
        </>
    )
}

const UserInfo = ({user}) => {
    return (
        <>
            <div className="mt-3">
                <h4>Email: {user.email}</h4>
                <h4>Cell: {user.phoneNumber}</h4>
                <h4>Address: {user.address}</h4>
            </div>
        </>
    )
}

const LikedItems = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recentLikes } = useSelector((state) => state.items);
  const handleSeeAllClick = () => {
    dispatch(findAllLikesThunk(user.likes));
    navigate("/profile/buyer/all-likes")
  }
  return (
      <>
          <div>
              <div className="row">
                  <b className="col wd-text-align-left">Liked items</b>
                  <b className="col wd-text-align-right" onClick={handleSeeAllClick}>See all</b>
              </div>
              <ItemPreviewList items={recentLikes}/>
          </div>
      </>
  )
}

export default BuyerProfilePublic;