
import './App.css'
import Brett from "./components/Brett.jsx";
import {Provider} from "./Context.jsx";
/*import {MemoryContext} from "./Context.jsx";*/
import CardFront from "./components/CardFront.jsx";

function App() {
/*const {setData,data} = useContext(MemoryContext)
    console.log(data)*/


    return (
        <Provider>
            <Brett>
                <CardFront/>
            </Brett>
        </Provider>
    )
}

export default App
