import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../data/data";

function ProjectCardFilter() {
  const [items, setItem] = useState(data);
 
  const filterItem = (catagoryitem) => {
    const updateItem = data.filter((curentelement) => {
      return curentelement.category === catagoryitem;
    });

    setItem(updateItem);
  };

  const initialState = { statementActive: "" };
  function reducer(state, action) {
    switch (action.type) {
      case "dataAll":
        setItem(data);
      
        return { statementActive: "dataAll" };
      case "smm":
        filterItem("smm");
        return { statementActive: "smm" };
      case "web":
        filterItem("web");
        return { statementActive: "web" };
      case "Graphic":
        filterItem("Graphic");
        return { statementActive: "Graphic" };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <ul className="isotope-menu">
            <li
              onClick={() => dispatch({ type: "dataAll" })}
              className={state.statementActive === "dataAll" ? "active" : ""}
            >
              All
            </li>
            <li
              onClick={() => dispatch({ type: "smm" })}
              data-filter=".smm"
              className={state.statementActive === "smm" ? "active" : ""}
            >
              Social Media Managment
            </li>
            <li
              onClick={() => dispatch({ type: "web" })}
              data-filter=".web"
              className={state.statementActive === "web" ? "active" : ""}
            >
              Web Design
            </li>
            
          </ul>
        </div>
      </div>
      <div className="row g-4 project-items d-flex">
        {items.map((element) => {
          const { title, image, id, details } = element;
          return (
            <div key={id} className="col-md-6 col-lg-4 single-item">
              <div className="item-img">
                <Link to={`${process.env.PUBLIC_URL}/project`}>
                  <img src={image} alt="images" />
                </Link>
              </div>
              <div className="item-inner-cnt">
                <span>{title}</span>
                <h4>{details}</h4>
                <div className="view-btn">
                  <Link to={`${process.env.PUBLIC_URL}/project-details`}>
                    shiko detajet
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCardFilter;
