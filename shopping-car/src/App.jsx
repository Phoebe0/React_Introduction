import { useState } from 'react'
import ChyHeader from './components/ChyHeader'
import ChyFooter from './components/ChyFooter'
import ChyProducts from './components/ChyProducts'
import './css/index.min.css'
// One-way data flow . state and function must be provided by the Parent Component
export default function App(props) {
  /* data:
        pId: product id
        pImage：product image
        pName：product name
        pPrice：product price
        pNum：product number
        pState：check or not the product?  0-not checked   ;   1-checked
*/
  // static data
  const data = [
    {
      pId: 'chy001',
      pImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJpEq1_bmDtd0Z6LqgH9VyvSZ7DHv7ik8-A&usqp=CAU',
      pName: 'iWatch',
      pPrice: 2000,
      pNum: 1,
      pState: 0,
    },
    {
      pId: 'chy002',
      pImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCNIeEd5YiuUthsPyiGpCRvibGwWJ3ASE_8KF7OnO-ccHK8GBIutqL2COZzO-cB58xGQ&usqp=CAU',
      pName: 'iPhone',
      pPrice: 8000,
      pNum: 1,
      pState: 0,
    },
    {
      pId: 'chy003',
      pImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJyFshAMfMmQugHZwOf_mxUM7DSiRee0JGBl-zX8-2kao5OBEHJxB8isxA9UaGjP2wsY&usqp=CAU',
      pName: 'Mac Book M3',
      pPrice: 22000,
      pNum: 1,
      pState: 0,
    },
    {
      pId: 'chy004',
      pImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCH8zXvyfjWqvo9kOD7JrK-nmItctQI9yow&usqp=CAU',
      pName: 'AirPods',
      pPrice: 1400,
      pNum: 2,
      pState: 0,
    },
    {
      pId: 'chy005',
      pImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqpNbkw6kcQLuN4Dyqi_HGszSl6ONXCRtSUsS9nFtLGt7_CgyZTzvwUu7CXYhSyxBims&usqp=CAU',
      pName: 'iPad',
      pPrice: 5000,
      pNum: 1,
      pState: 1,
    },
  ]
  const [prdList, setPrdList] = useState(data)

  // function: select single product
  const isChecked = (id) => {
    // Change checkbox state by pId
    // ⚠️：Data state is immutable, so we should use setPrdList function
    setPrdList(
      prdList.map((item) => {
        // Traverse prdList‘s pId, if pId = id passed by the Son Component, set pState
        if (item.pId === id) {
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
        return { ...item, pState: checked ? 1 : 0 }
      })
    )
  }
  return (
    <div>
      {/* Header */}
      <ChyHeader title="My Shop Car"></ChyHeader>
      {/* Product List */}
      <ChyProducts prdList={prdList} isChecked={isChecked}></ChyProducts>
      {/* Footer */}
      <ChyFooter
        prdList={prdList}
        changeSelectAll={changeSelectAll}
      ></ChyFooter>
    </div>
  )
}
