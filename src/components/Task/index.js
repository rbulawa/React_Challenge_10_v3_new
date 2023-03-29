import React from 'react';

console.clear();

class Task extends React.Component {
  state = {};

  render() {
    return (
      <div className="task-wrapper">
        <div className="task-header-wrapper">
          <div>
            <div className="title-wrapper">
              <span className="color-pin"></span>
              <div>
                <p className="task-title">
                  This is a random test text for the task title
                  aaaaaaaaaaaaaaaaaasaddddd
                </p>
              </div>
            </div>
          </div>
          <div className="task-options-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              stroke="#313131"
              className="w-6 h-6"
              width="24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Task;
