import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';  // Go up two levels to src

const FilterCategory = (props) => {
  return (
      <div className="card mb-3 accordion glass-card fade-in">
        {/* Added fade-in class here */}
        <div
            className="card-header fw-bold text-uppercase accordion-icon-button"
            data-bs-toggle="collapse"
            data-bs-target="#filterCategory"
            aria-expanded="true"
            aria-controls="filterCategory"
        >
          Categories
        </div>
        <ul
            className="list-group list-group-flush show"
            id="filterCategory"
        >
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Clothing
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Leather Bag
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Trausers
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Sweater & Cardigans
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              High Heels
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Coats & Jackets
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default FilterCategory;
