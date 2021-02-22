import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  render() {
    return (
        <div>
            <div className="first">
                <div className="menus">
                    <img src="images/ironhack-logo.svg" />
                    <img src="images/menu-top.svg" />
                </div>
    
                <div className="box">
                    <div className="info">
                        <h1>Say hello to ReactJS</h1>

                        <p>
                        You will learn how to use the most popular frontend library, and
                        become a super Ninja developer
                        </p>
                    </div>
                    <div className="leftside">
                        {/* <img src="images/react-logo.svg" className="react-img" /> */}
                    </div>
                </div>
                <button>Awesome!</button>
            </div>

            <div className="second">
                <div className="each">
                    <img src="images/icon1.png" />
                    <p>React makes it painless to create interactive UIs </p>
                </div>
                <div className="each">
                    <img src="images/icon2.png" />
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="each">
                    <img src="images/icon3.png" />
                    <p>A set of inmutabke values are passed to the component's</p>
                </div>
                <div className="each">
                    <img src="images/icon4.png" />
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#myApp"));
