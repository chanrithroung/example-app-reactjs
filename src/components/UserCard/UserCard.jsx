const UserCard = ({id, avatar_url, html_url, login}) => {
    return <article key={id} className="card cart" style={{width: "18rem"}}>
        <img src={avatar_url} className="card-img-top" alt={login} />
        <div className="card-body">
            <p>{login}</p>
            <a href={html_url} className="btn btn-primary">Open Profile</a>
        </div>
    </article>
}


export default UserCard;