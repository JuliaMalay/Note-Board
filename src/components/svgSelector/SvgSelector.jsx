import React from 'react';

const SvgSelector = ({id}) => {
  switch (id) {
    case 'more':
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 426.667 426.667"
        >
          <g>
            <g>
              <circle cx="42.667" cy="213.333" r="42.667" />
            </g>
          </g>
          <g>
            <g>
              <circle cx="213.333" cy="213.333" r="42.667" />
            </g>
          </g>
          <g>
            <g>
              <circle cx="384" cy="213.333" r="42.667" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default SvgSelector;
