import React from 'react'
import ChyProductCounter from './ChyProductCounter'
// import '../css/index.min.css'
import { Checkbox, List } from 'antd'

export default function ChyProducts(props) {
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
                    onChange={() => props.isChecked(item.pid)}
                    checked={item.pstate === 0 ? false : true}
                  ></Checkbox>
                  <img src={item.pimage} alt="" className="img" />
                  <div className="detail">
                    <div>{item.pname}</div>
                    <div className="pro_price">$ {item.pprice}</div>
                  </div>
                  <div className="counter">
                    <ChyProductCounter
                      id={item.pid}
                      value={item.pnum}
                      // changeCount={props.changeCount}
                    ></ChyProductCounter>
                  </div>
                </div>
              </List.Item>
            </>
          )}
        ></List>
      </div>
    </div>
  )
}
