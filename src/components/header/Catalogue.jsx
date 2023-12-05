import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../../app/firebase";
import { Link } from "react-router-dom";
import module from "./Catalogue.module.scss";

const Catalog = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    console.log(categories);

    async function getData() {
        const q = query(collection(database, "category"));
        const querySnapshot = await getDocs(q);
        let category = [];
        querySnapshot.forEach((doc) => {
            category.push({ ...doc.data(), id: doc.id });
            console.log(doc.id);
        });
        setCategories(category);
    }

    const handleHover = (event) => {
        event.target.style.background = "lightgray";
        event.target.style.color = "black";
    };

    const handleLeave = (event) => {
        event.target.style.background = "white";
        event.target.style.color = "gray";
    };

    const showAllCategory = categories.map((category, index) => {
        return (
            <div className={module.container} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <div className={module.maincard}>
                    <Link className={module.link} to={`/shop-template/category/${category.id}`}>
                        <Card text="123123" key={index}>
                            <p>
                                {" "}
                                <Card.Img variant="top" src={category?.img} />
                            </p>
                            <Card.Body>
                                <Card.Title className={module.title}>{category.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className={module.container1}>
            {" "}
            <h2>Выберите категорию: </h2>
            {/*showAllProducts*/}
            <CardGroup>
                <div className={module.container2}>{showAllCategory}</div>
            </CardGroup>
        </div>
    );
};

export default Catalog;