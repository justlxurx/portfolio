import { useState } from "react";
import { authorizeAPI } from "../../../../api/authorize";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registrationResult, setRegistrationResult] = useState<string | null>(
    null
  );
  const { address } = useWeb3ModalAccount();

  const handleRegister = async () => {
    try {
      const result = await authorizeAPI.register({
        wallet_address: address,
        email,
        first_name: firstName,
        last_name: lastName,
      });

      setRegistrationResult("Registration successful!");
      console.log(result);
    } catch (err) {
      console.error("Registration failed:", err);
      setRegistrationResult("Registration failed.");
    }
  };

  return (
    <div>
      <h2>Hello, {address.slice(0, 5) + "..." + address.slice(40)} Register</h2>
      {/* <input
        type="text"
        placeholder="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      /> */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {registrationResult && <p>{registrationResult}</p>}
    </div>
  );
};

export default RegisterForm;
