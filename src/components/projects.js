function Projects() {
  return (
    <>
      <p className="heading grad">Projects</p>
      <div class="album py-5 color1">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col ">
              <div class="card card1">
                <img src="project1.png" width="100%" height="150px" alt="..." />

                <div class="card-body color1 ">
                  <p class="card-text">
                    Codeforces Visualizer using react and Codeforces API.
                    Created graphs about ratings, problem ratings.
                  </p>
                  <div class="d-flex align-items-center">
                    <button className="btn grad1">
                      <a href="project">Learn More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col ">
              <div class="card card1">
                <img src="project1.png" width="100%" height="150px" alt="..." />
                <div class="card-body color1 ">
                  <p class="card-text">
                    Movies Valley using react and IMDB database. Recommended and
                    created a watchlist shows and movies by genre.
                  </p>
                  <div class="d-flex align-items-center">
                    <button className="btn grad1">
                      <a href="project">Learn More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col ">
              <div class="card card1">
                <img src="project1.png" width="100%" height="150px" alt="..." />

                <div class="card-body color1 ">
                  <p class="card-text">
                    Clever Media a social media app using react and firebase.
                    Social Media app like other apps.
                  </p>
                  <div class="d-flex align-items-center">
                    <button className="btn grad1">
                      <spam>
                        <a href="project">Learn More</a>
                      </spam>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
