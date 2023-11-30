import { Header } from "./components/Header/Header.jsx";
import React, { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { CTAButton } from "./components/CTAButton.jsx";
import TabButton from "./components/TabButton.jsx";
import TabButton2 from "./components/TabButton2.jsx";
import Card from "./components/Card/Card.jsx";




// Dynamic content for main page ?
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  // this is the code for experimenting with useState(initial val) - which is 0, then by selecting a button increases or decreases it.
  const [count, setCount] = useState(0);
  const increment = () => { setCount(count + 1) };
  const decrement = () => { setCount(count - 1) };
  // the useState function to control the updated UI in 'Dynamic Content'
  


  const [ selectedTopic, setSelectedTopic ] = useState();
  function handleSelect(propFromOnSelect) {
    // should be components, jsx, props or state via the parameter
    setSelectedTopic(propFromOnSelect)
    console.log(propFromOnSelect)
}

  return (
    <div>
      <Header />
      <main>
        {/* <h2>Core Concepts</h2> */}

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* Here we are importing our data.js file
          above and using the data in it's ARRAY to populate the JSX.
          1- we call the function 'CoreConcept' for the markup
          2- we call the data from within the const 'CORE_CONCEPTS' utilizing
          the syntax for ARRAY[index location]
          3- Using a short form called the 'SPREAD OPERATOR' we populate the remaining cards with the rest of the data. We'll leave the first one as it since we'll likely want a hint later of what it's doing. :)          cool ... ! */}
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          {/* can be used 'menu' for a list of default buttons */}
          {/* <menu>
            <TabButton2 onSelect={handleSelect}>Components</TabButton2>
            <TabButton2 onSelect={handleSelect}>JSX</TabButton2>
            <TabButton2 onSelect={handleSelect}>Props</TabButton2>
            <TabButton2 onSelect={handleSelect}>State</TabButton2>
          </menu> */}

          <div className="dynamicContent">
              <h2>Dynamic Content</h2>
              <menu>
              {/* this super IMPORTANT example uses 'children'; looks more like standard HTML code; see TabButton for 'labels' usage; Also it is passing a function called 'handleSelect' to a PROPERTY named 'onSelect' 
              The anonymous function ()=> handleSelect() runs code devined above. but can now pass additional values 'Components'
              JSXElement  Property function-exe   innerhtml  */}
              
              <TabButton2 onSelect={() => handleSelect('components')}>Components</TabButton2>
              <TabButton2 onSelect={() => handleSelect('jsx')}>JSX</TabButton2>
              <TabButton2 onSelect={() => handleSelect('props')}>Props</TabButton2>
              <TabButton2 onSelect={() => handleSelect('state')}>State</TabButton2>
              
              {/* <button onClick={() =>(window.location.href = "https://modernedgestudio.net")}> My Portfolio  </button> */}
            </menu>

            
            {/* Here we have conditional logic served by the ternary operator
            this code checks to see if the selection is null -which is the default useState() b/c there is nothing in the parentheses in the default setting for the orig def of the code. Here is checks and of course as the page loads, since nothing is selected, the first line is true. b/c the statement reads as this:
            (notTrue) !selectedTopic ? [do this thing] :[else] leave it null
            (ifTrue selectedTopic ? [render this <div>]) */}
            {!selectedTopic ? <p>Please select a topic from the tabs above...</p> : null}
            {selectedTopic ? <div id="tab-content">
                
                <h2>{EXAMPLES[selectedTopic].title}</h2>
                <h3>{EXAMPLES[selectedTopic].description}</h3>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
              </div> : null}  
              
          
            </div>
        </section>
        <div className="faculty-cards">
          <Card name="I.C. Nobranes" faculty="Psych Ward">
            <p>
              "Blake sees lines of code of Computer Science at the
              University of Illinois."
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Blake</a>
            </p>
          </Card>

          <Card name="Maria Manymiles" faculty="Sex Therapy">
            <p>
              "Maria "Professor FeelGood" works long and hard hours at the
              University of Illinois."
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card>
          <Card name="Dwight Hocum" faculty="BS Comp">
            <p>
              "Dwight understand Latin who likes pop and chips."
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Dwight</a>
            </p>
          </Card>
        </div>
      </main>

      <div className="counter-container">
        <h2>Welcome to the Counter: </h2>
        <p>An Example of UseState()in Action</p>
        <div className="counter-btns">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <CTAButton />
      </div>
    </div>
  );
}

export default App;
