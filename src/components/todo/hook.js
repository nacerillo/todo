import { useState } from "react";

const useForm = (action) => {
  const [items, setItems] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    action(items);
  };

  const handleInputChange = (e) => {
    setItems((items) => ({ ...items, [e.target.name]: e.target.value }));
  };

  return [handleSubmit, handleInputChange];
};

export default useForm;
