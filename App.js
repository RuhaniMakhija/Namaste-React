
{/* <div id="parent">
        <div id="child">
            <h1>I am nested h1 tag Created by React</h1>
            <h2></h2>
        </div>
        <div id="child2">
            <h1>I am nested h1 tag Created by React</h1>
            <h2></h2>
        </div>
</div> */}

const parent=React.createElement(
    "div",
    {id:"parents"},
    [ React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "I am nested h1 tag Created by React"
        ),React.createElement(
            "h2",
            {},
            "I am nested h2 tag Created by React"
        )]
        
    ), React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {},
            "I am nested h1 tag Created by React"
        ),React.createElement(
            "h2",
            {},
            "I am nested h2 tag Created by React"
        )]
        
    )]
   

)


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);