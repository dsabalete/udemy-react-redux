import React from "react";

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return (
    <div>
      <ul>{images}</ul>
    </div>
  );
};

export default ImageList;
