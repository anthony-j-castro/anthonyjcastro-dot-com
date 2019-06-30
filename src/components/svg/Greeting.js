import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  const { className } = props;
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.7 301.6">
      <path d="M210.8 155.5c-6 16.8-15 32.5-26.4 46.2-6.7 8-15.1 15.9-25.6 16.6-4.5.3-6.3 6-6.8 10.5-.6 4.4-1.1 8.7-1.7 13.1-.8 6.4-1.6 13.2 1.2 19 2.8 5.8 10.8 9.5 16 5.7 11.7-8.7 23.4-17.4 35.1-26.2 2.3-1.7 5.5-3.5 7.8-1.7 2.7 2 1 6.2-.9 9-8.1 11.9-16.8 24-29.3 31.2s-29.7 8.1-40.3-1.5c-11.1-10-11.5-27.1-9.3-41.9 4.3-29 15.8-57 33.2-80.6 6.5-8.9 14.2-17.4 24.3-22 7.8-3.5 18.5-3.6 23.2 3.6 3.5 5.5 1.7 12.8-.5 19m-22.2 4.3c1.4-2.1 2.3-5.6-.1-6.4-5.8 7.5-11.4 15.2-16.8 23-3.1 4.5-6.3 9.3-6.7 14.8 1.2 1.2 3.2-.4 4.2-1.8 6.4-9.9 12.9-19.7 19.4-29.6zM305.9 244c1.2 1.5.9 3.6.4 5.5-1.6 6.4-3.6 12.9-7.6 18-4.1 5.2-10.6 8.9-17.1 7.9-6.5-.9-11.7-6.2-14.2-12.2-2.5-6-2.7-12.8-2.5-19.3.7-22 5.8-43.7 11.3-65 10.4-40.8 22.2-81.1 35.5-121 2.2-6.6 6.5-14.6 13.4-13.7 4.5.6 7.6 5.2 8.1 9.8s-1.2 9-2.7 13.3c-13.7 37.8-25.3 76.2-35 115.2-6.1 24.6-11.4 49.8-9.6 75 3.7-3.7 7.4-7.4 11.1-11.2 2.4-2.5 6.7-5 8.9-2.3zM11.4 301.6c-5.3.2-9.7-4.6-10.9-9.7s0-10.5 1.2-15.7C19.5 197 30.5 116.4 34.3 35.4c.1-2.1.2-4.4 1.3-6.2 2.9-4.8 10.8-3.6 14.2.8s3.6 10.5 3.5 16.1c-.5 43.1-5 86.2-13.5 128.5-.5 2.5 3.6 2.8 6 1.9 21.4-8.4 42.8-16.8 64.3-25.3 1.4-.6 3.1-1.4 3.2-2.9 4.2-39.7 8.4-79.5 12.5-119.2.5-5.1 1.6-11.1 6.2-13.5 5-2.6 11.5 1.2 13.8 6.3s1.7 11.1 1 16.8c-9.2 75.6-18.4 151.1-27.5 226.7-.6 4.7-1.2 9.6-3.7 13.7s-7.4 7-12 5.7c-7.7-2.2-8.1-12.9-6.8-20.8 5.1-32.4 10.2-64.9 15.3-97.3-19.5 11.7-40.3 21.1-62 27.8-6.2 1.9-13.6 4.8-14.5 11.2-3.9 25.9-7.9 51.9-11.8 77.8-1.2 7.9-4.5 17.7-12.4 18.1zM250 260.7c-4.2 5.6-11 10.5-17.8 8.7-9.9-2.7-11-16.2-9.6-26.4 8.7-62.3 32.7-121.8 40.8-184.2 1-7.5 3.9-17.1 11.5-17.1 4.6 0 8.4 4.2 9.4 8.7s0 9.2-1.1 13.7c-13.9 59.7-27.7 119.4-41.6 179.1 3.1 1.3 7.2-1.3 7.3-4.7 8 3.1 6.2 15.3 1.1 22.2zM401.3 149.3c-1.5-7.8-.6-15.9.6-23.8 1.8-12.5 4.1-25 6.7-37.4 5.7-26.9 13.5-53.5 14.8-80.9.2-5 6.3-8.3 11.1-6.8s7.9 6.3 8.8 11.3c.9 4.9-.1 10-1.1 14.9-8 40.5-17.5 80.7-28.3 120.5-1.2 4.4-4.5 10-8.8 8.4-2.3-.9-3.3-3.7-3.8-6.2zM337.3 231.1c2.5 1.2 5.3-.8 7.2-2.8 15.9-16.3 24.7-39.3 23.6-62.1-.4-7.8-2.1-16.1-7.7-21.7-3.1-3.1-7.8-6.8-6.1-10.9 1.5-3.6 6.6-3.5 10.2-2.2 9.8 3.7 17 12.8 20.4 22.7 3.4 10 3.3 20.8 2.1 31.2-2.9 24.2-13.6 48.9-34.3 61.6-8 4.9-18.5 7.7-26.4 2.6-9.7-6.2-9.8-20.3-7.8-31.6 4.1-22.2 12.3-43.7 24.1-62.9 2.8-4.6 7.1-9.7 12.4-8.8 4.7.8 7.4 6.2 7 11-.4 4.8-3 9-5.4 13.1-10.4 18.8-17.1 39.6-19.3 60.8zM419.3 251.5c.3 2.5.4 5.2-.7 7.4-2.2 4.3-8 5-12.8 4.7-1.8-.1-3.7-.3-5.2-1.1-5-2.8-4.2-10.2-2.5-15.6 1.2-3.7 2.5-7.4 3.9-11 1.1-2.8 2.4-5.8 4.8-7.6 2.4-1.8 6.4-2 8.2.4.8 1.1 1.1 2.4 1.4 3.7 1.3 6.3 2.2 12.7 2.9 19.1z" />
    </svg>
  );
};

Greeting.propTypes = {
  className: PropTypes.string,
};

Greeting.defaultProps = {
  className: '',
};

export default Greeting;
