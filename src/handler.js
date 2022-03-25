"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Rust Academy!",
        input: event,
      },
      null,
      2
    ),
  };
};
