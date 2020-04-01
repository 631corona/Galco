import React, { Component } from 'react';

import './HomePage.css';
import PopUp from '../UI/PopUp/PopUp';

class HomePage extends Component {
    state = {
        showPopUp: false
    };



    popUpClosedHandler = () => {
        this.setState({ showPopUp: false })
    }

    render() {
        return (
            <div className="HomePage">
                <p className="HomePage">
                    ברוכים הבאים לאתר הקורונה
            <br />
                    לנוכח המציאות הלא פשוטה בה אנו נמצאים
            <br />
                    אנו כאן כדי לאפשר אחיזה פשוטה ומהירה בתמונת המצב הנוכחית
             <br />
                    ♥ רק בריאות
                 </p>
                {this.state.showPopUp ? <PopUp show={this.state.showPopUp} popUpClosed={this.popUpClosedHandler} /> : null}
            </div>
        );

    }
}

export default HomePage;