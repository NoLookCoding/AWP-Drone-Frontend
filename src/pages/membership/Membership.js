import React, { useState, useEffect } from 'react';
import './Membership.css'

import {BsGithub,BsInstagram} from 'react-icons/bs';

const memberInfo=[
  {id:0,name:"문희상",stdId:201935043,info:"소프트웨어학과 3학년",git:"https://github.com/codrin2",sns:"https://www.instagram.com/hsang_ss/",img:"https://img.khan.co.kr/news/2022/09/05/news-p.v1.20220905.d165de06863949908e0e4bf557ecaf5a_P1.jpg"},
  {id:1,name:"신승건",stdId:201935069,info:"소프트웨어학과 3학년",git:"https://github.com/SeungGun",sns:"https://www.instagram.com/win._.gun1108/",img:"https://avatars.githubusercontent.com/u/54919474?v=4"},
  {id:2,name:"이승민",stdId:201935100,info:"소프트웨어학과 3학년",git:"https://github.com/1109min",sns:"https://www.instagram.com/seungminister_/",img:"https://openimage.interpark.com/goods_image_big/8/9/7/6/8913288976c_l.jpg"},
  {id:3,name:"이승원",stdId:201935101,info:"소프트웨어학과 3학년",git:"https://github.com/seungwon7934",sns:"https://www.instagram.com/seungwon7934/",img:"https://img.khan.co.kr/news/2022/10/09/l_2022101001000403800029931.jpg"},
  {id:4,name:"이현석",stdId:201935114,info:"소프트웨어학과 3학년",git:"https://github.com/Hyunstone",sns:"https://www.instagram.com/hyunsseekkk/",img:"https://blog.kakaocdn.net/dn/beMPSu/btrgnqCbc7y/BUAB9jEUnrK6me2f5WJnTk/img.jpg"}
]


const OneMember = (props) => {
  const [isGHovering, setIsGHovering] = useState(false);

  const mouseOverGit = (e) =>{
    setIsGHovering(true);
  } 
  const mouseOutGit = (e) =>{
    setIsGHovering(false);
  } 
  const [isIHovering, setIsIHovering] = useState(false);

  const mouseOverInsta = (e) =>{
    setIsIHovering(true);
  } 
  const mouseOutInsta = (e) =>{
    setIsIHovering(false);
  } 
    const handleClick = (link) => {
      window.open(link,'new');
    };

  const member = props.member;

  return(
    <div className="membership-member-frame">
      <div className="membership-member-image" 
       style={{backgroundImage: `url(${member.img})`}}
      >
      </div>
      
      <div className="membership-member-content">
      <div className="membership-member-name">{member.name}</div>
      <div className="membership-member-stdId">{member.stdId}</div>
      <div className="membership-member-info">{member.info}</div>
      <div className="membership-member-git">
        <BsGithub onClick={() => handleClick(member.git)} onMouseOver={(e) => mouseOverGit(e)} onMouseOut={(e) => mouseOutGit(e)} style={{color:`${isGHovering ? `#2400FE` :`#000000`}`, width:`30px`, height:'30px', marginRight:`15px`}}/>
        <BsInstagram onClick={() => handleClick(member.insta)}onMouseOver={(e) => mouseOverInsta(e)} onMouseOut={(e) => mouseOutInsta(e)} style={{color:`${isIHovering ? `#dd2a7b` :`#000000`}`, width:`30px`, height:'30px', marginLeft:`15px`}}/>
        </div>
      </div>
    </div>
  );
}

const Member = () => {

  return (
    <>
      <div className="membership-wave">
      <div className="membership-ship">
        <div className="membership-content-frame">
        {memberInfo.map(member => (
             <OneMember member={member}/>
            ))}
        </div>
      </div>
      </div>

    </>
  );
}

export default Member;
