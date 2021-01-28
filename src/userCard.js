import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let data = this.props.d;
    let data_el = data.map((el) => (
      <Card className="cards" key={el.login.md5} style={{ width: "12rem" }}>
        <Card.Img variant="top" src={el.picture.large} />
        <Card.Body>
          <Card.Title>
            <p>
              {el.name.first} {el.name.last}
            </p>
          </Card.Title>
          <p>Пол: {el.gender}</p>
          <p>Возраст: {el.dob.age}</p>
          <p>Дата рождения: {Date(el.dob.date)}</p>
          <Card.Text>
            <p>Место проживания:</p>
            {el.location.country} {el.location.state}
            {el.location.cuty} {el.location.street.name}
            {el.location.street.number}
          </Card.Text>
          <p>E-mail: {el.email}</p>
          <p>Телефон: {el.phone}</p>
        </Card.Body>
      </Card>
    ));

    //console.log("data", data_el);
    return data_el;
  }
}

export default OneCard;
