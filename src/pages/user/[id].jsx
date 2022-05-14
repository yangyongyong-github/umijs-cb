import React from 'react';

const index = (props) => {
  console.log('user page :', props);
  return (
    <div>
      <h1>User page</h1>
      <p>props id ：{props.match.params.id}</p>
    </div>
  );
};

export default index;