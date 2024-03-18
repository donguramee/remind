// import styled from "styled-components";

// export const ItemBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 20px auto;
//   padding: 0 10px;
//   height: 50px;
//   width: 680px;
//   box-sizing: border-box;
//   border: none;
//   border-radius: 20px;
//   background-color: ${(props) => (props.isChecked ? "#bdbdbd" : "#ededed")};
//   transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
// `;

// export const CheckBox = styled.input.attrs({ type: "checkbox" })`
//   appearance: none;
//   width: 20px;
//   height: 20px;
//   border: 2px solid rgb(238, 139, 90);
//   border-radius: 5px; /* Adjusted border-radius */
//   outline: none;
//   cursor: pointer;
//   position: relative;

//   &:checked {
//     background-color: rgb(238, 139, 90);
//     border-color: rgb(238, 139, 90);
//   }

//   &:checked::before {
//     content: "✔";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
//     font-size: 14px;
//   }
// `;
// export const Item = styled.span`
//   font-family: TheJamsil3Regular;
//   font-size: 15px;
//   color: ${(props) => (props.isChecked ? "#f0f0f0" : "#585858")};
//   text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
//   transition: color 0.3s ease-in-out, text-decoration 0.2s ease-in-out;
// `;
// export const Delete = styled.button`
//   border: none;
//   padding: 0;
//   cursor: pointer;
//   background: none;
//   outline: none;
//   border: none;
//   background-image: url("/images/delete.svg");
//   background-size: cover;
//   width: 26px;
//   height: 26px;

//   &:focus {
//     outline: none;
//   }
// `;

// export const Container = styled.div`
//   background-color: #fff;
//   padding-top: 10px;
//   margin: 10px;
//   width: 700px;
//   border-radius: 20px;
// `;

// export const TodoItem = styled.div`
//   width: 500px;
//   height: 50px;
// `;

// export const DateLabel = styled.span`
//   margin-left: 15px;
//   color: rgb(238, 139, 90);
//   font-family: TheJamsil3Regular;
//   font-size: 15px;
//   border-bottom: 1px solid rgb(238, 139, 90);
//   margin-bottom: 2px;
// `;
