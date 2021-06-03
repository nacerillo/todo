import { useState } from "react";
import axios from "axios";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const useAjax = () => {
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    //console.log(item);
    item.due = new Date();
    fetch(todoAPI, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  /*const _getToDoItems = async () => {
    fetch(todoAPI, {
      method: "get",
      mode: "cors",
    })
      .then((data) => data.json())
      .then((data) => setList(data.results))
      .catch(console.error);
  };*/

  const _getToDoItems = async () => {
    let rawData = await axios(todoAPI).then((response) => response.data);
    console.log(rawData);
    setList(rawData.results);
  };

  const _toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  const _deleteToDoItem = (id) => {
    fetch(`${todoAPI}/${id}`, {
      method: "delete",
      mode: "cors",
    })
      .then(() => _getToDoItems())
      .catch(console.error);
  };

  return [_addItem, _toggleComplete, _getToDoItems, _deleteToDoItem, list];
};

export default useAjax;
