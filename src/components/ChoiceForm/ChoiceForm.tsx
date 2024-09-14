import styles from './ChoiceForm.module.css'
import ExportedImage from "next-image-export-optimizer";
import { Nunito } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";

const nunito = Nunito({subsets: ["latin"]});

const ChoiceForm: React.FC = () => {
    
    const language = useSelector(selectLanguages).language;

    function rangeSlide(event: any) {
        const { value } = event.target;
        const rangeValue = document.getElementById("rangeValue") as HTMLSpanElement;
        if (rangeValue) {
            rangeValue.innerHTML = value; 
        }
    }
     

    return (
        <div className={`${styles.app} ${nunito.className}`}>
            <div className={styles.textAndImage}> 
                {language==='RU' && <form className='form'>
                <h2 className={styles.formHeading}>Собери свое Коммерческое Предложение сам</h2>
                    <div className={styles.place}>
                        <label className={styles.label}>Где будет стоять 1С:</label>
                        <div className="toggle">
                            <input type="radio" name="place" value="pc" id="pc" defaultChecked />
                            <label htmlFor="pc">На компьютере</label>
                            <input type="radio" name="place" value="server" id="server" />
                            <label htmlFor="server">На сервере</label>
                        </div>
                    </div>
                    <div className={styles.modules}> 
                            <label className={styles.label}>Какие модули планируете автоматизировать:</label>
                            <div className={styles.twoCols}>
                                <div className={styles.coll}>
                                    <label className="container">Банк и касса
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Бухгалтерия и Финансы
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Склад
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Продажи
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className={styles.coll}>
                                    <label className="container">Кадровый учет
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Производство
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">CRM и маркетинг
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Закупки
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    <div className={styles.slide}>
                        <label className={styles.label}>Сколько пользователей будут работать в системе:</label>
                        <span className={styles.rangeSlide} id="rangeValue">0</span>
                        <input
                            className={styles.range}
                            type="range"
                            name="users"
                            defaultValue="0"
                            min={0}
                            max={60}
                            onChange={(e) => rangeSlide(e)}
                            onMouseMove={(e) => rangeSlide(e)}
                        />
                    </div>
                    <input className={styles.submit} value="Получить предложение" type="submit" />
                </form>}

                {language==='EN' && <form className='form'>
                <h2 className={styles.formHeading}>Develop your Commercial Offer by yourself</h2>
                    <div className={styles.place}>
                        <label className={styles.label}>Where will 1C be:</label>
                        <div className="toggle">
                            <input type="radio" name="place" value="pc" id="pc" defaultChecked />
                            <label htmlFor="pc">On a personal computer</label>
                            <input type="radio" name="place" value="server" id="server" />
                            <label htmlFor="server">On a server</label>
                        </div> 
                    </div>
                    <div className={styles.modules}> 
                            <label className={styles.label}>Which modules are you planning to automate:</label>
                            <div className={styles.twoCols}>
                                <div className={styles.coll}>
                                    <label className="container">Bank and cash register
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Bookkeeping and Finance
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Warehouse
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Sales
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className={styles.coll}>
                                    <label className="container">Personnel accounting
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Industry
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">CRM and marketing
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Purchases
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    <div className={styles.slide}>
                        <label className={styles.label}>How many users will work in the system:</label>
                        <span className={styles.rangeSlide} id="rangeValue">0</span>
                        <input
                            className={styles.range}
                            type="range"
                            name="users"
                            defaultValue="0"
                            min={0}
                            max={60}
                            onChange={(e) => rangeSlide(e)}
                            onMouseMove={(e) => rangeSlide(e)}
                        />
                    </div>
                    <input className={styles.submit} value="Get an offer" type="submit" />
                </form>}


                {language==='AZ' && <form className='form'>
                <h2 className={styles.formHeading}>AZСобери свое Коммерческое Предложение сам</h2>
                    <div className={styles.place}>
                        <label className={styles.label}>AZГде будет стоять 1С:</label>
                        <div className="toggle">
                            <input type="radio" name="place" value="pc" id="pc" defaultChecked />
                            <label htmlFor="pc">AZНа компьютере</label>
                            <input type="radio" name="place" value="server" id="server" />
                            <label htmlFor="server">AZНа сервере</label>
                        </div>
                    </div>
                    <div className={styles.modules}> 
                            <label className={styles.label}>AZКакие модули планируете автоматизировать:</label>
                            <div className={styles.twoCols}>
                                <div className={styles.coll}>
                                    <label className="container">AZБанк и касса
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZБухгалтерия и Финансы
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZСклад
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZПродажи
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className={styles.coll}>
                                    <label className="container">AZКадровый учет
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZПроизводство
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZCRM и маркетинг
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">AZЗакупки
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    <div className={styles.slide}>
                        <label className={styles.label}>AZСколько пользователей будут работать в системе:</label>
                        <span className={styles.rangeSlide} id="rangeValue">0</span>
                        <input
                            className={styles.range}
                            type="range"
                            name="users"
                            defaultValue="0"
                            min={0}
                            max={60}
                            onChange={(e) => rangeSlide(e)}
                            onMouseMove={(e) => rangeSlide(e)}
                        />
                    </div>
                    <input className={styles.submit} value="AZПолучить предложение" type="submit" />
                </form>}

                <div className={styles.img}>
                {/* <ExportedImage className={styles.image} width={500} height={400} src="/luggage3.png" alt="businessman" /> */}
                </div>
            </div>
        </div>
    );
};

export default ChoiceForm;
