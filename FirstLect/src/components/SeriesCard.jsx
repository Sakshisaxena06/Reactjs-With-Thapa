 export const SeriesCard = ({curElem}) => {
    const { name, img_url, rating, watch_url } = curElem;

     return (
  
        <li >
          <div>
            <img src={curElem.img_url} alt={curElem.name} />
          </div>
          <h2>Name: {curElem.name}</h2>
          <h3>Rating: {curElem.rating}</h3>
          <a 
            href={curElem.watch_url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button>Watch Now</button>
          </a>
        </li>
    
  
  );
}

export default SeriesCard;