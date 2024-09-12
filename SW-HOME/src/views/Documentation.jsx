const DocumentationView = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-Introduction-tab"
              data-toggle="pill"
              href="#v-pills-Introduction"
              role="tab"
              aria-controls="v-pills-Introduction"
              aria-selected="true"
            >
              Virtual Wardrobe
            </a>
            <a
              className="nav-link"
              id="v-pills-sr-tab"
              data-toggle="pill"
              href="#v-pills-sr"
              role="tab"
              aria-controls="v-pills-sr"
              aria-selected="false"
            >
              Wishlist
            </a>
            <a
              className="nav-link"
              id="v-pills-install-tab"
              data-toggle="pill"
              href="#v-pills-install"
              role="tab"
              aria-controls="v-pills-install"
              aria-selected="false"
            >
              Installation
            </a>
            <a
              className="nav-link"
              id="v-pills-screenshots-tab"
              data-toggle="pill"
              href="#v-pills-screenshots"
              role="tab"
              aria-controls="v-pills-screenshots"
              aria-selected="false"
            >
              Screenshots
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-Introduction"
              role="tabpanel"
              aria-labelledby="v-pills-Introduction-tab"
            >
              <h4>Just an auxilary page for something i might add later.</h4>
              <hr />
              {/* <div className="container">
          <div className="row g-3 justify-content-md-center">
            <div className="col col-md-3">
              <div className="card h-100 border-success text-center mb-3">
                <div className="card-header text-white bg-success">
                  Live Demo
                </div>
                <div className="card-body">
                  <Link to="/demo">
                    <span className="display-6">{link45}</span>
                    <p className="card-text">
                      Live sample demo for Contact Form
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="card h-100 border-danger text-center mb-3">
                <div className="card-header text-white bg-danger">
                  Documentation
                </div>
                <div className="card-body">
                  <Link to="/documentation">
                    <span className="display-6">{file}</span>
                    <p className="card-text">
                      Refer to the complete documentation
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="card h-100 border-info text-center mb-3">
                <div className="card-header text-white bg-info">Download</div>
                <div className="card-body">
                  <Link to="/demo">
                    <span className="display-6">{check2all}</span>
                    <p className="card-text">Download the source code</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sr"
              role="tabpanel"
              aria-labelledby="v-pills-sr-tab"
            >
              <h4>Wishlist</h4>
              <hr />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-install"
              role="tabpanel"
              aria-labelledby="v-pills-install-tab"
            >
              <h4>Friends/Family Wishlist</h4>
              <hr />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-screenshots"
              role="tabpanel"
              aria-labelledby="v-pills-screenshots-tab"
            >
              <h4>Thoughts & Ideas</h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationView;
