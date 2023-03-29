import React from 'react';
import Form from './components/Form';
import TasksList from './components/TasksList';
import SortButtons from './components/SortButtons';
import SearchInput from './components/SearchInput';
import Task from './components/Task';
import './styles.css';

console.clear();

class App extends React.Component {
  state = {
    list: [
      {
        value: 'hardcoded',
        completed: false,
        id: new Date().valueOf(),
        priority: 0
      }
    ],
    value: '',
    searchInput: '',
    sort: null
  };

  handleValueChange = (element, newValue) => {
    const newList = this.state.list.filter((item) => {
      if (element.id === item.id) {
        item.value = newValue;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  handleSubmit = (value) => {
    if (value === '') {
      return;
    }
    const item = {
      value,
      completed: false,
      id: new Date().valueOf(),
      priority: 0
    };
    const newList = [...this.state.list, item];
    this.setState({ list: newList });
  };

  handleToggle = (item) => {
    const newList = this.state.list.map((element) => {
      if (element.id === item.id) {
        element.completed = !element.completed;
      }
      return element;
    });
    this.setState({ list: newList });
  };

  handleRemove = (item) => {
    const newList = this.state.list.filter((element) => {
      return element.id === item.id ? false : true;
    });
    this.setState({ list: newList });
  };

  handleSearch = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleDecrementPriority = (item, e) => {
    console.log(e);
    const newList = this.state.list.map((element) => {
      if (element.id === item.id && item.priority > 0) {
        item.priority--;
      }
      return element;
    });
    this.setState({ list: newList });
  };
  handleIncrementPriority = (item, e) => {
    console.log(e);
    const newList = this.state.list.map((element) => {
      if (element.id === item.id && item.priority < 10) {
        item.priority++;
      }
      return element;
    });
    this.setState({ list: newList });
  };

  handlePriorityChange = () => {};

  handleSort = (e) => {
    const option = e.target.value;
    if (option.toLowerCase().includes('original')) {
      this.setState({ sort: null });
    }
    if (option.toLowerCase().includes('ascending')) {
      this.setState({ sort: true });
    }
    if (option.toLowerCase().includes('descending')) {
      this.setState({ sort: false });
    }
  };

  render() {
    const { list, sort, searchInput } = this.state;

    const listItems = list.filter((item) =>
      item.value.toLowerCase().includes(searchInput)
    );

    if (sort === true) {
      listItems.sort((a, b) => {
        return a.priority - b.priority;
      });
    }
    if (sort === false) {
      listItems.sort((a, b) => {
        return b.priority - a.priority;
      });
    }

    return (
      <div className="App">
        {/* <Form handleSubmit={this.handleSubmit} />
        <SearchInput handleSearch={this.handleSearch} />
        <SortButtons handleSort={this.handleSort} />

        <TasksList
          list={listItems}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove}
          hendleDecrementPriority={this.handleDecrementPriority}
          hendleIncrementPriority={this.handleIncrementPriority}
          handleSubmit={this.handleSubmit}
          handleValueChange={this.handleValueChange}
        />
        <div className="welcome-text">
          <span className="name">Hello, John!</span>
          <p className="greeting">Manage All Your Regular Tasks</p>
        </div> */}
        <div className="test">
          <div className="data-container">
            <div className="profile-wrapper">
              <img src="https://i.pravatar.cc/44?img=12" />
              <p>Hello, JSON!</p>
            </div>
            <div className="date">
              <p className="current-date">Theusday, 28 March 2023</p>
              <img src="https://img.icons8.com/emoji/24/null/writing-hand.png" />
            </div>
            <span className="tasks-count">5 tasks</span>
            <input type="search" placeholder="Search tasks..."></input>
            <button className="btn new-task-btn">+ Add New Task</button>
          </div>
        </div>

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    );
  }
}

export default App;
