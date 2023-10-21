#Namaste React
// const heading=React.createElement("h1",{id:"heading"},"Hello");
// React.createElement is the Object and not html elements -->after we render it becomes html element
// console.log(heading);


//JSX ==> React.createElement ==>JS Object ==> HTMLElement(render)
//if multiline in jsx use ()
const jsxHeading=(<h1>Hello 
        I am from jsx as a React Element
        </h1>);
console.log(jsxHeading);



const ele=<span>React Element </span>
//React Element
const info=(
        
        <h1>
                {ele}
                hello i am info from react element
        </h1>
)

//Component Composition
const HeadingComponent2=()=>(
        <div>
                <Title/>
                {info}     
                <h1>Hey i am from () functional component</h1>
        </div>
)

//when using normal functions then return is compulsory
const Title=function(){
        return (
                <div>
                        {/* <HeadingComponent2/> */}
                        <h1>I am title</h1>
                </div>
        )
}
