import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedProducts ,removeSelectedProducts} from '../redux/actions/productAction'

const ProductDetail = () => {

    const { productId } = useParams();
    const product = useSelector((state)=>state.product);
    const { image, title, price, category, description } = product
    const dispatch = useDispatch();
    console.log("Product...",product);
    // console.log(product);

    const fetchProductDetail = async (id) => {
        const response = await axios 
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("Err..",err)
        });
        dispatch(selectedProducts(response.data));
    }
    
    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProducts());
        };
    },[productId]);

    return(
        <div className='ui grid container'> 
            {Object.keys(product).length === 0 ? (<div>...Loading</div>) : (
                <div className='ui placeholder segment'>
                    <div className='ui two column stackble center aligned grid'>
                        <div className='ui vertical divider'>VIEW</div>
                        <div className='middle aligned row'>
                        <div className='column lp'>
                            <img className='ui fluid image' src={image}/>
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex="0">
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductDetail