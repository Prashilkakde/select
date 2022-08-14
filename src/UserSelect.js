import React from "react";
import DebounceSelect from "./DebounceSelect";

const UserSelect = () => {
  const [defaultValue, setDefaultValue] = useState([]);

  console.log(defaultValue);

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setDefaultValue(data);
  }, []);
};

export default UserSelect;
