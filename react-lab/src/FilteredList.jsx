import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    /*DONE: (FilteredList): Add 2 additional state variables within this.state called "type" and "search" and set them to a default value. 
     *Default value for "type" is "all" and for "search" is "". */
    this.state = {     
      search: "",
      type: "all"
    };
  }

  

  /*Sets the state whenever the user types on the search bar. 
   *TIP: Get the target value of the event. Before setting the search state, 
   *remove whitespace from both ends of a search string and covert it to lowercase. 
  */
  onSearch = event => {
    var newString = event.target.value.trim().toLowerCase();
    //DONE: Set the state of the search in this.setState
    this.setState({search: newString});
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //DONE: Set the state of the filter type in this.setState
    this.setState({type: event});
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    // DONE: add conditions to check if item type is equal to selected type
    if (this.state.type == "all" || item.type == this.state.type) {
      return true;
    }

    else {
      return false;
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Cereal Search</h1>
        {/*DONE: Add more menu items with onSelect handlers*/}
        <DropdownButton title="Type" id="dropdown-basic-button" onSelect={this.onSelectFilterType} /*DONE: Call onSelectFilterType when DropdownButton is clicked*/>
          <Dropdown.Item eventKey="all">
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Square"> 
            Square
          </Dropdown.Item>
          <Dropdown.Item eventKey="Circular">
            Circular
          </Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterAndSearch)} />
        
        {/*<p>{this.state.search}</p> For: Debugging purpsoses*/}
        {/*<p>{this.state.search.length}</p> For: Debugging purpsoses*/}
        {/*<p>{this.state.type}</p> For: Debugging purpsoses*/}
      </div>
    );
  }
}

export default FilteredList;
