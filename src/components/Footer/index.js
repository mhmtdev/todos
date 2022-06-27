import React from "react";

function Footer() {
  return (
    <div>
      <span class="todo-count">
        <strong>2</strong>
        items left
      </span>

      <ul class="filters">
        <li>
          <a href="#/" class="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button class="clear-completed">Clear completed</button>
    </div>
  );
}

export default Footer;
