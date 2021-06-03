import { useState } from "react";

const useForm = (action) => {
  console.log("Action: ", action);
  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    console.log("Action: ", action);
    console.log("item: ", item);
    if (e) {
      e.preventDefault();
      action(item);
    }
  };

  const handleInputChange = (e) => {
    setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  };
  return [handleSubmit, handleInputChange, item];
};

export default useForm;
