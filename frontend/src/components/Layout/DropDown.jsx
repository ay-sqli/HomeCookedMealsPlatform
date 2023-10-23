import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="flex  flex-col items-start p-4 drop-shadow-lg bg-[#fff]  absolute z-50 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} hover:bg-gray-200 w-56 rounded-md`}
            onClick={() => submitHandle(i)}
          >
          <img 
          src={i.imageUrl}  
              style={{
                width: "65px",
                height: "65px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt={i.title}
            />
            <h3 className="m-5 font-semibold text-xl cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
