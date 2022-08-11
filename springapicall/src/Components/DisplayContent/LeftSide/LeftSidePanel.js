import React , { useEffect,useState }from 'react';
import "./LeftSide.css";
import RightSidePanel from '../RightSide/RightSidePanel';

function LeftSidePanel (props){ 
   
        
    const [isValue, setIsValue] = useState("0");
    const [iisValue, setIisValue] = useState("0");
    localStorage.setItem('Name', "fff");
    const handleOnChange = (e) => {
        let chek=e.target.checked;
        if(chek)
        {
            setIsValue(e.target.value);
            localStorage.setItem("name", e.target.value);
        }
        else
        {
            setIsValue("");  
            localStorage.setItem("name", "");        
        }
        
          //localStorage.setItem("name", isValue);
      };
      const asChange = (e) => {
        
        let cheek=e.target.checked;
        if(cheek)
        {
            setIisValue(e.target.value);
            localStorage.setItem("cheek", e.target.value);
        }
        else
        {
            setIisValue("");  
            localStorage.setItem("cheek", "");        
        }
      };
      
        return (
            <div className="LeftSize__main">
           
            <p> MODEL:{localStorage.getItem("name")}</p>
            
            <div className="leftSide__brandname">
                <label className="brandname">
                    <input type="checkbox" value="samsung" checked={isValue==="samsung"}  onChange={handleOnChange}/>samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="vivo"   checked={isValue==="vivo"} onChange={handleOnChange}/>vivo
                </label>
                <label className="brandname">
                    <input type="checkbox" value="redmi" checked={isValue==="redmi"} onChange={handleOnChange}/>redmi
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Apple" checked={isValue==="Apple"} onChange={handleOnChange}/>Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value=""   checked={isValue===""} onChange={handleOnChange}/>ALL
                </label>
            </div>
            <p> price:{localStorage.getItem("cheek")}</p>
            <div className="leftSide__brandname">
                
                <label className="brandname">
                    <input type="checkbox"  value="asc" checked={iisValue==="asc"}onChange={asChange}/>ascending
                </label>
                <label className="brandname">
                    <input type="checkbox"  value="dsc" checked={iisValue==="dsc"} onChange={asChange}/>decending
                </label>
                <h1>
                <button onClick={() => window.location.reload(false)}>Click here</button>
                </h1>
            </div>
        </div>
        );
    }

 
export default LeftSidePanel;