import React, { useState, useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import "./index.css";
import DebounceSelect from "./DebounceSelect";

const App = () => {
  // const [value, setValue] = useState([]);
  // const [defaultValue, setDefaultValue] = useState(["pk"]);
  // const [field, setField] = useState([]);
 

  // console.log("field", field);

  // useEffect(() => {
  //   field.map((item) => {
  //     setList([...list, { value: item.id, label: item.name }]);
  //   });
  // }, [field]);

  // useEffect(() => {
  //   const newList = [];
  //   field.map((ele) => newList.push({ value: ele.id, label: ele.name }));

  //   setList([...newList]);
  // }, [field]);

  // console.log("list", list);

  // console.log("field", field);

  // console.log("value", value);
  // console.log("defaultvalue", defaultValue);

  // Usage of DebounceSelect
  async function fetchUserList(name) {
    console.log("fetching user", name);
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (body) =>
          body.map((user) => ({
            label: `${user.name}`,
            value: user.name,
          }))
        // setDefaultValue(
        //   body.map((user) => ({
        //     label: user.name,
        //     value: user.id,
        //   }))
        //   // { label: body.name, value: body.name }
        // )
      );
  }

  return (
    <Fragment>
      <DebounceSelect
        mode="multiple"
        // value={value}
        placeholder="Select users"
        fetchOptions={fetchUserList}
        // onChange={(newValue) => {
        //   setValue(newValue);
        // }}
        style={{
          width: "100%",
        }}
        // defaultValue={defaultValue}
        // setDefaultValue={setDefaultValue}
        // value={value}
        // setValue={setValue}
        // field={field}
        // newList={newList}
        // list={list}
        // setList={setList}
        // field={field}
      />
    </Fragment>
  );
};

export default App;

// https://randomuser.me/api/?results=5

// {field.map((item) => {
//   setList([...item, { value: item.id, label: item.name }]);
// })}
