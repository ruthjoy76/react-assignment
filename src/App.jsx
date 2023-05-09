import './App.css'
import EvenOdd from './component/EvenOdd'
import PasswordStrength from './component/PasswordStrength'
import ShowHideText from './component/ShowHideText'

function App() {
  
  return (
 <div>
  <EvenOdd number={1} />

  <PasswordStrength password="youAreWD56P!" />

  <ShowHideText text="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." />
  </div>
      
  )
}

export default App
