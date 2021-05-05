import { useState, useRef, useEffect } from "react";

function PayPal(props) {
  const {total} = props;
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    if(window.myButton) window.myButton.close();
      window.myButton = window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: total,
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaid(true);
            console.log(order);
          },
          onError: error => {
            setError(error);
            console.error(error);
          },
          style: {
            size: "responsive",
            shape: "pill",
            label: "checkout",
            layout: "horizontal",
            tagline: "true"
          }
        })
      window.myButton.render(paypalRef.current);
  }, [total]);

  if (paid) {
    return (
      <div>
        <h4 className="text-success">Congrats! Payment was successful! Check your PayPal account!</h4>
        <div ref={paypalRef} />
      </div>
    )
  }

  return (
    <div>
      {error && <h4 className="text-danger">An error occurred! {error.message}</h4>}
      <div ref={paypalRef} />
    </div>
  );
}

export default PayPal;
