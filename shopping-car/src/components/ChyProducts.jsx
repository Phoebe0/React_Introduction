import React from 'react'
// import '../css/index.min.css'
import { Checkbox, List } from 'antd'

export default function ChyProducts(props) {
  console.log(props)
  return (
    <div>
      <div className="section">
        <List
          dataSource={props.prdList}
          renderItem={(item) => (
            <>
              <List.Item>
                <div className="product">
                  {/*If I want to change the status. Rember:  One-way data flow !
                  So define the method in the parent component Then call method here
                  */}
                  <Checkbox
                    onChange={() => props.isChecked(item.pId)}
                    checked={item.pState === 0 ? false : true}
                  ></Checkbox>
                  <img src={item.pImage} alt="" className="img" />
                  <div className="detail">
                    <div>{item.pName}</div>
                    <div className="pro_price">$ {item.pPrice}</div>
                  </div>
                  <div className="counter">counter -- {item.pNum}</div>
                </div>
              </List.Item>
            </>
          )}
        ></List>
      </div>
    </div>
  )
}
