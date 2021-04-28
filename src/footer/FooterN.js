import React from 'react';
import './footer.scss'
import Telegram from './img/telegtam.png'

const FooterN = () => {
    return (
        <section id="footer">
            <div className="container  pr-0 p-2">
                <div className="row d-flex align-items-center">
                    <div className="col-2">
                        <button type="button" className="btn dark-blue"><h6
                            className="text-white ">NAMANGANLIKLAR24</h6></button>
                    </div>
                    <div className="col-8 d-flex justify-content-end ">
                        <h className="small-text text-white"> Подписывайтесь на наш канал в Telegram и будьте всегда в
                            курсе самых последних новостей:
                        </h>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn bg-white   text-primary d-flex align-items-center justify-content-between"
                            type="button">
                            <img src={Telegram} alt=""/>
                            Подписатся
                        </button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                               <h6 className="text-white"> О сайте <br/>  <br/>
                                   Воспроизводство, копирование, тиражирование, распростране ние и иное использование
                                   информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного
                                   разрешения редакции.</h6>

                            </div>
                            <div className="col-4">
                                <a className="text-white "  href="#"><h6>Информация о сайте</h6></a><br/>
                                <a className="text-white mt-2" href="#"><h6>Напишите нам</h6></a>
                                <a className="text-white mt-2" href="#"><h6>Реклама</h6></a>
                                <a className="text-white mt-2" href="#"><h6>Прислать новость</h6></a>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="offset-2">

                            </div>
                            <div className="col-6">
                                <a className="text-white"  href="#"><h6>Использование материалов</h6></a><br/>
                                <a className="text-white mt-2" href="#"><h6>Темы дня</h6></a>
                                <a className="text-white mt-2" href="#"><h6>Наша команда</h6></a>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FooterN;