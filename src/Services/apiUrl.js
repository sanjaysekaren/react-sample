import Axios from 'axios';
// import React from 'react';

export const getUrl = async () =>{
    var response = await Axios.get('http://localhost:6300/api/getAllProductDetails');
    console.log(response);
    return response;
} 

export const postProductUrl = async (value) =>{
    let response =await Axios.post('http://localhost:6300/api/addNewProduct',value);
    console.log(response);
    return response;
}

