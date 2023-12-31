function Slider() {
  //     return <div style={{backgroundColor: 'skyblue', height: '40vw' }}></div>

  //     // <h1> I am Slider </h1>

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block"
            style={{ height: "40vw", width: "100%", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2400030/pexels-photo-2400030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block"
            style={{ height: "40vw", width: "100%", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/1007227/pexels-photo-1007227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block"
            style={{ height: "40vw", width: "100%", objectFit: "cover" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
