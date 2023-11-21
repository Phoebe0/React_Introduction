import React from 'react'
import style from './index.module.scss'
import { Checkbox, List } from 'antd'

export default function ChyProducts(props) {
  console.log(props)
  return (
    <div>
      <div className={style.section}>
        <List
          dataSource={props.prdList}
          renderItem={(item) => (
            <>
              <List.Item>
                <div className={style.product}>
                  {/*If I want to change the status. Rember:  One-way data flow !
                  So define the method in the parent component Then call method here
                  */}
                  <Checkbox
                    onChange={() => props.isChecked(item.pId)}
                    checked={item.pState === 0 ? false : true}
                  ></Checkbox>
                  <img src={item.pImage} alt="" className={style.img} />
                  <div className={style.detail}>
                    <div>{item.pName}</div>
                    <div className={style.pro_price}>$ {item.pPrice}</div>
                  </div>
                  <div className={style.counter}>counter -- {item.pNum}</div>
                </div>
              </List.Item>
            </>
          )}
        ></List>
      </div>
    </div>
  )
}
