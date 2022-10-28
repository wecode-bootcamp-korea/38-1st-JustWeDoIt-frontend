const Thumbnail = ({ video, image }) => {
  if (video) return <video src={video} loop autoPlay muted />;

  return <img src={image} />;
};

export default Thumbnail;
