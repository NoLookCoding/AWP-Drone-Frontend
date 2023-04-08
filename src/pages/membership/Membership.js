import React, { useState, useEffect } from 'react';
import './Membership.css'

const memberInfo=[
  {id:0,name:"문희상",stdId:20190001,info:"소프트웨어학과 3학년",git:"깃허브주소",sns:"인스타주소",img:"d"},
  {id:1,name:"신승건",stdId:20190002,info:"소프트웨어학과 3학년",git:"깃허브주소",sns:"인스타주소",img:"s"},
  {id:2,name:"이승민",stdId:20190003,info:"소프트웨어학과 3학년",git:"깃허브주소",sns:"인스타주소",img:"d"},
  {id:3,name:"이승원",stdId:20190004,info:"소프트웨어학과 3학년",git:"깃허브주소",sns:"인스타주소",img:"3"},
  {id:4,name:"이현석",stdId:20190005,info:"소프트웨어학과 3학년",git:"깃허브주소",sns:"인스타주소",img:"43"}
]


const OneMember = (props) => {

  const member = props.member;

  return(
    <div className="membership-member-frame">
      <div className="membership-member-image" 
      // style={{backgroundImage: `url(${member.img})`}}
      />
      <div className="membership-member-content"/>
    </div>
  );
}

const Member = () => {

  return (
    <>
      <div className="membership-frame">
        <div className="membership-content-frame">
        {memberInfo.map(member => (
             <Member member={member}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default Member;
