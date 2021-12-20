import React from "react";
import classes from './Layout.module.css';
import Augz from '../../hoc/Augz';
const layout =(props)=>(
    <Augz>
    <div> toolbar sidebar backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main >
    </Augz>
);
export default layout;