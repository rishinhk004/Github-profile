import React from "react"
import Avatar from "./Avatar"


const DisplayCard = ({ data, repositories }) => {

    const Length = repositories.length;

    return (
        <div className="card">
            <div className="top">
                <h2 className="name"> Username : {data.login}</h2>
                <h3 className="name"> Fullname : {data.name}</h3>
                <Avatar img={data.avatar_url} />
            </div>
            <div className="bottom">
                <p className="info">Bio: {data.bio}</p>
                <p className="info">Location: {data.location}</p>
                <p className="info">Followers: {data.followers}</p>
                <p className="info">Folllowing: {data.following}</p>
                <p className="info">No of Repos: {Length}</p>
                <a
                    href={data.html_url}
                    target="-blank" class="button">Github Profile
                </a>


            </div>
        </div>
    );
};

export default DisplayCard;