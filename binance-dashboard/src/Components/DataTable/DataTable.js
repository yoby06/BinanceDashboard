import { Box, Typography } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import { userColumns,userRows } from "./Datatablesource"

const Datatable = () => {
  const actionColumn = [
    {
      field:"action", 
      headerName:"Action",
      width:200, 
      renderCell:() => {

      return(
          <Box className="cellAction" style={{display: "flex",
            alignItems: "center",
            gap: "15px",
            }}>
              <Typography className="viewButton" sx={{

                padding: "2px 5px",
                borderRadius: "5px",
                color: "darkblue",
                border: "1px dotted rgba(0, 0, 139, 0.596)",
                cursor: "pointer",


              }}> View </Typography>
              <Typography className="deleteButton" sx={{
                padding: "2px 5px",
                borderRadius: "5px",
                color: "crimson",
                border: "1px dotted rgba(220, 20, 60, 0.6)",
                cursor: "pointer",
                }}> Delete </Typography>
          </Box>
      ); 
    },
    },
  ]
  return (
    <Box className="datatable" sx={{  height: "600px",  padding:"20px"

    }}>
    <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn )}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="datagrid"
      />

    </Box>
  )
}

export default Datatable