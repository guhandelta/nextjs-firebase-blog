const imageStyle = {
  height: '500px'
};

export default () => (
  <div>
    <img
      src="/static/images/2thrones.jpg"
      alt="2 Thrones Wallpaper"
      style={imageStyle}
    />
    <h3>Still.... About Page</h3>
    <style jsx>{`
      h3 {
        color: Orange;
        font-size: 35px;
      }
    `}</style>
  </div>
);
