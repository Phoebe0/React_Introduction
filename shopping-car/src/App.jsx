import ChyHeader from './components/ChyHeader'
import ChyFooter from './components/ChyFooter'
import ChyProducts from './components/ChyProducts'
export default function App(props) {
  return (
    <div>
      {/* Header */}
      <ChyHeader title="My Shop Car"></ChyHeader>
      {/* Product List */}
      <ChyProducts></ChyProducts>
      {/* Footer */}
      <ChyFooter></ChyFooter>
    </div>
  )
}
