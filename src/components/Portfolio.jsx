import '../App.scss';
import Item from "../components/Item"

const Portfolio = () => {

    return (

        <><h1>Main Projects</h1><section className="main-products">
            {productList.map((p, index) => (
                <Item key={index} product={p} />
            ))}
        </section></>

    )

}
export default Portfolio;