import RecursivelyRenderedComponent from './components/RecursivelyRenderedComponent'
import Title from './components/Title'

export function App() {
  return(<>
  <Title /> 
  <RecursivelyRenderedComponent depth={3} />
  </>)
  }
