import React from 'react'
import style from './index.module.scss'
import { Checkbox, List } from 'antd'
// const data = ['1', '2', '3', '4', '5']
const data = [
  {
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJpEq1_bmDtd0Z6LqgH9VyvSZ7DHv7ik8-A&usqp=CAU',
    pName: 'iWatch',
    pPrice: 2000,
  },
  {
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCNIeEd5YiuUthsPyiGpCRvibGwWJ3ASE_8KF7OnO-ccHK8GBIutqL2COZzO-cB58xGQ&usqp=CAU',
    pName: 'iPhone',
    pPrice: 8000,
  },
  {
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJyFshAMfMmQugHZwOf_mxUM7DSiRee0JGBl-zX8-2kao5OBEHJxB8isxA9UaGjP2wsY&usqp=CAU',
    pName: 'Mac Book M3',
    pPrice: 22000,
  },
  {
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCH8zXvyfjWqvo9kOD7JrK-nmItctQI9yow&usqp=CAU',
    pName: 'AirPods',
    pPrice: 1400,
  },
  {
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqpNbkw6kcQLuN4Dyqi_HGszSl6ONXCRtSUsS9nFtLGt7_CgyZTzvwUu7CXYhSyxBims&usqp=CAU',
    pName: 'iPad',
    pPrice: 5000,
  },
]
export default function ChyProducts(props) {
  return (
    <div>
      <div className={style.section}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>
                <div className={style.product}>
                  <Checkbox></Checkbox>
                  <img src={item.pImage} alt="" className={style.img} />
                  <div className={style.detail}>
                    <div>{item.pName}</div>
                    <div className={style.pro_price}>${item.pPrice}</div>
                  </div>
                  <div className={style.counter}>counter</div>
                </div>
              </List.Item>
            </>
          )}
        ></List>
      </div>
    </div>
  )
}
