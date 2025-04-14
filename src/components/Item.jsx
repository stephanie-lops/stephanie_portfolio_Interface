
import { Link } from "react-router-dom";

export default function Item({product}) {

    return (
        <article className="product">
            
            <Link to={`/products/${product.id}`} state={{ p: product } } >
                <img src={product.image} alt="product"/>
            </Link>

            <p className="name-product">{product.title}</p>

        </article>

    );
}