import classes from "./Backdrop.module.css";

const Backdrop = ({ setToggleSearchInput, setShowMoviesPopup }) => {
  // console.log("toggle", setToggleSearchInput);
  const toggleBackdrop = () => {
    setToggleSearchInput(false);
    setShowMoviesPopup(false);
  };
  return <div className={classes.backdrop} onClick={toggleBackdrop} />;
};

export default Backdrop;
