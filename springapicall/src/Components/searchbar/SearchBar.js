import React, { useState } from "react";
import "./SearchBar.css";
import DownloadDoneTwoToneIcon from '@mui/icons-material/DownloadDoneTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function SearchBar({ placeholder,data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [bookid, setbookid] = useState("");
  const handleFilter = (event) => {
      const searchWord= event.target.value
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
         setbookid(value.bookid);
        return value.bookname.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
        {filteredData.length === 0 ? (
            <DownloadDoneTwoToneIcon/>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
        { filteredData.slice(0, 15).map((value,key) =>{
           return (<Link to={'/Searchorder/'+value.bookname}  style={{textDecoration: 'none' ,color: 'black'}}>
                <a classname="dataItem" >
                <p>{value.bookname} </p>
                </a></Link>
            );
            } )}
        </div>
        )}
    </div>
  );
}

export default SearchBar;