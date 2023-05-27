import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Login.css'
import Register from '../register/Register'
import Find from '../find/Find'
import api from '../../static/api';
import React, { Component } from 'react';
import cookie from 'react-cookies';

const Div = styled.div`
 margin: 1em;
 padding: 0.23em 13m;
`;

const Login = ({ isOpen, onClose }) => {

    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const openRegister = () => {
        setRegisterOpen(true);
    };

    const closeRegister = () => {
        setRegisterOpen(false);
    };

    const handleOpenRegister = (e) => {
        e.preventDefault();
        openRegister(!isRegisterOpen);
        //onClose(); // Close the login modal
    };

    const [isFindOpen, setFindOpen] = useState(false);
    const openFind = () => {
        setFindOpen(true);
    };

    const closeFind = () => {
        setFindOpen(false);
    };

    const handleOpenFind = (e) => {
        e.preventDefault();
        openFind(!isFindOpen);
        //onClose(); // Close the login modal
    };

    useEffect(() => {
        //getUser();
    }, []);

    // async function getUser() {
    //     await axios
    //         .get(baseUrl + "/users/login")
    //         .then((response) => {
    //             console.log(response.data);
    //             setId(response.data.id);
    //             setPassword(response.data.password);
    //         });

    // }

    const handleChange_userid = (e) => {
        e.preventDefault();
        setId(e.target.value);
    }

    const handleChange_password = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios
    //         .post("/users/login", {
    //             id: id,
    //             password: password
    //         }).then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const handleLogin = () => {
        // POST 요청 보내기

        api.post(`/users/login`, {
            withCredentials: true,
            userId: id,
            userPassword: password,
        })
            .then(response => {
                console.log('Login successfully :', response.headers['Set-Cookie']);
                console.log(response.data);
                cookie.save('Set-Cookie','JSESSIONID=e0f26c28-254e-4d6a-88c6-e7b05a399114', {
                    path : '/',
                });

                const cookies = response.headers.get('Set-Cookie');
                document.cookie = cookies;
                console.log(cookie.load('Set-Cookie'));
                // response.headers['set-cookie']
                // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
            })
            .catch(error => {
                console.error('Error :', error);
                // 취소 실패 시 에러 처리를 수행할 수 있습니다.
            });
        alert("로그인이 완료되었습니다!");
        // 모달 닫기
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="main" onClick={onClose}>
                    {isRegisterOpen && (
                        <Register
                            isOpen={openRegister}
                            onClose={closeRegister}
                        />)}
                    {isFindOpen && (
                        <Find
                            isOpen={openFind}
                            onClose={closeFind}
                        />)}
                    <div className="container">
                        <section className="wrapper" onClick={(e) => e.stopPropagation()}>
                            <div className="heading">
                                <h1 className="text text-large" onClick={onClose} style={{ textAlign: 'center' }}>로그인</h1>
                                <br></br>
                                <br></br>
                                <p className="text text-normal">아직 가입을 안하셨나요? <span><span className="text text-links" style={{ cursor: 'pointer', marginLeft: 119, fontWeight: 900 }} onClick={handleOpenRegister}>회원가입</span></span></p>
                            </div>
                            <form name="signin" className="form" onSubmit={handleLogin}>
                                <div className="input-control">
                                    <label for="id" className="input-label" hidden>id</label>
                                    <input type="id" name="id" id="id" className="input-field" placeholder="Id" value={id} onChange={handleChange_userid} required />
                                </div>
                                <div className="input-control">
                                    <label for="password" className="input-label" hidden>Password</label>
                                    <input type="password" name="password" id="password" className="input-field" placeholder="Password" value={password} onChange={handleChange_password} required />
                                </div>
                                <div className="input-control">
                                    <a href="find" className="text text-links" style={{ fontWeight: 900 }} onClick={handleOpenFind} >아이디 찾기/비밀번호 변경</a>
                                    <input type="submit" name="submit" className="input-submit" value="로그인" />
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>



        // <Div margin-left="10px">
        //     <div className='align-center'>
        //         <form onSubmit={handleSubmit}>
        //             <h2 style={{textAlign:'center'}}>로그인</h2>
        //             <p></p>
        //             <p> 아이디: <input type="text" className="form-control" placeholder="아이디를 입력하세요" aria-label="Username" required={true} value={name} onChange={handleChange_username}></input></p>
        //             <p> 비밀번호: <input type="text" className="form-control" placeholder="비밀번호를 입력하세요" aria-label="Password" required={true} value={password} onChange={handleChange_password}></input></p>
        //             <Button className="btn btn-outline-primary" type="submit" >로그인</Button>
        //         </form>
        //     </div>
        // </Div>
    )
}

export default Login;