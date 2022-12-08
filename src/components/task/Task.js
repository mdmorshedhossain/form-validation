import React from 'react';
import { useState } from 'react';
import "./styles.css";

const Task = () => {
    const inputArr = [
        {
            type: "text",
            id: 1,
            value: "",
        }
    ];

    const [arr, setArr] = useState(inputArr);

    // const addInput = () => {
    //     setArr(s => {
    //         return [
    //             ...s,
    //             {
    //                 type: "text",
    //                 value: ""
    //             }
    //         ];
    //     });
    // };


    const addInput = () => {
        setArr(
            [
                ...arr,
                {
                    type: "text",
                    value: "",
                    id: (arr.length + 1),
                }
            ]
        );
    };

    const handleChange = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;
            return newArr;
        });
    };

    return (
        <div className="container pt-5 mb-5">
            <div className="contact__us">
                <div className="row g-3">
                    <div className="col-6">
                        <div className="row g-3 mb-3 d-flex justify-content-end">
                            <div className="col-sm-3">
                                <p for="NoOfTextbox" className="form__label">No. Of Textbox:</p>
                            </div>
                            <div className="col-sm-4">
                                <p className="form-control form-control-sm">{arr.length}</p>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <button type="text" className="btn btn__contact float-end" onClick={addInput}>Add Textbox</button>
                            </div>
                            <div className="col-sm-12">
                                <div className="row g-3 d-flex justify-content-end">
                                    <div className="col-sm-4">
                                        <div className="form-check">
                                            <input className="form-check-input" id="exampleCheck1"
                                                type="checkbox"
                                            />
                                            <p className="form__label">All Check</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                {arr.map((item, i) => {
                                    return (
                                        <>
                                            <div className="row g-3 mb-3 d-flex justify-content-end">
                                                <div className="col-sm-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" id="exampleCheck1"
                                                            type="checkbox"
                                                        />
                                                        <input
                                                            for="exampleCheck1"
                                                            placeholder={`Write a price ${item.id}`}
                                                            className="form-control form-control-sm form__control__sm"
                                                            onChange={handleChange}
                                                            value={item.value}
                                                            id={i}
                                                            type={item.type}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <label for="OutputIs" className="col-sm-2 col-form-label col-form-label-sm">Output is: </label>
                            <div className="col-sm-6">
                                <label id="OutputIs" className="w-100 form__output">Selected </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Task;