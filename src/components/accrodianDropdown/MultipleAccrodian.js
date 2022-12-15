import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MultipleAccrodian.css';
import health_patient from '../../images/health_patient.png';
import electronic_acro from '../../images/electronic_acro.png';
import reports_acro from '../../images/reports_acro.png';
import news_views_acro from '../../images/news_views_acro.png';
import help_center_acro from '../../images/help_center_acro.png';
import webinars_acro from '../../images/webinars_acro.png';


const MultipleAccrodian = () => {
    

    const [electronicHealthRecords, setElectronicHealthRecords] = useState([
        {
            id: 1,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 2,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 3,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 4,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
    ]);
    const [webinars, setWebinars] = useState([
        {
            id: 1,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 2,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 3,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 4,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
    ]);
    const [reaserchAndReports, setReaserchAndReports] = useState([
        {
            id: 1,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 2,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 3,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 4,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
    ]);
    const [newsAndViews, setNewsAndViews] = useState([
        {
            id: 1,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 2,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 3,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 4,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
    ]);
    const [helpCenter, setHelpCenter] = useState([
        {
            id: 1,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 2,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 3,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
        {
            id: 4,
            title: "Advantage Patient Experience",
            images: health_patient,
        },
    ]);
    return (
        <div>
              {/* mulriple Accrodian  start */}
              <div className="row margin__top">
                        <div className="col-12">
                            <h3 className="text-center mb-2">
                                <span className="header__text">Resources of MacroHealthPlus</span>
                            </h3>
                            <div className="macro">
                                <h4 className="text-center mb-2">
                                    <span className="header__text inspiration__span"> Helpful practice management resources</span>
                                </h4>
                                <p className="header__description solution__macro">
                                    Access the latest news, white papers and resources to support your practice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 resources__macro">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item pt-0">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                                            <div className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <div className="d-flex accro__div">
                                                        <div className="accrodian__img">
                                                            <img src={electronic_acro} className="card-img-top" alt="images" />
                                                        </div>
                                                        <div className="accrodian__title">
                                                            <p>Educational Guide</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 accrodian__vhr">
                                                    <div className="accrodian__details">
                                                        <p>Learn how to use the Patient Portal and improve your health journey</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="row g-3 gx-sm-4 pt-3">
                                                {
                                                    electronicHealthRecords.length > 0 && electronicHealthRecords.map((item, id) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div class="card">
                                                                    <img src={item.images} className="card-img-top" alt="images" />
                                                                    <div class="card-body">
                                                                        <h6 className="card__title">{item.title}</h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="text-center pt-5 mb-3">
                                                <Link to="/educational-guides" type="text" className="btn__load__more">Load More</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <div className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <div className="d-flex accro__div">
                                                        <div className="accrodian__img">
                                                            <img src={reports_acro} className="card-img-top" alt="images" />
                                                        </div>
                                                        <div className="accrodian__title">
                                                            <p>Reaserch and Reports</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 accrodian__vhr">
                                                    <div className="accrodian__details">
                                                        <p>Download key reports, factsheets and helpful guides that deep-dive into key health and technical treatment issues.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="row g-3 gx-sm-4 pt-3">
                                                {
                                                    reaserchAndReports.length > 0 && reaserchAndReports.map((item, id) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div class="card">
                                                                    <img src={item.images} className="card-img-top" alt="images" />
                                                                    <div class="card-body">
                                                                        <h6 className="card__title">{item.title}</h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="text-center pt-5 mb-3">
                                                <Link to="/research-reports" type="text" className="btn__load__more">Load More</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <div className="d-flex accro__div">
                                                        <div className="accrodian__img">
                                                            <img src={news_views_acro} className="card-img-top" alt="images" />
                                                        </div>
                                                        <div className="accrodian__title">
                                                            <p>News And Views</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 accrodian__vhr">
                                                    <div className="accrodian__details">
                                                        <p>Discover our information hub covering everything from clinical insights, practice growth tips, to the future of cloud systems and health.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="row g-3 gx-sm-4 pt-3">
                                                {
                                                    newsAndViews.length > 0 && newsAndViews.map((item, id) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div class="card">
                                                                    <img src={item.images} className="card-img-top" alt="images" />
                                                                    <div class="card-body">
                                                                        <h6 className="card__title">{item.title}</h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="text-center pt-5 mb-3">
                                                <Link to="/news-and-views" type="text" className="btn__load__more">Load More</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <div className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <div className="d-flex accro__div">
                                                        <div className="accrodian__img">
                                                            <img src={help_center_acro} className="card-img-top" alt="images" />
                                                        </div>
                                                        <div className="accrodian__title">
                                                            <p>Help Center</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 accrodian__vhr">
                                                    <div className="accrodian__details">
                                                        <p>Our Help Centre gives you clear, technical guidance, tips and step-by-step instructions to help you make the most of MHP</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="row g-3 gx-sm-4 pt-3">
                                                {
                                                    helpCenter.length > 0 && helpCenter.map((item, id) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div class="card">
                                                                    <img src={item.images} className="card-img-top" alt="images" />
                                                                    <div class="card-body">
                                                                        <h6 className="card__title">{item.title}</h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="text-center pt-5 mb-3">
                                                <Link to="/help-centre" type="text" className="btn__load__more">Load More</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            <div className="row">
                                                <div className="col-4 d-flex align-items-center">
                                                    <div className="d-flex accro__div">
                                                        <div className="accrodian__img">
                                                            <img src={webinars_acro} className="card-img-top" alt="images" />
                                                        </div>
                                                        <div className="accrodian__title">
                                                            <p>Webinars</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 accrodian__vhr">
                                                    <div className="accrodian__details">
                                                        <p>Discover our virtual events and learning modules covering the latest clinical, practice management and health technology issues. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div className="row g-3 gx-sm-4 pt-3">
                                                {
                                                    webinars.length > 0 && webinars.map((item, id) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div class="card">
                                                                    <img src={item.images} className="card-img-top" alt="images" />
                                                                    <div class="card-body">
                                                                        <h6 className="card__title">{item.title}</h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="text-center pt-5 mb-3">
                                                <Link to="/webinars" type="text" className="btn__load__more">Load More</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mulriple Accrodian end */}

        </div>
    );
};

export default MultipleAccrodian;