// import { useRef } from "react";
// import { useEffect, useState } from "react";
// import styles from "./fadingTextComponent.module.css";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const defaultHeight = 72;

// const ToggleButton = ({ isExpanded, onClick }) => {
//   return (
//     <button className={styles.btnToggle} onClick={onClick}>
//       {isExpanded ? "Show Less" : "Show More"}
//       {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//     </button>
//   );
// };

// function FadingTextCompontent(props) {
//   const text = props.children;
//   const [heightCurrent, setHeightCurrent] = useState(defaultHeight);
//   const [heightMax, setHeightMax] = useState(defaultHeight);
//   const [heightMin, setHeightMin] = useState(defaultHeight);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isOverflow, setIsOverflow] = useState(false);

//   const elementRef = useRef();

//   useEffect(() => {
//     const heightClient = elementRef.current?.clientHeight;
//     const scrollClient = elementRef.current?.scrollHeight;
//     if (heightClient !== scrollClient) {
//       setIsOverflow(true);
//       setHeightMax(scrollClient);
//       setHeightMin(heightClient);
//       setHeightCurrent(heightClient);
//     }
//   }, [text]);

//   const handleClickBtn = () => {
//     setHeightCurrent(isExpanded ? heightMin : heightMax);
//     setIsExpanded((prev) => !prev);
//   };
//   return (
//     <div className={styles.root}>
//       <div
//         className={`${isExpanded ? styles.expanded : styles.collapsed} ${
//           styles.textDisplay
//         }`}
//         style={{ height: ${heightCurrent}px }}
//         ref={elementRef}
//       >
//         {text}
//       </div>
//       {isOverflow && (
//         <ToggleButton isExpanded={isExpanded} onClick={handleClickBtn} />
//       )}
//     </div>
//   );
// }

// export default FadingTextCompontent

// // .root {
// //   margin: 12px 0;
// //   min-height: 100px;
// //   padding: 4px;
// //   width: 600px;
// // }

// // .root .textDisplay {
// //   font-size: 16px;
// //   line-height: 18px;
// //   overflow: hidden;
// //   transition: height 0.5s ease-in-out;
// // }

// // .root .btnToggle {
// //   margin-top: 4px;
// //   border: none;
// //   outline: none;
// //   background-color: transparent;
// //   color: #5624d0;
// //   font-weight: bold;
// //   display: flex;
// //   cursor: pointer;

// // }

// // .root .textDisplay.collapsed {
// //   mask-image: linear-gradient(black 50%, transparent);
// // }

// // .root .textDisplay.expanded {
// //   mask-image: linear-gradient(black 100%, transparent);
// // }