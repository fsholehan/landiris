function Hero() {
  return (
    <main className="bg-purple mb-10">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h1 className="text-white text-hero mb-4">
              The perfect <br />
              account shop for <br />
              your botting needs
            </h1>
            <p className="text-purple-200">
              Iris helps you generate shoe and sneakers product
              <br />
              around the web and provid complete analytics.
            </p>
            <a href="#" className="btn btn-lg text-white mt-4">
              Get Started
            </a>
          </div>
          <div className="col-md-6">
            <img src="img/img-hero.png" className="img-fluid img-hidden" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
