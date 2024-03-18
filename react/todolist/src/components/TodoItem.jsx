// import React, { useState } from "react";
// import { ItemBox, CheckBox, Delete, Item } from "./TodoItem.style";

// const TodoItem = (props) => {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <ItemBox isChecked={isChecked}>
//       <CheckBox
//         type="checkbox"
//         onChange={() => {
//           setIsChecked(!isChecked);
//         }}
//       />
//       <Item type={CheckBox} isChecked={isChecked}>
//         {/* {props.item.text} */}
//       </Item>
//       <Delete
//         onClick={() => {
//           props.onDelete(props.item.id);
//         }}
//       />
//     </ItemBox>
//   );
// };

// export default TodoItem;
