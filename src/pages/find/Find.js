import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router';
import './Find.css'
import api from '../../static/api';
import cookie from 'react-cookies';

const Div = styled.div`
 margin: 1em;
 padding: 0.23em 13m;
`;

function Find({ isOpen, onClose }) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ChangePassword, setChangePassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");

    const onChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const onChangePhone = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };

    const onChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const onChangeNextPassword = (e) => {
        e.preventDefault();
        setChangePassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("/users/login", {
                
                name: name,
                password: password
            }).then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleFindLogin = () => {
        // POST 요청 보내기
        api.post(`/users/id`, {
            name : name,
            phone : phone,
            email : email
        })
            .then(response => {
                console.log('Order canceled successfully:', response.data);
                // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
            })
            .catch(error => {
                console.error('Error canceling order:', error);
                // 취소 실패 시 에러 처리를 수행할 수 있습니다.
            });
        // 모달 닫기
        onClose();
    };

    // console.log(cookie.load("Set-Cookie"));
    const cookieHeader = (cookie.load('Set-Cookie')).split("=");
    // console.log(cookieHeader[0]);
    // console.log(cookieHeader[1]);


    const handleChangePassword = () => {
        // POST 요청 보내기
        api.post(`/users/password`, {
            withCredentials: true,
            origin : password,
            change : ChangePassword
        }, {
            headers: {JSESSIONID : cookieHeader[1]}
        }
        )
            .then(response => {
                console.log('Order canceled successfully:', response.data);
                // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
            })
            .catch(error => {
                console.error('Error canceling order:', error);
                // 취소 실패 시 에러 처리를 수행할 수 있습니다.
            });
        // 모달 닫기
        onClose();
    };

    // function FindIdSubmit() {
    //     if (name == "") {
    //         alert('이름을 입력해주세요!');
    //         return false;
    //     } else if (email == "") {
    //         alert('이메일을 입력해주세요!');
    //         return false;
    //     }
    // };

    // function ChangePwSubmit() {
    //     if (id == "") {
    //         alert('아이디를 입력해주세요!');
    //         return false;
    //     } else if (name == "") {
    //         alert('이름을 입력해주세요!');
    //         return false;
    //     } else if (email == "") {
    //         alert('이메일을 입력해주세요!');
    //         return false;
    //     }
    // };

    return (
        <>
            {isOpen && (
                <div class="main-find" onClick={onClose}>
                    <div class="container">
                        <section class="wrapper-find" onClick={(e) => e.stopPropagation()}>
                            <div class="heading">
                                <h2 class="text text-large" style={{ textAlign: 'center' }}>아이디 찾기/비밀번호 변경</h2>
                            </div>
                            <form name="signin" class="form" onSubmit={handleFindLogin}>
                                <p class="text text-normal"> 아이디 찾기 </p>
                                <div class="input-control">
                                    <label for="name" class="input-label" hidden>name</label>
                                    <input type="text" name="name" id="name" class="input-field" placeholder="이름" onChange={onChangeName} />
                                </div>
                                <div class="input-control">
                                    <label for="phone" class="input-label" hidden>phone</label>
                                    <input type="text" name="phone" id="phone" class="input-field" placeholder="전화번호" onChange={onChangePhone} />
                                </div>
                                <div class="input-control">
                                    <label for="email" class="input-label" hidden>email</label>
                                    <input type="text" name="email" id="email" class="input-field" placeholder="이메일" onChange={onChangeEmail}/>
                                </div>
                                <div class="input-control">
                                    <input type="submit" name="submit" class="input-submit" value="확인" onClick={handleFindLogin} />
                                </div>
                            </form>
                            <form name="signin" class="form" onSubmit={handleChangePassword}>
                                <br></br>
                                <p class="text text-normal"> 비밀번호 변경 </p>
                                <div class="input-control">
                                    <label for="currentPassword" class="input-label" hidden>password</label>
                                    <input type="password" name="currentPassword" id="currentPassword" class="input-field" placeholder="현재 비밀번호" onChange={onChangePassword}/>
                                </div>
                                <div class="input-control">
                                    <label for="ChangePassword" class="input-label" hidden>ChangePassword</label>
                                    <input type="password" name="ChangePassword" id="ChangePassword" class="input-field" placeholder="변경할 비밀번호" onChange={onChangeNextPassword}/>
                                </div>
                                <div class="input-control">
                                    <input type="submit" name="submit" class="input-submit" value="확인" onClick={handleChangePassword} />
                                    <p className="text text-normal" style={{ marginTop: 30 }}><span><span className="text text-links" style={{ cursor: 'pointer', marginLeft: 119, fontWeight: 900 }}>뒤로가기</span></span></p>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    )
}

export default Find;