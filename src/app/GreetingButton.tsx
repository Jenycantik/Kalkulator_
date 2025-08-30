"use client";
import React from "react";

type Props = {name: string};

const GreetingButton = (props: Props) => {

  return (
    <button
      onClick={() => {
      //alert("Welcome" + props.name);
         alert('Wellcome ${props.name}');
      }}
      className="bg-amber-200 p-2 text-black rounded-2xl"
    >
      Greeting
    </button>
  );
};

export default GreetingButton;