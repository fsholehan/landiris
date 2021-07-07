import SearchIcon from "@material-ui/icons/Search";

function Main() {
  return (
    <main className="bg-purple-700 pt-5 pb-5">
      <div className="container">
        <div className="bg-purple-800 py-4 px-3 rounded mt--10">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <SearchIcon />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search store..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="d-flex mt--6">
                <select className="custom-select flex-grow-1 mr-2">
                  <option selected>Select Category</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <select className="custom-select flex-grow-1 mr-2">
                  <option selected>Shoes Type</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <a href="#" className="btn bg-purple-100 text-white">
                  Find&nbsp;Stores
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="carder rounded-lg bg-purple-800">
              <div className="d-flex px-3 align-items-center">
                <img
                  src="https://i.ya-webdesign.com/images/nike-logo-white-png-1.png"
                  width="100px"
                  height="100px"
                  style={{ objectFit: "cover" }}
                  className="mx-3"
                />
                <div className="d-flex flex-column">
                  <h5 className="text-purple-200 font-weight-bold">Nike</h5>
                  <p className="text-purple-200">316 accounts available</p>
                </div>
              </div>
              <div className="bg-purple-900">
                <img src="img/nike.png" className="img-fluid px-5 py-5" />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column px-3 py-2">
                  <p className="text-purple-200 text-sm">Price range</p>
                  <h4 className="text-white mt--7">$535 - $855</h4>
                </div>
                <div className="mx-auto my-auto">
                  <a href="#" className="btn btn-purple-400 text-white">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="carder rounded-lg bg-purple-800">
              <div className="d-flex px-3 align-items-center">
                <img
                  src="https://www.pngitem.com/pimgs/b/150-1506532_puma-logo-png.png"
                  width="100px"
                  height="100px"
                  style={{ objectFit: "contain" }}
                  className="mx-3"
                />
                <div className="d-flex flex-column">
                  <h5 className="text-purple-200 font-weight-bold">Puma</h5>
                  <p className="text-purple-200">316 accounts available</p>
                </div>
              </div>
              <div className="bg-purple-900">
                <img src="img/nike.png" className="img-fluid px-5 py-5" />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column px-3 py-2">
                  <p className="text-purple-200 text-sm">Price range</p>
                  <h4 className="text-white mt--7">$535 - $855</h4>
                </div>
                <div className="mx-auto my-auto">
                  <a href="#" className="btn btn-purple-400 text-white">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="carder rounded-lg bg-purple-800">
              <div className="d-flex px-3 align-items-center">
                <img
                  src="https://www.pngitem.com/pimgs/b/477-4775308_white-adidas-logo-png.png"
                  width="80px"
                  height="100px"
                  style={{ objectFit: "contain" }}
                  className="mx-3"
                />
                <div className="d-flex flex-column">
                  <h5 className="text-purple-200 font-weight-bold">Adidas</h5>
                  <p className="text-purple-200">316 accounts available</p>
                </div>
              </div>
              <div className="bg-purple-900">
                <img src="img/nike.png" className="img-fluid px-5 py-5" />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column px-3 py-2">
                  <p className="text-purple-200 text-sm">Price range</p>
                  <h4 className="text-white mt--7">$535 - $855</h4>
                </div>
                <div className="mx-auto my-auto">
                  <a href="#" className="btn btn-purple-400 text-white">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
