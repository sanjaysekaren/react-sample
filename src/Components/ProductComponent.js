import React from 'react';

class ProductComponent extends React.Component{

    render(){
        
        console.log('in proapp '+this.props.details);
        return(
            <div>
                {this.props.details.map((detail) =>
                    <div>
                        <h1 key="name">{detail.name}</h1>
            <h4 key="price">{detail.price}</h4>
            </div>
            )
                }
                </div>  
            );
        }
    }


export default ProductComponent;
