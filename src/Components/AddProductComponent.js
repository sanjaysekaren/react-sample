import React from 'react';
import {postProductUrl} from '../Services/apiUrl';

class AddProductComponent extends React.Component {
    state={name:'',price:0}
    
    formSubmit=(e)=>{
        e.preventDefault();
    }
    handleNameEvent=(event)=>{
        console.log('name');
        this.setState({name:event.target.value});
    }
    handlePriceEvent=(event)=>{
        console.log('price');
        this.setState({price:event.target.value})
    }
    AddNewProduct = ()=> {
        console.log('addproduct');
        var value={
            name:this.state.name,
            price:this.state.price
        }
        console.log(value);
        postProductUrl(value);
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <h1>Name:</h1><input type="text" onChange={this.handleNameEvent}></input>
                    </div>
                    <div>
                        <h1>Price:</h1><input type="number" onChange={this.handlePriceEvent}></input>
                    </div>
                    <button onClick={this.AddNewProduct}>Add</button>
                </form>
            </div>
        );
    }
}


export default AddProductComponent;
