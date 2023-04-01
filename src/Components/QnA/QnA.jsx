import React from "react";
import "./QnA.css";

const QnA = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold m-10">This is QnA section</h1>
      <div class="collapse w-6/12 mb-4">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex gap-5">
          <h2 class="text-2xl text-black">
            <span class=" bg-purple-400 rounded-lg p-1"> 1.</span> What is the
            difference between props vs states?
          </h2>
          <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
        </div>
        <div class="collapse-content">
          <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
            <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">Ans:</span>
            <span class="">
            </span>
            In React, props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and can only be changed by the parent component, whereas state is mutable and can be changed within the component itself.</p>
        </div>
      </div>
      <div class="collapse w-6/12 mb-4">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex gap-5">
          <h2 class="text-2xl text-black">
            <span class=" bg-purple-400 rounded-lg p-1"> 2.</span> How does useStates works in react?
          </h2>
          <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
        </div>
        <div class="collapse-content">
          <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
            <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">Ans:</span>
            <span class="">
            </span>
            useState is a hook in React that allows functional components to have state. It returns an array with two elements: the current state value and a function to update that value.</p>
        </div>
      </div>
      <div class="collapse w-6/12 mb-4">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex gap-5">
          <h2 class="text-2xl text-black">
            <span class=" bg-purple-400 rounded-lg p-1"> 3.</span> What is the other purpose of useEffect without fetching data?
          </h2>
          <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
        </div>
        <div class="collapse-content">
          <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
            <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">Ans:</span>
            <span class="">
            </span>
            The useEffect() hook allows user to perform side effects in user components. One example is setting up timers or event listeners except fetching data.</p>
        </div>
      </div>
      <div class="collapse w-6/12 mb-4">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex gap-5">
          <h2 class="text-2xl text-black">
            <span class=" bg-purple-400 rounded-lg p-1"> 4.</span> How does React exactly works?
          </h2>
          <span class="bg-green-700 rounded-lg  p-2">&#8595;</span>
        </div>
        <div class="collapse-content">
          <p class="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
            <span class="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">Ans:</span>
            React internally maintain a virtual user interface is called virtual DOM. When a components states change or modifies, React update the virtual DOM. Then it compares with previous virtual DOM to determine the number of changes needed in the actual DOM with the help of Dif algorithm.</p>
        </div>
      </div>

    </div>
  );
};

export default QnA;
