import React from "react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
        backgroundColor: "#313131",
      }}
    >
      {/* <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>hello</div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            backgroundColor: "yellow",
            padding: "5px 20px 5px 20px",
          }}
        >
          chinmayee
        </div>
      </div> */}
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          style={{
            height: "500px",
            width: "500px",
            objectFit: "cover", // "contain" scales to fit inside box
            backgroundColor: "white",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        />
        <div
          onClick={() => {
            alert("hey Chinmayee");
          }}
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "40px",
            color: "white",
            padding: "10px 20px 10px 20px",
            borderRadius: "50px",
            backgroundColor: "rgba(79, 55, 164, 1)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
          }}
        >
          Subarna
        </div>
      </div>
    </div>
  );
};

export default App;
