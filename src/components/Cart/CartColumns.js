function CartColumns() {
  return (
    <div className="d-none d-lg-block">
      <div className="row mb-2">
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Product</h5>
        </div>
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Name</h5>
        </div>
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Price</h5>
        </div>
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Quantity</h5>
        </div>
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Remove</h5>
        </div>
        <div className="col-10 col-lg-2">
          <h5 className="my-3 text-success font-weight-bold">Total</h5>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
