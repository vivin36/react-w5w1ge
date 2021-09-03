import React from 'react';

let ListData = ({ data }) => {
  return (
    <p>
      <table>
        <th>User Id</th>
        <th>Title</th>
        <th>Body</th>
        {data.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <tr>{item.title}</tr>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
    </p>
  );
};

export default ListData;
