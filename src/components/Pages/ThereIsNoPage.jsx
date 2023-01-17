import { Link } from "react-router-dom";
import Header from "../header/Header";
import classes from "./ThereIsNoPage.module.css"

const ThereIsNoPage = () =>{
    return(
        <div className="">
            <Header/>
            <div className={classes.ThereIsNoPage_container}>
                <h1 className={classes.ThereIsNoPage_title}>Ничего не найдено 😕</h1>
                <div className={classes.ThereIsNoPage_button_container}>
                    <Link to='/' className={classes.ThereIsNoPage_button}>На главную</Link>
                </div>
            </div>
        </div>
    )
}

export default ThereIsNoPage;
