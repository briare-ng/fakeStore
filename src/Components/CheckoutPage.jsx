import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51QHMi5JwDrua2eJ9dnQSHTfoZDrmGej3kJMwVriW1sbxeXwiTnckfZr3CcI3cAWgLjZxw3T9sSm7XqViOo8Lgxeg00ZblJS1xZ"
); //faire un .env pour une constante de la clé publique de Stripe

function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");

  //   fetch du Client-secret Stripe en back-end
  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        console.log("create-payment-intent data : ", data);
        return setClientSecret(data.clientSecret);
      });
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default CheckoutPage;
