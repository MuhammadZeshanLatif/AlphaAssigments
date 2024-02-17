const HeloUser = ({name,color,message}) => {
    return (
        <>
        <h1 style={color}>{name}   {message}</h1>
        </>
    );
}
const Amazoncards=({title,name,imp,oldPrice,newPrice,idx})=>{
    return(
        <>
        {/* <h1>Blogbuster deals on computer accosories</h1> */}
        <div className="card">
            <h3>{title}</h3>
            <p>{name}</p>
            <p>{imp}</p>
            <p>{oldPrice[idx]} {newPrice[idx]}</p>
        </div>
        </>
    )

}
export  {HeloUser,Amazoncards}; 