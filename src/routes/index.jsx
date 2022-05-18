import { useState } from "react";
import Login from "../components/signin";
import SignUp from "../components/SignUp";
import { AnimatePresence } from "framer-motion";

const Homepage = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <>
      <AnimatePresence>
        {showSignInModal && (
          <Login
            show={showSignInModal}
            onClose={() => setShowSignInModal(false)}
          />
        )}
        {showSignUpModal && (
          <SignUp
            show={showSignUpModal}
            onClose={() => setShowSignUpModal(false)}
          />
        )}
      </AnimatePresence>
      <div>
        <p>Landing</p>
        <button onClick={() => setShowSignInModal(!showSignInModal)}>
          Login
        </button>
        <button onClick={() => setShowSignUpModal(!showSignUpModal)}>
          Start selling
        </button>
      </div>
    </>
  );
};

export default Homepage;
