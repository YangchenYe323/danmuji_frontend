import React from 'react'
import Button from '@material-ui/core/Button'

const SaveButton = (props) => {
    return (
        <Button variant="contained" color="primary" onClick={props.logSet} disableElevation>
          保存设置
        </Button>
      );
}

export default SaveButton