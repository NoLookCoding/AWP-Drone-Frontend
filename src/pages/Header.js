import { Outlet, Link } from "react-router-dom"
import './Header.css'
import {AiOutlineShoppingCart } from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import React, { useState, useEffect } from 'react';
import Login from './login/Login'
import Register from './register/Register'
import { userIdxState, adminState  } from '../static/atoms';
import { useRecoilValue } from 'recoil';



const Dropdown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
    const [repeat, setRepeat] = React.useState(null);

    React.useEffect(() => {
        if (props.visibility) {
            clearTimeout(repeat);
            setRepeat(null);
            setVisibilityAnimation(true);
        } else {
            setRepeat(setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400));
        }
    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            { visibilityAnimation && props.children }
        </article>
    )
};


const Header = () => {
    const [currentUserIdx, setCurrentUserIdx] = useState(null);

    const userIdx = useRecoilValue(userIdxState);
    const admin = useRecoilValue(adminState);

    // Modal
    const [isLoginOpen, setLoginOpen] = useState(false);

    const openLogin = () => {
        setLoginOpen(true);
    };

    const closeLogin = () => {
        setLoginOpen(false);
    };

    const [isRegisterOpen, setRegisterOpen] = useState(false);

    const openRegister = () => {
        setRegisterOpen(true);
    };

    const closeRegister = () => {
        setRegisterOpen(false);
    };
    useEffect(() => {
        setCurrentUserIdx(userIdx);
      }, [userIdx]);
    
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [isDimmed, setIsDimmed] = React.useState(false);
    const [isBrightening, setIsBrightening] = useState(false);

    useEffect(() => {
        if (!isDimmed) {
          setIsBrightening(true);
          const brighteningTimeout = setTimeout(() => {
            setIsBrightening(false);
          }, 1000); // 1초 후에 밝아짐 효과를 종료함
    
          return () => clearTimeout(brighteningTimeout);
        }
      }, [isDimmed]);

    const handleMouseEnter = () => {
        setDropdownVisibility(true);
        setIsDimmed(true);
        setIsBrightening(false);

      };
    
      const handleMouseLeave = () => {
        setDropdownVisibility(false);
        setIsDimmed(false);
        setIsBrightening(true);
      };

    return (
        <div className="header-container">
            {isLoginOpen && (
            <Login
            isOpen={openLogin}
            onClose={closeLogin}
            />)}
            {isRegisterOpen && (
            <Register
            isOpen={openRegister}
            onClose={closeRegister}
            />)}
            <div className="header-frame">

                <div className="header-top-frame">
                </div>
                <div className="header-nav-frame">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="header-logo-container">
                            <div className="header-logo"> </div>
                        </div>
                    </Link>
                    <div className="header-nav-button-frame">
                        <Link to = "/introduce">
                            <button className="header-nav-button-item">
                                회사 소개 {/* Introduce */}
                            </button>
                        </Link> 
                
                        <Link to = "/usage">
                            <button className="header-nav-button-item">
                                드론 사용
                            </button>
                        </Link> 
                        <Link to = "/store">
                            <button className="header-nav-button-item">
                                드론스토어
                            </button>
                        </Link> 
                        <Link to = "/membership">
                            <button className="header-nav-button-item">
                                멤버십
                            </button>
                        </Link>
                        {userIdx != 0 &&
                        <Link to = "/cart">
                            <AiOutlineShoppingCart className="header-nav-button-icon"/>
                        </Link> }
                        <button className="header-nav-button-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <FaRegUser className="header-nav-button-icon" style={{ width: 20 }} />
                        </button>
                        <div></div>
                    </div>
                </div>
                <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <Dropdown visibility={dropdownVisibility}>
                    <ul>    
                        {userIdx == 0 && <li className="dropdown-list-item" onClick={openLogin}>로그인</li>}
                        {userIdx == 0 && <li className="dropdown-list-item" onClick={openRegister}>회원가입</li>}
                        {userIdx != 0 &&<Link to = "/order" style={{ textDecoration: "none" }} onClick={handleMouseLeave}>
                          <li className="dropdown-list-item">주문조회</li>
                        </Link>}
                    </ul>
                </Dropdown>    
                </div>
                <div
                    className={`outlet-dimmed-container ${isDimmed ? 'dimmed' : ''} ${
                    isBrightening ? 'brighten' : ''
                    }`}
                ></div>                
                <div className="outlet-container"> 
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default Header;