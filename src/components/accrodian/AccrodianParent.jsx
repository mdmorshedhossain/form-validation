import React, { useState } from 'react';
import AccrodianItem from './AccrodianItem';

const AccrodianParent = () => {
    const dataInfo = [
        { id: 1, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard " },
        { id: 2, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard " },
        { id: 3, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard" },
        { id: 4, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard " },
    ]
    const [openAccrodian, setOpenAccrodian] = useState(0);
    const handleAccrodian = accrodianNumber => {
        setOpenAccrodian(openAccrodian === accrodianNumber ? null : accrodianNumber)
    }


    return (
        <div>
            {
                dataInfo.map((data, index) =>
                    <AccrodianItem
                        dataProps={data}
                        indexProps={index}
                        openAccrodianProps={openAccrodian}
                        setOpenAccrodianProps={setOpenAccrodian}
                        handleAccrodianProps={handleAccrodian}
                    />)
            }
        </div>
    );
};

export default AccrodianParent;


// import React, { useState } from 'react';
// import AccrodianItem from './AccrodianItem';

// const AccrodianParent = () => {
//     const dataInfo = [
//         {id: 1, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard "},
//         {id: 2, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard "},
//         {id: 3, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard"},
//         {id: 4, title: "dd", desc: "dff loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard loremManage appointments, upload  your results ,reports ,medical history ,various vital signs, disease photos. Access health record dashboard "},
//     ]
//     const [openAccrodian, setOpenAccrodian] = useState(0);
//     const handleAccrodian = accrodianNumber => {
//         setOpenAccrodian(openAccrodian === accrodianNumber ? null : accrodianNumber)
//     }


//     return (
//         <div style={{disply: "flex", flexDirection: "column", alignItems: "center", textAlign: "left"}}>
//             {
//                 dataInfo.map((data, index) =>
//                 <AccrodianItem
//                 dataProps={data}
//                 indexProps={index}
//                 openAccrodianProps={openAccrodian}
//                 setOpenAccrodianProps={setOpenAccrodian}
//                 handleAccrodianProps={handleAccrodian}
//                 />)
//             }
//         </div>
//     );
// };

// export default AccrodianParent;