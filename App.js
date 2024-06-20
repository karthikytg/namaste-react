{/* <div id="parent">
    <div id="child">
        <h1>Im a H1 Tag from Child</h1>
        <h2>Im a H2 Tag from Child</h2>
    </div>
</div> */}




const heading = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I AM from H1 Tag"), React.createElement("h2", {}, "I AM from H2 Tag")]
) );

       const root = ReactDOM.createRoot(document.getElementById("root"));

       root.render(heading)