
import React from 'react'
import Workbook from 'react-excel-workbook'
import { Button } from 'antd'

const Excel = (props) => {
  let { sheetData = {} } = props

  const sheetList = (sheets) => {
    return sheets.map(opt => {
      return (
        <Workbook.Sheet data={opt.data} name={opt.sheetName}>
          {
            opt.columns.map(sopt => {
              return (
                <Workbook.Column label={sopt.label} value={sopt.value} />
              )
            })
          }
        </Workbook.Sheet>
      )
    })
  }

  return (
    <Workbook filename={sheetData.filename + '.xlsx'} element={<Button type="primary">{sheetData.btnText}</Button>}>
      {sheetList(sheetData.sheets)}
    </Workbook>
  );
};

Excel.propTypes = {
};

export default Excel;
