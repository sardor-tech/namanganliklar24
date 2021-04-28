import React from 'react';
import './nav-header.scss'
import './for-nav.css'
import Search from './img/search.svg'
import Russian from './img/Group.png'
import Telegram from './img/telegram.png'
import Add from './img/add.png'
import {Link} from "react-router-dom";
import Body from "../ready-part/Body";

const NavHeader = () => {
    return (

           <section id="nav-header">
               <div className="container">
                   <div className="row py-3">
                       <div className="col-6">
                           <div className="row d-flex align-items-center">
                               <div className="col-6">
                                   <Link to='/'><h4 className="logo-color"><b>NAMANGANLIKLAR24</b></h4></Link>
                               </div>
                               <div className="col-2 d-flex align-items-center">
                                   <h5 className="dollar ml-2">$</h5>
                                   <h6 className="ml-1 text-secondary">10137.2</h6>
                               </div>
                               <div className="col-2 d-flex align-items-center">
                                   <h5 className="ruble ml-2">P</h5>
                                   <h6 className="ml-1 text-secondary">10137.2</h6>
                               </div>
                               <div className="col-2 d-flex align-items-center">
                                   <h5 className="evro ml-2">E</h5>
                                   <h6 className="ml-1 text-secondary">10137.2</h6>
                               </div>
                           </div>

                       </div>
                       <div className="col-6">
                           <div className="row d-flex ">
                               <div className="offset-6 d-flex justify-content-between">

                               </div>
                               <div className="col-6">
                                   <div className="row d-flex align-items-center ">
                                       <div className="col-2 d-flex justify-content-center bg-white">
                                           <button className="btn bg-white shadow-none"><img  src={Search} alt=""/></button>
                                       </div>
                                       <div className="col-4 d-flex   align-items-center">
                                           <button className="btn btn-block d-flex shadow-none bg-white" type="button">  <img className="border rounded" src={Russian} alt=""/>
                                               <h6 className="mt-1 ml-1">RU</h6></button>
                                       </div>
                                       <div className="col-6  ">
                                           <button  className="d-flex align-items-center pl-1 ml-0 btn btn-primary btn-block shadow-none" type="button"><img className="w-100" src={Telegram}
                                                                                                                                                             alt=""/> Подписатся
                                           </button>

                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row my-2 d-flex justify-content-between p-2 bg-white ">
                       <div className="col "><Link to="/uz" className="text-dark"><h6>Узбекистан</h6></Link></div>
                       <div className="col pl-5 "><a className="text-dark" href="#"><h6>Мир</h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Экономика </h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6> Политика </h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6> Общество</h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Технологии</h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Спорт </h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Культура</h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Происшествия </h6></a></div>
                       <div className="col "><a className="text-dark" href="#"><h6>Туризм </h6></a></div>
                   </div>
                   <div className="row my-2">
                       <img className="w-100 h-100" src={Add} alt=""/>
                   </div>

               </div>
           </section>



    );
};

export default NavHeader;