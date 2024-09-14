import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock as lock,
  faUnlock as unlock,
  faBriefcase as bcase,
  faUserTie as staff,
  faEnvelope as message,
  faRightFromBracket as logOut,
  faTasks as tasks,
  faHandshake as hands,
  faUsers as users,
  faNewspaper as news,
  faDolly as dolly,
  faGear as settings,
  faCircle,
  faEnvelope,
  faFile,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SideNavBar.module.css";
import { useAuth } from "@/context/AuthContext";
import router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, selectToken, selectIsConfirmed, selectShow, selectTryLogin, selectUser, safeSetUserData, setToken, setUser, setIsConfirmed, setUserData, setTryLogin, setShow, fetchData } from "@/services/AuthReducer";
import { selectCRM } from "@/services/CRMReducer";
import { isTokenExpired } from "@/services/AuthReducer";

const SideNavBar = () => {
  const [user, setUser] = useState<any>();
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const crm = useSelector(selectCRM).crm;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('crm');
  }, [crm]);
  
  const toggleLock = () => {
    setIsSidebarLocked(!isSidebarLocked);
  };

  const handleMouseLeave = () => {
    if (!isSidebarLocked) {
      setIsSidebarOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isSidebarLocked) {
      setIsSidebarOpen(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogOut = () => {
    dispatch(setToken(''))
    dispatch(setIsConfirmed(false))
    dispatch(setTryLogin(false))
    dispatch(setUserData({}))
    sessionStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    if (userSession) setUser(JSON.parse(userSession))
  }, [])

  return (
    <nav
      className={`${styles.sidebar} ${isSidebarOpen ? "" : styles.close} ${
        isSidebarLocked ? styles.locked : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.logo_items} `}>
        <button
          id="lock-icon"
          className={styles.lock_icon}
          onClick={toggleLock}
        >
          {isSidebarLocked ? (
            <>
              <FontAwesomeIcon
                icon={lock}
                className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
              />
              <span className={styles.logo_title}>Закрепить</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={unlock}
                className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_open_alt}`}
              />
              <span className={styles.logo_title}>Закрепить</span>
            </>
          )}
        </button>
      </div>
      <div className={styles.menu_container}>
        <div className={styles.menu_items}>
          <ul className={styles.menu_item}>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="/dashboard">
                  <FontAwesomeIcon
                    icon={faHome}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Главная</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={faHome}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            {user &&
              (user!.role == "Employer" || user!.role == "Admin") && (
                <>
                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageProducts">
                        <FontAwesomeIcon
                          icon={dolly}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Продукты</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={dolly}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>

                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageVacancies">
                        <FontAwesomeIcon
                          icon={bcase}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Вакансии</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={bcase}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>

                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageCVs">
                        <FontAwesomeIcon
                          icon={faFile}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>CV</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={faFile}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>

                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageCRM">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Сообщения</span>
                        <FontAwesomeIcon icon={faCircle} className={styles.notification} />
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                      <FontAwesomeIcon icon={faCircle} className={styles.notification} />
                    </span>
                  </div>

                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/managePartners">
                        <FontAwesomeIcon
                          icon={hands}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Партнеры</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={hands}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>
                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageNews">
                        <FontAwesomeIcon
                          icon={news}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Новости</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={news}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>

                  <div className={`${styles.menu_title} ${styles.flex}`}>
                    <span className={styles.title}>
                      <Link className={styles.link} href="/manageUsers">
                        <FontAwesomeIcon
                          icon={users}
                          className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                        />
                        <span className={styles.name}>Пользователи</span>
                      </Link>
                    </span>
                    <span className={styles.ico}>
                      <FontAwesomeIcon
                        icon={users}
                        className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                      />
                    </span>
                  </div>
                </>
              )}
            {user && user.role == "Admin" && (
              <div className={`${styles.menu_title} ${styles.flex}`}>
                <span className={styles.title}>
                  <Link className={styles.link} href="/manageStaff">
                    <FontAwesomeIcon
                      icon={staff}
                      className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                    />
                    <span className={styles.name}>Наш коллектив</span>
                  </Link>
                </span>
                <span className={styles.ico}>
                  <FontAwesomeIcon
                    icon={staff}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                </span>
              </div>
            )}
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="/projects">
                  <FontAwesomeIcon
                    icon={tasks}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Проекты</span>
                  <FontAwesomeIcon icon={faCircle} className={styles.notification} />
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={tasks}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
                <FontAwesomeIcon icon={faCircle} className={styles.notification} />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="/account-settings">
                  <FontAwesomeIcon
                    icon={settings}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Настройки</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={settings}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <button
                  className={`${styles.link} ${styles.btn}`}
                  onClick={handleLogOut}
                >
                  <FontAwesomeIcon
                    icon={logOut}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Выход</span>
                </button>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={logOut}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavBar;
