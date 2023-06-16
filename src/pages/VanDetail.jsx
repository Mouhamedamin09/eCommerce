import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams(); //get the search bar id that after vans '/vans/whatever id is here'
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));       //fetch the data and save in the van variable
  }, [params.id]);
  

  return (
    //make the design of the details here
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="Van" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        //if the data not is loading display the  loding logo
        <div className="loding-container">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
