import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";

const Counter = () => {
  interface UserData {
    name: string;
    job: string;
  }

  const [counter, setCounter] = useState<number>(0);
  const handleInc = (): void => {
    setCounter(counter + 1);
  };
  const handleDec = (): void => {
    setCounter(counter - 1);
  };

  const [user, setUser] = useState<UserData | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: "Adam",
      job: "Dev",
    };
    setUser(userData);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  return (
    <div>
      <h2>This is Counter</h2>
      <h3>{counter}</h3>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default Counter;
