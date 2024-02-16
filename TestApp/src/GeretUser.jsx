const HeloUser = ({name,color,message}) => {
    return (
        <>
        <h1 style={color}>{name}   {message}</h1>
        </>
    );
}
export default HeloUser; 