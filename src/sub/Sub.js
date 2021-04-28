import React from 'react';
import './sub.scss'
import Bell from './img/bell-icon.png'

const Sub = () => {
    return (
        <section id="SubButton">
                <div className="container p-3 my-3">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col d-flex align-items-center">
                            <div className="mr-3">  <img src={Bell} alt=""/></div>
                            <div><h6><b>Хотите узнать новости первыми? подключите уведомления!
                            </b></h6></div>

                        </div>
                        <div>
                            <button className="btn shadow-none text-white mr-3" type="button"><h6><b>Включит  уведомления!
                            </b></h6> </button>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Sub;