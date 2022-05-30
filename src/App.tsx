import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";

// student = 12;
let name: string = "Shamom";
let age: number = 55;
let isSmart: boolean = true;
let students: string[] = ["Kalim, Chalim", "Dalim", "Jalim"];
let fees: number[] = [12, 13, 14, 15, 16];

interface Person {
  name: string;
  job: string;
  age: number;
  location?: string | number;
}

// const person: { name: string; job: string; age: number } = {
//   name: "Bill CLilton",
//   job: "kamNai",
//   age: 85,
//   location: "hello",
// };

const person: Person = {
  name: "Bill CLilton",
  job: "kamNai",
  age: 85,
  location: 55,
};

const handleAddUser = (
  firstName: string,
  age: number,
  address: string
): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return total;
};

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
