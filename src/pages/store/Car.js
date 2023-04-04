import React from "react";
//import mybach from '../mybach.jpeg'

const car = [
    { id: 0, name: "MYBACH", price: "28000", content: "President Lee Gil Yeo's car"},
    { id: 1, name: "GRANDEUR", price: "\u00A0\u00A04500  ", content: "Graceful design"},
    { id: 2, name: "BMW     ", price: "\u00A0\u00A07800  ", content: "Functional of high level"},
    { id: 3, name: "BENZ    ", price: "\u00A0\u00A09800  ", content: "High Price"},
    { id: 4, name: "AUDI    ", price: "\u00A0\u00A08000  ", content: "Nice Cornering"},
    { id: 5, name: "GENESIS ", price: "\u00A0\u00A06700  ", content: "Popular Car"}
];

const CarItem = ({car}) => (
    <tr>
        <td> {"\u00A0\u00A0"} [{car.id}]  {car.name}{"\u00A0\u00A0"} </td>
        <td> {"\u00A0\u00A0"} {car.price}{"\u00A0\u00A0\u00A0"} </td>
        <td> {"\u00A0\u00A0"} {car.content} </td>
    </tr>
);
const style = {
    marginBottom: "0.5em"
}

const Car = () =>{    
    return (
        <div>
            <h2 style={style}>Car List</h2>
            

            <table>
                <tbody>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    {car.map((c)=>(
                <CarItem car = {c}/>
            ))}
                    
                </tbody>
            </table>
        </div>
    );
};

export default Car;
