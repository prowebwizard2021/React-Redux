import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setDark, setDefault } from '../../../redux/reducers/theme/themeActions'
import '../styles/_app.scss';


function App() {

  const {mode, color, icon} = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    if(mode !== "dark-mode") {
      document.getElementById("root").setAttribute('class', 'dark-mode')
      dispatch(setDark())
    }else {
      document.getElementById("root").setAttribute('class', '')
      dispatch(setDefault())
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme) {
      document.getElementById("root").setAttribute('class', 'dark-mode')
      dispatch(setDark())
    }else {
      document.getElementById("root").setAttribute('class', '')
      dispatch(setDefault())
    }
  }, [])
  
  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button 
          className="app__dark-mode-btn icon level-right"
          onClick={changeTheme}  
        >
          <FontAwesomeIcon icon={icon} color={color}/>
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
