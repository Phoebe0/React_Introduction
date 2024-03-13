import { useEffect, useState } from 'react'
import axios from 'axios'
import ChyHeader from './components/ChyHeader'
import ChyFooter from './components/ChyFooter'
import ChyProducts from './components/ChyProducts'
import './css/index.min.css'
import Context from './context/context'
const { Provider } = Context
// One-way data flow . state and function must be provided by the Parent Component
export default function App() {
  // const [value, setValue] = useState(0)

  /* data:
        pId: product id
        pImage：product image
        pName：product name
        pPrice：product price
        pNum：product number
        pState：check or not the product?  0-not checked   ;   1-checked
*/
  //  product data from DB
  const [prdList, setPrdList] = useState([])
  // select all products
  useEffect(() => {
    async function getList() {
      const res = await axios.post('http://localhost:3301/api/SelectPrd')
      console.log(res.data.data)
      setPrdList(res.data.data)
    }
    getList()
  }, [])

  // function: select single product
  const isChecked = (id) => {
    // Change checkbox state by pId
    // ⚠️：Data state is immutable, so we should use setPrdList function
    setPrdList(
      prdList.map((item) => {
        // Traverse prdList‘s pId, if pId = id passed by the Son Component, set pState
        if (item.pid === id) {
          return { ...item, pState: item.pState === 0 ? 1 : 0 }
        } else {
          return item
        }
      })
    )
  }

  // function: select all
  const changeSelectAll = (checked) => {
    // based on the checked  of all-select box is true or false , set the pState of single product
    console.log(checked)
    setPrdList(
      prdList.map((item) => {
        // If checked is false, main select_all is checked, pState should be 0, checked
        return { ...item, pstate: checked ? 1 : 0 }
      })
    )
  }

  // edit produts's number.  Need pid & pnum
  const changeCount = (id, num) => {
    setPrdList(
      prdList.map((item) => {
        //  find the product ID that needs to be edited
        if (item.pid === id) {
          return {
            ...item,
            pnum: item.pnum + num,
          }
        } else {
          return item
        }
      })
    )
    console.log(id, num, prdList)
  }
  return (
    <Provider value={{ changeCount }}>
      <div>
        {/* Header */}
        <ChyHeader title="My Shop Car"></ChyHeader>
        {/* Product List */}
        <ChyProducts
          prdList={prdList}
          isChecked={isChecked}
          // changeCount={changeCount}
        ></ChyProducts>
        {/* Footer */}
        <ChyFooter
          prdList={prdList}
          changeSelectAll={changeSelectAll}
        ></ChyFooter>
      </div>
    </Provider>
  )
}
