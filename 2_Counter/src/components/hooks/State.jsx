export const State = () => {
    let value =0;
    const handleButtonClick =() =>{
        value++;
        console.log(value);
        
    }
    return(
        <>
        <h1>{value}</h1>
        <button onClick={handleButtonClick}>Increement</button>
        </>
    );
};