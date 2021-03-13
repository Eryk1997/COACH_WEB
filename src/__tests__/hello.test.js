import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import InputLogin from "../views/login/InputLogin";


let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders user data", async () => {

    act(() => { 
        render(<InputLogin  nameField="Email"
        name="email"/>,container);
    });
  
    expect(container.querySelector("email").textContent).toBe("Email");


  });