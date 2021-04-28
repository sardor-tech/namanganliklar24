import React from 'react';
import './buttom-add.scss'
import Tel from './img/tel.png'
import Appstore from './img/appstore 1.png'
import Googleplay from './img/googleplay 1.png'


const BottomAdd = () => {
    return (
        <section id="bottom-add">
            <div className=" container-md my-md-2 pt-md-3 border bg-light">
                <div className="row d-md-flex d-sm-block justify-content-sm-center align-items-md-center">
                    <div className="d-sm-flex justify-content-sm-center col-md-2">
                        <div className="ml-md-5"><img className="" src={Tel} alt=""/></div>
                    </div>
                    <div className="text-sm-center col-md-6 d-sm-block justify-content-sm-center  ">
                        <div><h5 className="text-primary  ml-md-4"><b>Всегда будьте в курсе последних новостей!</b></h5></div>
                        <div><h6 className="text-dark  ml-md-4">Установите мобильное приложение NAMANGANLIKLAR24
                            и все новости в вашем кармане!</h6></div>

                    </div>
                    <div className="col-md-3 col-sm-10 d-sm-flex justify-content-sm-center align-items-sm-center ml-sm-5  d-md-flex align-items-md-center">
                       <div> <a href="#"><div><img className="" src={Googleplay} alt=""/></div></a></div>
                        <div><a href="#"> <div><img className="m-sm-3 ml-md-2" src={Appstore} alt=""/></div></a></div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default BottomAdd;