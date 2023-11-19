const MainLayout = (props) => {
  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 g-0">
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
