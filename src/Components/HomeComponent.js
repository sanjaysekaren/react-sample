import React from 'react';
import {Link} from 'react-router-dom';
import {getUrl} from '../Services/apiUrl';
import ProductComponent from './ProductComponent';

class HomeCompoenent extends React.Component{
    state={app:[]}
    onbuttonclick=async ()=>{
        var res = await getUrl();
        console.log(res.data);
        this.setState({app:res.data},function(){
            console.log(res.data);
        });
        
    }
 
    render(){
        console.log('in homeapp');
        return(
            <div>
            <div>hi there click here</div>
            <button onClick={this.onbuttonclick}>click</button>
            <Link to='/product' >
                <button>Add Product</button>
            </Link>
            <ProductComponent details={this.state.app}/>
            </div>
        );
    }
}

export default HomeCompoenent;
