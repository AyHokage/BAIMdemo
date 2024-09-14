import React, { useState, useEffect, useRef } from "react";
import styles from "./crmForm.module.css";
import { sendMessage, deleteMessage, selectCRM } from "@/services/CRMReducer";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useSelector, useDispatch } from "react-redux";

interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  message?: string;
}
 
const CrmForm = () => { 
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const initialCountryCode = "+994"; 
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const prismRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const crm = useSelector(selectCRM).crm;

  const language = useSelector(selectLanguages).language; 

  useEffect(() => {
    if (count != 0) {
      validateForm();
      console.log(phone);
    }
  }, [name, surname, email, phone, message, count]);
  const setCode = () => {
    if (phone.length === 0) setPhone("+994");
  };
  const handleBlur = () => {
    if (phone.length === 4) {
      setPhone("");
    }
  };
  const validateForm = () => {
    let newErrors: FormErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex =
      /^(?:\+994\s?)?(?:50|51|55|70|77)\s?\d{3}-\d{2}-\d{2}$/;

    if (!name) {
      if (language==='RU') newErrors.name = "Необходимо заполнить «Имя»";
      if (language==='AZ') newErrors.name = "azНеобходимо заполнить «Имя»";
      if (language==='EN') newErrors.name = "enНеобходимо заполнить «Имя»";
    }
    if (!surname) {
      if (language==='RU') newErrors.surname = "Необходимо заполнить «Фамилия»";
      if (language==='AZ') newErrors.surname = "azНеобходимо заполнить «Фамилия»";
      if (language==='EN') newErrors.surname = "enНеобходимо заполнить «Фамилия»";
    }
    if (!message) {
      if (language==='RU') newErrors.message = "Необходимо заполнить «Комментарий»";
      if (language==='AZ') newErrors.message = "azНеобходимо заполнить «Комментарий»";
      if (language==='EN') newErrors.message = "enНеобходимо заполнить «Комментарий»";
    }

    if (!email) {
      if (language==='RU') newErrors.email = "Необходимо заполнить «E-mail»";
      if (language==='AZ') newErrors.email = "azНеобходимо заполнить «E-mail»";
      if (language==='EN') newErrors.email = "enНеобходимо заполнить «E-mail»";
    } else if (!emailRegex.test(email)) {
      if (language==='RU') newErrors.email = "Введите правильный E-mail";
      if (language==='AZ') newErrors.email = "azВведите правильный E-mail";
      if (language==='EN') newErrors.email = "enВведите правильный E-mail";
    }

    if (phone.length < 5) {
      if (language==='RU') newErrors.phone = "Необходимо заполнить «Номер телефона»";
      if (language==='AZ') newErrors.phone = "azНеобходимо заполнить «Номер телефона»";
      if (language==='EN') newErrors.phone = "enНеобходимо заполнить «Номер телефона»";
    } else if (phone.length !== 17 || !phoneNumberRegex.test(phone)) {
      if (language==='RU') newErrors.phone = "Введите правильный номер телефона";
      if (language==='AZ') newErrors.phone = "azВведите правильный номер телефона";
      if (language==='EN') newErrors.phone = "enВведите правильный номер телефона";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = () => {

    dispatch(sendMessage({name: name, surname: surname, email: email, message: message, number: phone, id: crm.length+1}));
    console.log(crm);

    setCount((prevCount) => prevCount + 1);
    if (isFormValid) {
      showThankYou();
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };
  const handlevalueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = "+" + value;
    if (!value.startsWith("+994")) {
      if (value.length > 4) {
        value = "+994" + phone.substring(5);
      } else if (phone.length === 4) {
        value = "+994";
      }
    }

    if (value.length >= 4) {
      value = value.replace(/^(\+\d{3})?(\d{1,2})/, (_, prefix, rest) => {
        return prefix ? prefix + " " + rest : rest;
      });
    }

    if (value.length >= 7) {
      value = value.replace(
        /^(\+\d{3}\s\d{2})?(\d{1,3})/,
        (_, prefix, rest) => {
          return prefix ? prefix + " " + rest : rest;
        }
      );
    }

    if (value.length >= 10) {
      value = value.replace(
        /^(\+\d{3}\s\d{2}\s\d{3})?(\d{1,2})/,
        (_, prefix, rest) => {
          return prefix ? prefix + "-" + rest : rest;
        }
      );
    }

    if (value.length >= 13) {
      value = value.replace(
        /^(\+\d{3}\s\d{2}\s\d{3}-\d{2})?(\d{1,2})/,
        (_, prefix, rest) => {
          return prefix ? prefix + "-" + rest : rest;
        }
      );
    }

    setPhone(value.substring(0, 17));
  };
  const showThankYou = () => {
    if (prismRef.current) {
      prismRef.current.style.transform = "translateZ(-100px) rotateX(90deg)";
      setTimeout(() => {
        if (prismRef.current) {
          prismRef.current.style.transform = "translateZ(-100px) rotateX(0deg)"; // Reset to original position
        }
      }, 3000);
    }
    console.log(prismRef.current?.style.transform);
  };
  const translatePlaceholder = (ru: string, en: string, az: string) => {
    if (language==='AZ') return az;
    if (language==='RU') return ru;
    if (language==='EN') return en;
  }
  return (
  <>
    <div id='crm' className={styles.wrapper}>
      <div className={styles.recPrism} ref={prismRef}>
        <div className={`${styles.face} ${styles.faceFront}`}>
          <div className={styles.headings}>
            {language==='RU' && <h1 className={styles.heading}>Обратная связь</h1>}
            {language==='AZ' && <h1 className={styles.heading}>AZОбратная связь</h1>}
            {language==='EN' && <h1 className={styles.heading}>ENОбратная связь</h1>}
            {language==='RU' && <h3 className={styles.subHeading}>
              Поделитесь мнением о нашей работе или задайте нам любой
              интересующий вас вопрос в поле комментарий
            </h3>}
            {language==='AZ' && <h3 className={styles.subHeading}>
              AZПоделитесь мнением о нашей работе или задайте нам любой
              интересующий вас вопрос в поле комментарий
            </h3>}
            {language==='EN' && <h3 className={styles.subHeading}>
              ENПоделитесь мнением о нашей работе или задайте нам любой
              интересующий вас вопрос в поле комментарий
            </h3>}
          </div>
          <div className={styles.inputs}>
            <div className={styles.content}>
              <div className={styles.fieldWrapper}>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder={translatePlaceholder('Имя', 'Name', 'Ad')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className={styles.label}>{language==='RU' && 'Имя'} {language==='AZ' && 'Ad'} {language==='EN' && 'Name'}</label>
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.fieldWrapper}>
                <input
                  className={styles.input}
                  placeholder={translatePlaceholder('Фамилия', 'Surname', 'Soyad')}
                  value={surname}
                  onChange={(e) => setSurame(e.target.value)}
                />
                <label className={styles.label}>{language==='RU' && 'Фамилия'} {language==='AZ' && 'Soyad'} {language==='EN' && 'Surname'}</label>

                {errors.surname && (
                  <p className={styles.error}>{errors.surname}</p>
                )}
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.fieldWrapper}>
                <input
                  className={styles.input}
                  placeholder={translatePlaceholder('Email', 'Email', 'Email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={styles.label}>Email</label>

                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.fieldWrapper}>
                <input
                  className={styles.input}
                  value={phone}
                  type="tel"
                  pattern="[0-9]*"
                  onChange={handlevalueChange}
                  placeholder={translatePlaceholder('Номер', 'Phone', 'Mobil nömrə')}
                  onFocus={setCode}
                  onBlur={handleBlur}
                />
                <label className={styles.label}>{language==='RU' && 'Номер'} {language==='AZ' && 'Mobil nömrə'} {language==='EN' && 'Phone'}</label>

                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.fieldWrapper}>
                <textarea
                  className={styles.textarea}
                  value={message}
                  placeholder={translatePlaceholder('Коммент', 'Comment', 'Comment')}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label className={styles.label}>{language==='RU' && 'Коммен'} {language==='AZ' && 'Comment'} {language==='EN' && 'Comment'}</label>

                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}
              </div>
            </div>
          </div>
          <button
            className={styles.button}
            // disabled={!isChecked}
            onClick={handleSubmit}
          >
            {language==='RU' && 'Отправить'} {language==='AZ' && 'Göndər'} {language==='EN' && 'Send'}
          </button>
        </div>
        {/* <label className={styles.terms}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <text>I accept the Terms and Conditions</text>
           </label> */}

        <div className={`${styles.face} ${styles.faceBottom}`}>
          <div className={styles.content}>
            {/* <Phone></Phone> */}
            <div className={styles.thankYou}>
              <div>
              {language==='RU' && 'Спасибо за запрос! Мы обязательно свяжемся с Вами в ближайщеевремя.'} 
              {language==='AZ' && 'azСпасибо за запрос! Мы обязательно свяжемся с Вами в ближайщеевремя.'} 
              {language==='EN' && 'enСпасибо за запрос! Мы обязательно свяжемся с Вами в ближайщеевремя.'}
              </div>
            </div>
          </div>
        </div>
        {/* {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>} */}
        {/* <button
          className={styles.button}
          disabled={!isChecked}
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>
    </div>

    <div className={styles.empty}></div>
    </>
  );
};

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f0f0f0",
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: "25px",
//     color: "green",
//     textAlign: "center",
//   },
//   subHeading: {
//     fontWeight: "bold",
//     fontSize: "25px",
//     textAlign: "center",
//   },
//   form: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//     margin: "0 auto",
//   },
//   value: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     fontSize: "16px",
//     transition: "border-color 0.2s ease",
//     color: "black",
//   },
//   button: {
//     backgroundColor: "green",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "16px",
//     padding: "12px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",

//     width: "40%",
//     transition: "opacity 0.2s ease",
//   },
// };

export default CrmForm;