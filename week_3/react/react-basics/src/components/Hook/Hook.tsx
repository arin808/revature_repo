import  useState from 'react'

/**
 * Hooks are extra methods used to add extra functionality to functional components 
 * as class components
 * 
 * Hooks we sill use
 *  - useState
 *   - create state variables
 * 
 * State variables are variables that can be changed and the component will re-render
 * 
 * If a variable is not a state variable, changing it will not cause the component to re-render
 * 
 */
function Hook() {
    let [visiblility, setVisibility] = useState(false);
    function toggleButton(){
        //visible = !visible;
        setVisibility(!visiblility);
    }
  return (
    <>
        <button onClick={toggleButton}>Click me</button>
        {
            visiblility ? <h2>Visible</h2> : <h2> </h2>
        }
    </>
  )
}

export default Hook