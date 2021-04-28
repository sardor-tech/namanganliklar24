import React from 'react';
import './cartPart.scss'
import Photo1 from './img/CartPhoto (1).jpg'
import Photo2 from './img/CartPhoto (2).jpg'
import Photo3 from './img/CartPhoto (3).jpg'
import Photo4 from './img/CartPhoto (4).jpg'
import Photo5 from './img/CartPhoto (5).jpg'
import Photo6 from './img/CartPhoto (6).jpg'

const CartPart = () => {
    return (
       <section id="cart-part">
           <div className="container">
               <div className="row my-2">
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo1} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="">Итоги второго месяца карантина</h6>
                               <div className="d-flex align-items-center justify-content-start text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo2} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="">Выявлено еще 7 случаев коронавируса</h6>
                               <div className="d-flex align-items-center justify-content-start  text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo3} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="">Следствие проверяет четыре версии
                                   прорыва Сардобинской плотины</h6>
                               <div className="d-flex align-items-center justify-content-start text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo4} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="">Обмелевшая Сардоба: стихия или
                                   человеческий фактор?</h6>
                               <div className="d-flex align-items-center justify-content-start text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo5} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="">Карантин в Узбекистане продлен до 1 июня</h6>
                               <div className="d-flex align-items-center justify-content-start text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className="col-4">
                       <div className="card w-100 border-0">
                           <div className="card-header p-0">
                               <img className="w-100" src={Photo6} alt=""/>
                           </div>
                           <div className="card-footer bg-white p-0">
                               <h6 className="text-dark">Мирзиёев рассказал, зачем было построено
                                   Сардобинское водохранилище</h6>
                               <div className="d-flex align-items-center justify-content-start text-secondary">
                                   <div className=""><h6>06:58</h6></div>
                                   <div className="ml-2"><h6>/</h6></div>
                                   <div className="ml-2"><h6>28.05.2001</h6></div>
                               </div>
                           </div>

                       </div>
                   </div>

               </div>

           </div>

       </section>
    );
};

export default CartPart;