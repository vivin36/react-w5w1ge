import React from 'react';

let ListData = ({ data, clickedInChild, children }) => {
  const clickedData = (id, e) => console.log('clicked id => ', id, 'e', e);
  return (
    <p>
      <p style={{ color: 'red' }}>{children}</p>
      <table>
        <th>User Id</th>
        <th>Title</th>
        <th>Body</th>
        {data.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <tr onClick={e => clickedInChild(item.title, e)}>{item.title}</tr>
              <td>
                <button
                  onClick={e => clickedData(item.id, e)}
                  style={{ color: 'red', backgroundColor: 'black' }}
                >
                  click this button
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </p>
  );
};

export default ListData;
