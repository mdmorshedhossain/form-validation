import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const AccrodianItem = ({dataProps, indexProps, handleAccrodianProps, openAccrodianProps, setOpenAccrodianProps}) => {

    return (
        <div className="container">
            <div onClick={() => handleAccrodianProps(indexProps)}  className="d-flex justify-content-between prm__btn">
                <p>{dataProps.title}</p>
                <p><FontAwesomeIcon icon={openAccrodianProps === indexProps ? faMinus : faPlus} /></p>
            </div>
            <p style={openAccrodianProps === indexProps ? accroOpen : accroClose} className="header__description px-2">{dataProps.desc}</p>
        </div>
    );
};

export default AccrodianItem;

const accroOpen = {
    margin: "1px, auto",
    height: "100%",
}
const accroClose = {
    margin: "1px, auto",
    height: "0px",
    overflow: "hidden",
}


// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// const AccrodianItem = ({dataProps, indexProps, handleAccrodianProps, openAccrodianProps, setOpenAccrodianProps}) => {

//     return (
//         <div style={{width: "400px"}}>
//             <div onClick={() => handleAccrodianProps(indexProps)}  className="d-flex justify-content-between prm__btn">
//                 <p>{dataProps.title}</p>
//                 <p><FontAwesomeIcon icon={openAccrodianProps === indexProps ? faMinus : faPlus} /></p>
//             </div>
//             <p style={openAccrodianProps === indexProps ? accroOpen : accroClose} className="header__description px-2">{dataProps.desc}</p>
//         </div>
//     );
// };

// export default AccrodianItem;

// const accroOpen = {
//     margin: "1px, auto",
//     height: "100%",
// }
// const accroClose = {
//     margin: "1px, auto",
//     height: "0px",
//     overflow: "hidden",
// }
