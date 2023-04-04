import React from "react";

const user = [
    { name: "SeungMin Lee", product: "BENZ S Class", price: "120000", date: "2023-03-06"}
];
const style = {
    marginBottom: "0.5em"
}

const UserInfoItem = ({user}) => (
    <div>
        <span> {"\u00A0\u00A0"} Customer name: {user.name}<br></br>
                {"\u00A0\u00A0"} Product: {user.product}<br></br>
                {"\u00A0\u00A0"} Price: {user.price}<br></br>
                {"\u00A0\u00A0"} Date: {user.date}
            </span>
    </div>
);

const User = () =>{
    return (
        <div>
            <h2 style={style} >Customer Informtaion</h2>
            {user.map((info)=>(
                <UserInfoItem user = {info}/>
            ))}
        </div>
    );
};

export default User;
