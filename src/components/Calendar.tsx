import styles from "../scss/layout.scss";
import React, {useState, useEffect} from "react";
import moment from "moment";
const Calendar = () =>{
    let now = moment();
    now.format("YY/MM/DD");
    const week:string[] =['월','화','수','목','금','토','일'];
    return(
        <div>
            
        </div>
    )
}

export default Calendar;
