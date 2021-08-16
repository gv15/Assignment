import React,{useEffect, useState} from 'react';
import "../dashboard.css";
import BMC from "../BMC.jpg"
import axios from 'axios';
import config from '../utils/appconfig';
import { useHistory } from 'react-router-dom';
const Dashboard = (props)=>{
    const history = useHistory();
    const [products, changeProducts] = useState([]);
    useEffect(()=>{
        axios.get(config.serverUrl.getproducts)
        .then((response)=>{
            console.log(response.data)
           changeProducts(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    function logout(){
        props.togglelogin();
        history.replace("/");
    }
    return(
        <div>
            <div id="dashboard-head">
                <div className="options" id="orders">
                    My Orders
                </div>
                <div className="options" id="items">
                    Items in cart
                </div>
                <div class='options' onClick={logout}>Logout</div>
                <img className="item-3" src={BMC} alt="Brain Mentors circular"/>
            </div>
            <div className="products" >
               {   
                    products.map(
                        (product, index)=>{
                           return(
                               <div key={index} className="product">
                                    <img src={product.snippet.thumbnails.medium.url} />
                                    <p><strong>{product.snippet.title}</strong></p>
                               </div>
                           )

                        }
                    )
                }
            </div>
        </div>
    )
}
export default Dashboard;