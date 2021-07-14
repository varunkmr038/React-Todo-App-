import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Note from "./Note";
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "white",
    width: "30%",
    borderRadius: "5px",
    outline: "none",
    padding: "6px",
  },

  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "green",
    },
  },

  checkBtn: {},
}));

const Todo = () => {
  const classes = useStyles();

  const [data, setData] = useState("");
  const [id, setId] = useState(-1);

  const lists = JSON.parse(localStorage.getItem("Todo"));
  const [items, setItems] = useState(lists ? lists : []);
  localStorage.setItem("Todo", JSON.stringify(items));

  const addItem = (e) => {
    if (!data) return;

    setItems([...items, data]);
    setData("");

    localStorage.setItem("Todo", JSON.stringify(items));
  };

  const updateItem = (id) => {
    items[id] = data;
    setItems(items);
    setData("");

    localStorage.setItem("Todo", JSON.stringify(items));
    setId(-1);
  };
  const removeAll = (e) => {
    if (window.confirm("Do you really want to clear ?")) {
      localStorage.clear();
      setItems([]);
    }
  };

  return (
    <>
      <h5 className="my-3">Add Your List Here 👋</h5>
      <TextField
        className={` mb-3 ${classes.input}`}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: <InputAdornment position="start">✍️</InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              {id >= 0 ? (
                <EditOutlinedIcon
                  className={classes.icon}
                  onClick={() => updateItem(id)}
                />
              ) : (
                <Icon
                  className={`fa fa-plus-circle ${classes.icon}`}
                  color="primary"
                  title="Add Item"
                  onClick={(e) => addItem(e)}
                />
              )}
            </InputAdornment>
          ),
          style: { fontWeight: "bold" },
        }}
        placeholder="Add Item...."
        onChange={(e) => setData(e.target.value)}
        value={data}
      />

      {items.map((ele, index) => {
        return (
          <Note
            key={index}
            data={ele}
            id={index}
            setItems={setItems}
            setData={setData}
            setId={setId}
          />
        );
      })}
      <Button
        className={`mt-3 ${classes.checkBtn}`}
        variant="contained"
        color="secondary"
        onClick={removeAll}
      >
        <span
          onMouseOut={(e) => (e.target.innerHTML = "Check List")}
          onMouseOver={(e) => (e.target.innerHTML = "Remove All")}
        >
          Check List
        </span>
      </Button>
    </>
  );
};

export default Todo;
