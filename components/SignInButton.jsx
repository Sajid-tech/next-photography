import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoIosCloseCircle } from "react-icons/io";

const SigninButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const { data: session } = useSession();

  const handleNameClick = () => {
    if (session && session.user) {
      setShowPopup(!showPopup);
    }
  };

  return (
    <div className="flex gap-4 ml-auto cursor-pointer">
      {session && session.user ? (
        <div>
          <p
            className="text-sky-600 text-cursor-pointer"
            onClick={handleNameClick}
          >
            {session.user.name}
          </p>
          {showPopup && (
            <div className="popup">
              <p onClick={() => signOut()}>signOut</p>
              <button onClick={() => setShowPopup(false)}>
                <IoIosCloseCircle />
              </button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => signIn()} className="text-green-600 ml-auto">
          Sign In
        </button>
      )}
    </div>
  );
};

export default SigninButton;
