import React from 'react'
import { Box, Checkbox } from "@mui/material";

const wrapperStyle = {
  padding: "10px 20px",
  background: "#fefffe",
  width: { xs: "300px", md: "500px" },
  borderRadius: "10px",
  margin: "20px 0",
  fontSize: "25px",
  color: "#7b7b7b",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
}

function CardList({ todo, setState, state }) {

  function handleCheck(e) {
    if (e.target.checked) {
      const result = state.filter((item) => item !== todo);
      setState(result);
    }
  }

  return (
    <Box sx={wrapperStyle}>
      <Checkbox onChange={(e) => handleCheck(e)} />
      <div>{todo}</div>
    </Box>
  )
}

export default CardList