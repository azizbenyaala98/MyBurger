import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Augz from '../../hoc/Augz'
class BurgerBuilder extends Component {
    
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }

    }

    render() {
        return (
           <Augz>
               <Burger ingredients={this.state.ingredients}/>
               <div>Build Controls</div>

           </Augz>
        );
    }
}

export default BurgerBuilder;