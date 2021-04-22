import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../../actions/formActions";
import { reducerState } from "../../store";
import "./contact.scss";

interface IForm {
  loading?: boolean;
  success?: boolean;
}

const Contact = () => {
  const form: IForm = useSelector((state: reducerState) => state.form);
  const { loading, success } = form;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //Dispatch form
    dispatch(formAction(name.trim(), subject.trim(), email.trim(), message.trim()));
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="contactContainer">
          <div className="contactCard">
            <h1 className="title">Contact</h1>
            <div className="contactWrap">
              <div className="contactLeft">
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="contactField">
                    <div className="fieldWrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="fieldInput"
                        autoComplete="off"
                        maxLength={50}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="fieldIcon">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.125 7C6.125 4.58375 8.08375 2.625 10.5 2.625C12.9162 2.625 14.875 4.58375 14.875 7C14.875 9.41625 12.9162 11.375 10.5 11.375C8.08375 11.375 6.125 9.41625 6.125 7ZM10.5 9.625C11.9497 9.625 13.125 8.44975 13.125 7C13.125 5.55025 11.9497 4.375 10.5 4.375C9.05025 4.375 7.875 5.55025 7.875 7C7.875 8.44975 9.05025 9.625 10.5 9.625Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                          <path
                            d="M5.55025 14.3003C4.2375 15.613 3.5 17.3935 3.5 19.25H5.25C5.25 17.8576 5.80312 16.5223 6.78769 15.5377C7.77226 14.5531 9.10761 14 10.5 14C11.8924 14 13.2277 14.5531 14.2123 15.5377C15.1969 16.5223 15.75 17.8576 15.75 19.25H17.5C17.5 17.3935 16.7625 15.613 15.4497 14.3003C14.137 12.9875 12.3565 12.25 10.5 12.25C8.64348 12.25 6.86301 12.9875 5.55025 14.3003Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="contactField">
                    <div className="fieldWrap">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="fieldInput"
                        maxLength={80}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="fieldIcon">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 1.75C5.67 1.75 1.75 5.67 1.75 10.5C1.75 15.33 5.67 19.25 10.5 19.25H14.875V17.5H10.5C6.7025 17.5 3.5 14.2975 3.5 10.5C3.5 6.7025 6.7025 3.5 10.5 3.5C14.2975 3.5 17.5 6.7025 17.5 10.5V11.7513C17.5 12.4425 16.8788 13.125 16.1875 13.125C15.4962 13.125 14.875 12.4425 14.875 11.7513V10.5C14.875 8.085 12.915 6.125 10.5 6.125C8.085 6.125 6.125 8.085 6.125 10.5C6.125 12.915 8.085 14.875 10.5 14.875C11.7075 14.875 12.81 14.385 13.5975 13.5888C14.1662 14.3675 15.1462 14.875 16.1875 14.875C17.9113 14.875 19.25 13.475 19.25 11.7513V10.5C19.25 5.67 15.33 1.75 10.5 1.75ZM10.5 13.125C9.0475 13.125 7.875 11.9525 7.875 10.5C7.875 9.0475 9.0475 7.875 10.5 7.875C11.9525 7.875 13.125 9.0475 13.125 10.5C13.125 11.9525 11.9525 13.125 10.5 13.125Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="contactField">
                    <div className="fieldWrap">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="fieldInput"
                        maxLength={100}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <div className="fieldIcon">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.1748 15.7165H11.825C9.42166 15.7165 7.47358 13.7928 7.47358 11.4204V6.79708C7.47358 4.42374 9.42166 2.5 11.825 2.5H12.1748C14.1693 2.5 15.8501 3.82395 16.3645 5.63098C16.4352 5.87874 16.2482 6.12459 15.9886 6.12459H14.8562C14.5142 6.12459 14.2362 6.39818 14.2362 6.73586V6.73682C14.2362 7.07546 14.5142 7.34905 14.8562 7.34905H15.9004C16.2463 7.34905 16.5272 7.62551 16.5272 7.96702C16.5272 8.30853 16.2463 8.58499 15.9004 8.58499H14.8562C14.5142 8.58499 14.2362 8.85953 14.2362 9.19817C14.2362 9.53585 14.5142 9.8104 14.8562 9.8104H15.9004C16.2463 9.8104 16.5272 10.0869 16.5272 10.4293C16.5272 10.7699 16.2463 11.0463 15.9004 11.0463H14.8562C14.5142 11.0463 14.2362 11.3209 14.2362 11.6595C14.2362 11.9972 14.5142 12.2708 14.8562 12.2708H15.9334C16.1988 12.2708 16.3887 12.5272 16.3054 12.7759C15.7309 14.4844 14.0996 15.7165 12.1748 15.7165ZM18.5626 11.2828C18.5626 10.7538 18.9966 10.3262 19.5313 10.3262C20.066 10.3262 20.5 10.7538 20.5 11.2828C20.5 15.5866 17.2006 19.1404 12.9692 19.6177V21.5434C12.9692 22.0714 12.5352 22.5 12.0005 22.5C11.4648 22.5 11.0318 22.0714 11.0318 21.5434V19.6177C6.79945 19.1404 3.5 15.5866 3.5 11.2828C3.5 10.7538 3.93398 10.3262 4.46872 10.3262C5.00345 10.3262 5.43743 10.7538 5.43743 11.2828C5.43743 14.8557 8.38136 17.7629 12.0005 17.7629C15.6186 17.7629 18.5626 14.8557 18.5626 11.2828Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="contactField">
                    <div className="fieldWrap">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        className="fieldTextarea"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <div className="fieldIcon">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.875 7.875H6.125V9.625H7.875V7.875Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                          <path
                            d="M9.625 7.875H11.375V9.625H9.625V7.875Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                          <path
                            d="M14.875 7.875H13.125V9.625H14.875V7.875Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                          <path
                            d="M2.625 4.375V18.375L6.825 15.225C7.12759 14.9972 7.49624 14.8743 7.875 14.875H16.625C17.5915 14.875 18.375 14.0915 18.375 13.125V4.375C18.375 3.4085 17.5915 2.625 16.625 2.625H4.375C3.4085 2.625 2.625 3.4085 2.625 4.375ZM4.375 14.875V4.375H16.625V13.125H7.29225C6.91344 13.124 6.54469 13.2469 6.24225 13.475L4.375 14.875Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="contactButton">
                    <button
                      type="submit"
                      disabled={!message.trim().length}
                      className={!message ? "button disabled" : "button"}
                    >
                      <span>Send</span>
                    </button>
                    {loading && <i className="fas fa-spinner fa-2x fa-spin"></i>}
                    {success && <i className="fas fa-check-circle fa-2x"></i>}
                  </div>
                </form>
              </div>
              <div className="contactRight">
                <a className="contactLine" href="mailto:moyisemr@gmail.com">
                  <div className="contactIcon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 25H5C3.61929 25 2.5 23.8807 2.5 22.5V7.39125C2.55826 6.05319 3.66067 4.99873 5 5H25C26.3807 5 27.5 6.11929 27.5 7.5V22.5C27.5 23.8807 26.3807 25 25 25ZM5 9.835V22.5H25V9.835L15 16.5L5 9.835ZM6 7.5L15 13.5L24 7.5H6Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                  <p className="contactText">moyisemr@gmail.com</p>
                </a>
                <a className="contactLine" href="tel:+14377758373">
                  <div className="contactIcon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 11.25H8.75V13.75H11.25V11.25Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M13.75 11.25H16.25V13.75H13.75V11.25Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M21.25 11.25H18.75V13.75H21.25V11.25Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M3.75 6.25V26.25L9.75 21.75C10.1823 21.4245 10.7089 21.249 11.25 21.25H23.75C25.1307 21.25 26.25 20.1307 26.25 18.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25ZM6.25 21.25V6.25H23.75V18.75H10.4175C9.87634 18.7485 9.34956 18.9241 8.9175 19.25L6.25 21.25Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                  <p className="contactText">+1 437 775 8373</p>
                </a>
                <div className="contactLine">
                  <div className="contactIcon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 26.2502C13.4212 24.9035 11.9577 23.4271 10.625 21.8365C8.625 19.4477 6.25 15.8902 6.25 12.5002C6.24823 8.95968 8.38031 5.76698 11.6513 4.41199C14.9224 3.057 18.6876 3.8068 21.19 6.3115C22.8356 7.94976 23.7574 10.1782 23.75 12.5002C23.75 15.8902 21.375 19.4477 19.375 21.8365C18.0423 23.4271 16.5788 24.9035 15 26.2502ZM15 8.75025C13.6603 8.75025 12.4223 9.46499 11.7524 10.6252C11.0825 11.7855 11.0825 13.215 11.7524 14.3752C12.4223 15.5355 13.6603 16.2502 15 16.2502C17.0711 16.2502 18.75 14.5713 18.75 12.5002C18.75 10.4292 17.0711 8.75025 15 8.75025Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                  <p className="contactText">Montreal, Canada</p>
                </div>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/m-kane-a64a45117/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
                        fill="#F2F2F2"
                      />
                    </svg>
                  </a>
                  <a href="https://twitter.com/0moyise" target="_blank" rel="noreferrer">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.495 6.68799C21.3914 6.15208 22.0622 5.30823 22.382 4.31399C21.5397 4.81379 20.618 5.16587 19.657 5.35499C18.3246 3.94552 16.2135 3.60251 14.5034 4.51764C12.7933 5.43277 11.9075 7.37948 12.341 9.26999C8.89062 9.09676 5.67598 7.4669 3.49702 4.78599C2.35986 6.74741 2.94097 9.25477 4.82502 10.516C4.14373 10.4941 3.47754 10.3096 2.88202 9.97799C2.88202 9.99599 2.88202 10.014 2.88202 10.032C2.88241 12.0751 4.32239 13.8351 6.32502 14.24C5.69308 14.4119 5.03022 14.4372 4.38702 14.314C4.95022 16.0613 6.56057 17.2583 8.39602 17.294C6.87585 18.4871 4.99849 19.1342 3.06602 19.131C2.72349 19.1315 2.38123 19.1118 2.04102 19.072C4.00341 20.333 6.28738 21.0023 8.62002 21C11.8653 21.0223 14.984 19.7429 17.2787 17.448C19.5734 15.1531 20.8526 12.0342 20.83 8.78899C20.83 8.60299 20.8257 8.41799 20.817 8.23399C21.6575 7.62659 22.3828 6.87414 22.959 6.01199C22.176 6.35905 21.3455 6.58691 20.495 6.68799Z"
                        fill="#F2F2F2"
                      />
                    </svg>
                  </a>
                  <a href="https://github.com/Moyise" target="_blank" rel="noreferrer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                        fill="#F2F2F2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="custom-shape-divider-top-1618822632">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
