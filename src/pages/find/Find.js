import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router';
import './Find.css'

const Div = styled.div`
 margin: 1em;
 padding: 0.23em 13m;
`;

function Find({ isOpen, onClose }) {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const directPage = useNavigate();


    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        await axios
            .get("/")
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setPassword(response.data.password);
            });

    }

    const handleChange_username = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleChange_password = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post( "/users/login", {
                name: name,
                password: password
            }).then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function FindIdSubmit() {
        if (name == "") {
            alert('이름을 입력해주세요!');
            return false;
        } else if (email == "") {
            alert('이메일을 입력해주세요!');
            return false;
        }
    };

    function ChangePwSubmit() {
        if (id == "") {
            alert('아이디를 입력해주세요!');
            return false;
        } else if (name == "") {
            alert('이름을 입력해주세요!');
            return false;
        } else if (email == "") {
            alert('이메일을 입력해주세요!');
            return false;
        }
    };

    return (
        <>
        {isOpen && (
                <div class="main-find" onClick={onClose}>
                    <div class="container">
                        <section class="wrapper-find" onClick={(e) => e.stopPropagation()}>
                            <div class="heading">
                                <h2 class="text text-large" style={{ textAlign: 'center' }}>아이디/비밀번호 찾기</h2>
                            </div>
                            <form name="signin" class="form" onSubmit={handleSubmit}>
                                <p class="text text-normal"> 아이디 찾기 </p>
                                <div class="input-control">
                                    <label for="name" class="input-label" hidden>name</label>
                                    <input type="name" name="name" id="name" class="input-field" placeholder="이름" />
                                </div>
                                <div class="input-control">
                                    <label for="email" class="input-label" hidden>email</label>
                                    <input type="email" name="email" id="email" class="input-field" placeholder="이메일" />
                                </div>
                                <div class="input-control">
                                    <input type="submit" name="submit" class="input-submit" value="확인" onClick={FindIdSubmit} />
                                </div>
                            </form>
                            <form name="signin" class="form" onSubmit={handleSubmit}>
                                <br></br>
                                <p class="text text-normal"> 비밀번호 변경 </p>
                                <div class="input-control">
                                    <label for="id" class="input-label" hidden>id</label>
                                    <input type="id" name="id" id="id" class="input-field" placeholder="아이디" />
                                </div>
                                <div class="input-control">
                                    <label for="name" class="input-label" hidden>name</label>
                                    <input type="name" name="name" id="name" class="input-field" placeholder="이름" />
                                </div>
                                <div class="input-control">
                                    <label for="email" class="input-label" hidden>email</label>
                                    <input type="email" name="email" id="email" class="input-field" placeholder="이메일" />
                                </div>
                                <div class="input-control">
                                    <input type="submit" name="submit" class="input-submit" value="확인" onClick={ChangePwSubmit} />
                                    <p className="text text-normal" style={{marginTop: 30}}><span><span className="text text-links" style={{ cursor:'pointer', marginLeft: 119, fontWeight: 900}}>뒤로가기</span></span></p>
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