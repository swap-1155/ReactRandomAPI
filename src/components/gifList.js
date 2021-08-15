import classes from "./gifList.module.css";

const GifList = (props) => {
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.images.original.webp} />;
  });
  return <div className={classes.gifcontainer}>{items}</div>;
};
const Item = (props) => {
  return (
    <span className={classes.gifcontainer}>
      <img src={props.url} className={classes.gifcontainer} />
    </span>
  );
};
export default GifList;
