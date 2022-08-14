import React, { useMemo, useRef, useState,useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Select, Spin } from "antd";
import debounce from "lodash/debounce";

function DebounceSelect({
  fetchOptions,
  debounceTimeout = 800,
  //   defaultValue,
  //   setDefaultValue,
  //   field,
  // list,
  // setList,
  // field,

  ...props
}) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(3);
  const [list, setList] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // setField(data);
        data.map((curr)=>{
          setList([...data,{label:curr.name, value:curr.id}])
        })
      });
  }, []);

  console.log("list", list);
  //   console.log("defaultValue", defaultValue);
  //   console.log("field", field);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      defaultValue={{label:"kl"}}
      //   labelInValue
      // filterOption={false}
      // filterOption={(name, option) =>
      //   option.props.children.toLowerCase().indexOf(name.toLowerCase()) >= 0
      // }
      // showSearch
      // optionFilterProp="children"
      onSearch={debounceFetcher}
      //   showSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
      // value={list[1]}
      onChange={(value) => setList(value)}
    />
  );
}
export default DebounceSelect;
