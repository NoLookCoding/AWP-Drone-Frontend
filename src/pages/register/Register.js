import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import api from '../../static/api';

const Register = ({ isOpen, onClose }) => {

  //초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [gender, setGender] = React.useState("");

  // // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [phoneMessage, setPhoneMessage] = React.useState("");
  const [ageMessage, setAgeMessage] = React.useState("");
  const [addressMessage, setAddressMessage] = React.useState("");
  const [genderMessage, setGenderMessage] = React.useState("");
  const navigate = useNavigate();

  // 유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isName, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);
  const [isAge, setIsAge] = React.useState(false);
  const [isAddress, setIAddress] = React.useState(false);
  const [isGender, setIsGende] = React.useState(false);

  // const onclickHandler = () => {
  //   if (handleRegExp() == false) {
  //     return false;
  //   }
  //   handleRegister();
  //   alert("회원가입이 완료되었습니다!");
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post(api + `/users`, {
  //       userId : id,
  //       password : password,
  //       name : name,
  //       address : address,
  //       phone : phone,
  //       age : age,
  //       email : email,
  //       sex : gender
  //     }).then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const handleRegExp = () => {
    api.post(`/users/validation`, {
      userId: id,
      password: password,
      name: name,
      address: address,
      phone: phone,
      age: age,
      sex: gender,
      email: email
    })
      .then(response => {
        console.log('Regular Expression Successful: ', response.headers);
        alert('유효성 검증 성공');
        return true;
      })
      .catch(error => {
        console.error('Error :', error);
        alert('유효성 검증 실패');
        return false;
      });
  }

  const handleRegister = () => {
    // POST 요청 보내기
    api.post(`/users`, {
      userId: id,
      password: password,
      name: name,
      address: address,
      phone: phone,
      age: age,
      email: email,
      sex: gender
    })
      .then(response => {
        console.log('Register successful:', response.headers);
        // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
      })
      .catch(error => {
        console.error('Error :', error);
        // 취소 실패 시 에러 처리를 수행할 수 있습니다.
      });
    alert("회원가입이 완료되었습니다!");
    // 모달 닫기
    onClose();
  };

  // const handleSignUp = () => {

  //   api.post(`/users/validation`, {
  //     userId: id,
  //     password: password,
  //     name: name,
  //     address: address,
  //     phone: phone,
  //     age: age,
  //     sex: gender,
  //     email: email
  //   })
  //     .then(response => {
  //       console.log('Regular Expression Successful: ', response.headers);
  //       alert('유효성 검증 성공');
  //       const handleRegister = () => {
  //         // POST 요청 보내기
  //         api.post(`/users`, {
  //           userId: id,
  //           password: password,
  //           name: name,
  //           address: address,
  //           phone: phone,
  //           age: age,
  //           email: email,
  //           sex: gender
  //         })
  //           .then(response => {
  //             console.log('Register successful:', response.headers);
  //             // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
  //           })
  //           .catch(error => {
  //             console.error('Error :', error);
  //             // 취소 실패 시 에러 처리를 수행할 수 있습니다.
  //           });
  //         // alert("회원가입이 완료되었습니다!");
  //         // 모달 닫기
  //         onClose();
  //       };
  //     })
  //     .catch(error => {
  //       console.error('Error :', error);
  //       alert('유효성 검증 실패');
  //       return false;
  //     });
  // }



  const onChangeId = (e) => {
    e.preventDefault();
    const currentId = e.target.value;
    const idRegExp = /^[a-zA-z0-9]{6,15}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("6~15자 사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
    setId(e.target.value);
  };

  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    const currentPassword = e.target.value;
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
    setPassword(e.target.value);
  };

  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    const currentPhone = currentNumber;
    const phoneRegExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsPhone(true);
    };
    setPhone(currentNumber);
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    const currentEmail = e.target.value;
    var emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
    setEmail(e.target.value);
  };

  const onChangeAddress = (e) => {
    const currentAddress = e.target.value;
    setAddress(currentAddress);
  };

  const onChangeGender = (e) => {
    const currentGender = e.target.value;
    console.log(currentGender);
    setGender(currentGender);
  };

  const onChangeAge = (e) => {
    const currentAge = e.target.value;
    console.log(currentAge);
    setAge(currentAge);
  };

  // 조건 추가해야함
  // function CheckValue () {
  //   if(id == "" || isId == false){
  //     alert('아이디를 입력해주세요!');
  //     return false;
  //   } else if (password == "" || isId == false){
  //     alert('비밀번호를 입력해주세요!');
  //     return false;
  //   } else if(name == "" || isName == false) {
  //     alert('이름을 입력해주세요!');
  //     return false;
  //   } else if(address == "" || isAddress == false){
  //     alert('주소를 입력해주세요!');
  //     return false;
  //   } else if(phone == "" || isPhone == false ){
  //     alert('전화번호를 입력해주세요!');
  //     return false;
  //   // } else if(gender == ""){
  //   //   alert('성별을 확인해주세요!');
  //   //   return false;
  //   } else if(age.value == "" || isAge == false){
  //     alert('나이를 입력해주세요!');
  //     return false;
  //   } else if(email == "" || isEmail == false){
  //     alert('이메일을 입력해주세요!');
  //     return false;
  //   }
  // };

  // 내가 새로 추가하다가 포기
  // const onChangeAge = (e) => {
  //   const currentAge = e.target.value;
  //   setAge(currentAge);

  //   console.log(currentAge);
  //   console.log(typeof parseInt(currentAge));
  //   console.log(typeof parseInt(currentAge) == 'number');
  //   console.log(currentAge);

  //   if(typeof currentAge != 'number'){
  //     setAgeMessage("나이는 숫자로 입력해주세요!")
  //     setIsAge(true);
  //   } else {
  //     setAgeMessage("");
  //     setIsAge(false);
  //   }
  // };

  // const onChangeId = (e) => {
  //   const currentId = e.target.value;
  //   setId(currentId);
  //   const idRegExp = /^[a-zA-z0-9]{4,12}$/;

  //   if (!idRegExp.test(currentId)) {
  //     setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
  //     setIsId(false);
  //   } else {
  //     setIdMessage("사용가능한 아이디 입니다.");
  //     setIsId(true);
  //   }
  // };

  // const onChangeName = (e) => {
  //   const currentName = e.target.value;
  //   setName(currentName);

  //   if (currentName.length < 2 || currentName.length > 5) {
  //     setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
  //     setIsName(false);
  //   } else {
  //     setNameMessage("사용가능한 닉네임 입니다.");
  //     setIsName(true);
  //   }
  // };

  // const onChangePassword = (e) => {
  //   const currentPassword = e.target.value;
  //   setPassword(currentPassword);
  //   const passwordRegExp =
  //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  //   if (!passwordRegExp.test(currentPassword)) {
  //     setPasswordMessage(
  //       "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
  //     );
  //     setIsPassword(false);
  //   } else {
  //     setPasswordMessage("안전한 비밀번호 입니다.");
  //     setIsPassword(true);
  //   }
  // };

  // const onChangePasswordConfirm = (e) => {
  //   const currentPasswordConfirm = e.target.value;
  //   setPasswordConfirm(currentPasswordConfirm);
  //   if (password !== currentPasswordConfirm) {
  //     setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
  //     setIsPasswordConfirm(false);
  //   } else {
  //     setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
  //     setIsPasswordConfirm(true);
  //   }
  // };

  // const onChangeEmail = (e) => {
  //   const currentEmail = e.target.value;
  //   setEmail(currentEmail);
  //   const emailRegExp =
  //     /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  //   if (!emailRegExp.test(currentEmail)) {
  //     setEmailMessage("이메일의 형식이 올바르지 않습니다!");
  //     setIsEmail(false);
  //   } else {
  //     setEmailMessage("사용 가능한 이메일 입니다.");
  //     setIsEmail(true);
  //   }
  // };

  // const onChangePhone = (getNumber) => {
  //   const currentPhone = getNumber;
  //   setPhone(currentPhone);
  //   const phoneRegExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;

  //   if (!phoneRegExp.test(currentPhone)) {
  //     setPhoneMessage("올바른 형식이 아닙니다!");
  //     setIsPhone(false);
  //   } else {
  //     setPhoneMessage("사용 가능한 번호입니다:-)");
  //     setIsPhone(true);
  //   }
  // };

  return (
    <>
      {isOpen && (
        <div className="main-register" onClick={onClose}>
          <div class="container">
            <section class="wrapper-register" style={{ maxWidth: '35rem' }} onClick={(e) => e.stopPropagation()}>
              <div class="heading">
                <h1 style={{ textAlign: 'center' }} class="text text-large" >회원가입</h1>
              </div>
              <form name="signin" class="form" onSubmit={handleRegister}>
                <p>{idMessage}</p>
                <div class="input-control">
                  <label for="id" class="input-label" hidden>id</label>
                  <input type="text" name="id" id="id" class="input-field" placeholder="아이디" onChange={onChangeId} />
                </div>
                <p>{passwordMessage}</p>
                <div class="input-control">
                  <label for="password" class="input-label" hidden>Password</label>
                  <input type="password" name="password" id="password" class="input-field" placeholder="비밀번호" onChange={onChangePassword} />
                </div>
                <div class="input-control">
                  <label for="name" class="input-label" hidden>name</label>
                  <input type="text" name="name" id="name" class="input-field" placeholder="이름" onChange={onChangeName} />
                </div>
                <div class="input-control">
                  <label for="address" class="input-label" hidden>address</label>
                  <input type="text" name="address" id="address" class="input-field" placeholder="주소" onChange={onChangeAddress} />
                </div>
                <p>{phoneMessage}</p>
                <div class="input-control">
                  <label for="tel" class="input-label" hidden>tel</label>
                  <input type="text" name="tel" id="tel" class="input-field" placeholder="전화번호" value={phone} onChange={addHyphen} />
                </div>
                <p>{ageMessage}</p>
                <div class="input-control">
                  <label for="age" class="input-label" hidden>age</label>
                  <input type="age" name="age" id="age" class="input-field" placeholder="나이" onChange={onChangeAge} />
                </div>
                <div style={{ marginLeft: 10 }}>
                  <input type='radio' id="female" name='gender' value='female' onChange={onChangeGender} />여성 &nbsp;
                  <input type='radio' id="male" name='gender' value='male' onChange={onChangeGender} />남성
                </div>
                <div class="input-control">
                </div>
                <p>{emailMessage}</p>
                <div class="input-control">
                  <label for="email" class="input-label" hidden>email</label>
                  <input type="text" name="email" id="email" class="input-field" placeholder="이메일" onChange={onChangeEmail} />
                </div>
                <div class="input-control">
                  <input style={{ margin: '0 auto' }} type="submit" name="submit" class="input-submit" value="가입하기" onClick={handleRegister} />
                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  )
};

export default Register;