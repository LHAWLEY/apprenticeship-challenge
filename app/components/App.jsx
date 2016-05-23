import uuid from 'node-uuid';
import React from 'react';
import Table from './Table.jsx';
import Title from './Title.jsx';
import Form from './Form.jsx';

export default React.createClass({

  getInitialState() {
    return {
      item: '',
      price: '',
      weight: '',
      list: [
        {
          item: 'Milk',
          sku: uuid.v4(),
          price: "$2.00",
          weight: "3lbs"
        },
        {
          item: 'Eggs',
          sku: uuid.v4(),
          price: "$1.50",
          weight: "1lbs"
        },
         {
          item: 'Orange Juice',
          sku: uuid.v4(),
          price: "$3.00",
          weight: "2lbs"
        }
      ]
    };
  },

  update (key, value) {
    var newState = {};
    newState[key] = value;

    this.setState(newState);
  },

  addItem (e) {
    e.preventDefault();

    var updatedList = this.state.list
    updatedList.push({
      item: this.state.item,
      sku: uuid.v4(),
      price: this.state.price,
      weight: this.state.weight
    });

    this.setState({
      list: updatedList
    });
  },

  removeItem (givenSku) {
    var updatedList = this.state.list.filter(row =>
      row.sku !== givenSku
    );

    this.setState({
      list: updatedList
    });
  },

  render(){
    return (
      <div>
        <Title />
        <Table rowList={this.state.list} removeItem={this.removeItem} />
        <Form
          update={this.update}
          addItem={this.addItem}
          row={this.state.list[0]}
          hideFields={['sku']}
        />
      </div>
    );
  }
});