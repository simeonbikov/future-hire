import React from "react";
import "./SearchBar.css";


function SearchBar(props) {
    const handleSearch = (e) =>{
        e.preventDefault();
        if(e.target.value === ""){
            props.filterSearch(props.graduate);
        } else {
            props.filterSearch(props.graduate.filter((student)=>
            student.full_name.toLowerCase().includes(e.target.value.toLowerCase())
            ));
        }
    };
  return (
    <div className="SearchBar">
        <input className="sBar" type="search"  placeholder="Search Graduate" onChange={handleSearch}
        />

    </div>
  );
}

export default SearchBar;
