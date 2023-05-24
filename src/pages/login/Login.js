import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Login.css'

const Div = styled.div`
 margin: 1em;
 padding: 0.23em 13m;
`;

function Login() {
    const baseUrl = "http://localhost:8081";

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        await axios
            .get(baseUrl + "/")
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
            .post(baseUrl + "/api/member", {
                name: name,
                password: password
            }).then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div class="main">
                <div class="container">
                    <section class="wrapper">
                        <div class="heading">
                            <h1 class="text text-large" style={{textAlign:'center'}}>로그인</h1>
                            <br></br>
                            <br></br>
                            <p class="text text-normal">아직 가입을 안하셨나요? <span><a href="register" class="text text-links" style={{ marginLeft: 123 }}>회원가입</a></span></p>
                        </div>
                        <form name="signin" class="form" onSubmit={handleSubmit}>
                            <div class="input-control">
                                <label for="id" class="input-label" hidden>id</label>
                                <input type="id" name="id" id="id" class="input-field" placeholder="Id" required/>
                            </div>
                            <div class="input-control">
                                <label for="password" class="input-label" hidden>Password</label>
                                <input type="password" name="password" id="password" class="input-field" placeholder="Password" required/>
                            </div>
                            <div class="input-control">
                                <a href="findUser" class="text text-links">아이디/비밀번호 찾기</a>
                                <input type="submit" name="submit" class="input-submit" value="로그인" />
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>



        // <Div margin-left="10px">
        //     <div className='align-center'>
        //         <form onSubmit={handleSubmit}>
        //             <h2 style={{textAlign:'center'}}>로그인</h2>
        //             <p></p>
        //             <p> 아이디: <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" required={true} value={name} onChange={handleChange_username}></input></p>
        //             <p> 비밀번호: <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Password" required={true} value={password} onChange={handleChange_password}></input></p>
        //             <Button class="btn btn-outline-primary" type="submit" >로그인</Button>
        //         </form>
        //     </div>
        // </Div>
    )
}

export default Login;