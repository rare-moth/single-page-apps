import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Header from "./header";

const ItemList = ({ result }) =>
  <main>
    <Header />
    <div className="img--viewer">
      {result.length
        ? result.map(item =>
            <LazyLoad height={200} key={item.id}>
              <Link to={`/${item.id}`}>
                <div className="img--holder" id={item.id}>
                <div className="img--shadow">
                  <h2 className="img--id">
                    #{item.id}
                  </h2>               
                  <img className="img-circle" src={item.thumbnailUrl} />
                </div>
                </div>
              </Link>            
            </LazyLoad>
          )
        : <h2>Loading...</h2>}
      </div>
  </main>;

export default ItemList;
