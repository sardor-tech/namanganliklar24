import React from 'react';
import './covidpr.scss'
import C1 from './img/C1.png'
import C2 from './img/C2.png'
import C3 from './img/C3.png'
import C4 from './img/C4.png'

const Covidpr = () => {
    return (
       <section id="covid-part">
           <div className="container bg-light my-2">
               <div className="row d-flex justify-content-between p-3">
                   <div className="col  border-right border-danger px-1">
                       <div className="row d-flex align-items-center">
                           <div className="col-2">
                               <img src={C1} alt=""/>
                           </div>
                           <div className="col-10">
                               <h5>Коронавирус COVID-19
                                   в Узбекистане</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col ml-4 border-right border-danger ml-1  px-1">
                       <div className="row d-flex align-items-center">
                           <div className="col-2">
                               <img src={C2} alt=""/>
                           </div>
                           <div className="col-10">
                               <h6 className="text-danger">Инфицированы</h6>
                               <h4 className=""><b>2753</b></h4>
                           </div>
                       </div>
                   </div>
                   <div className="col border-right border-danger ml-1 px-1">
                       <div className="row d-flex align-items-center">
                           <div className="col-2">
                               <img src={C3} alt=""/>
                           </div>
                           <div className="col-10">
                               <h6 className="text-success">Выздоровели</h6>
                               <h4 className=""><b>2753</b></h4>
                           </div>
                       </div>
                   </div>
                   <div className="col ml-1 px-1">
                       <div className="row d-flex align-items-center">
                           <div className="col-2">
                               <img src={C4} alt=""/>
                           </div>
                           <div className="col-10">
                               <h6 className="text-success">Выздоровели</h6>
                               <h4 className=""><b>2753</b></h4>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Covidpr;