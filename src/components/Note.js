import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
}));

const Note = (props) => {
  const classes = useStyles();

  const lists = JSON.parse(localStorage.getItem("Todo"));

  const deleteItem = (id) => {
    const updated = lists.filter((ele, index) => {
      return index !== id;
    });
    localStorage.setItem("Todo", JSON.stringify(updated));
    props.setItems(updated);
  };

  const updateItem = (id) => {
    props.setData(lists[id]);
    props.setId(id);
  };

  return (
    <>
      <div className="card mb-2">
        <span>{props.data}</span>
        <EditOutlinedIcon
          className={classes.icon}
          onClick={() => updateItem(props.id)}
        />
        <DeleteOutlineOutlinedIcon
          className={classes.icon}
          onClick={() => deleteItem(props.id)}
        />
      </div>
    </>
  );
};

export default Note;
