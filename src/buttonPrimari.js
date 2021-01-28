import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import "./buttonPrimari.css";
import Preloader from "./preloader";

import Content from "./userList";

class ButtonPrime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isOpen: false,
      isLoaded: false,
      isClick: false,
      sort_content: []
    };
  }

  gettingData() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sort_content: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    //console.log("all_state", this.state);
    const content = this.state.isOpen && (
      <Content data_sort={this.state.sort_content} />
    );

    const { error, isLoaded, isClick } = this.state;
    if (error) {
      return <p>Error{error.message}</p>;
    } else if (isLoaded && isClick) {
      return (
        <div className="container block_hidden" id="block_hidden">
          <div className="row" id="block_group">
            {content}
          </div>
        </div>
      );
    } else if (!isLoaded && isClick) {
      return <Preloader />;
    } else {
      return (
        <div>
          <div className="container">
            <div className="row button_row">
              <Button
                onClick={this.onBtnAction}
                variant=" btn-outline-primary btn-lg btn-block click_button"
              >
                Сделать Запрос
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
  handlerClick = () => {
    //console.log("preloader2", this.state.isLoaded);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onBtnAction = () => {
    this.gettingData();
    this.handlerClick();
    this.setState({
      isClick: true
    });
  };
}

export default ButtonPrime;
