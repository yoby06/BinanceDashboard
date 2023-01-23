import { Box } from "@mui/material";

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <Box className="cellWithImg" sx={{

            display: "flex",
            alignItems: "center",
          }}>
            <img className="cellImg" src={params.row.img} alt="avatar" style={{
          
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "20px",
          
            }}/>
            {params.row.username}
          </Box>
        );
      },
    },
    {
      field: "trsname",
      headerName: "Transaction Name",
      width: 230,
    },
  
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <Box className={`cellWithStatus ${params.row.status}`} style={{
            padding: "5px",
            borderRadius:"5px",
        
           backgroundColor: params.row.status === 'Sell' ?  "rgba(0, 128, 0, 0.05)" : params.row.status === 'Buy' ? "rgba(199, 199, 199, 0.05)" : params.row.status ==='Pending' ? "rgba(128, 128, 0, 0.05)" : "",
           color:  params.row.status ==='Sell' ? "green" : params.row.status === 'Buy' ? "blue" : params.row.status ==='Pending' ? "#c2c206" : "",
            
           
          }}>
            {params.row.status}
          </Box>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Satoshi Nakamoto",
      img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/Satoshi_Nakamoto_Statue_Getty.jpeg.jpg",
      status: "Sell",
      trsname: "BTCUSDT",
      transaction: "1.402,08",
    },
    {
      id: 2,
      username: "Bill Gates",
      img: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      trsname: "BTCUSDT",
      status: "Buy",
      transaction: "4.0023,01",
    },
    {
      id: 3,
      username: "Gautam Adani",
      img: "https://www.investopedia.com/thmb/vPQD9Ocy2lbNoi1b-i9OfQJSwR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1410955378-38715549ed8d44c6a27acaee798e192e.jpg",
      trsname: "ETHUSDT",
      transaction: "1.240,02",
      status: "Pending",
    },
    {
      id: 4,
      username: "Jeff Bezos",
      img: "https://www.investopedia.com/thmb/CmlW3mQUM2DVYzaoez7wsTXCJrA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1036094130-cf8da629f9b44c81a0b1398311ac5787.jpg",
      trsname: "MANAUSDT",
      status: "Buy",
      transaction: "4302.200,01",
    },
    {
      id: 5,
      username: "Warren Buffett",
      img: "https://www.investopedia.com/thmb/jCNfGXB5--zApuSiF98izlJZrx8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-540179188-f820573a1328459cb5cedac011088d4c.jpg",
      trsname: "DOGEUSDT",
      status: "Sell",
      transaction: "1.232.235,03",
    },
    {
      id: 6,
      username: "Larry Ellison",
      img: "https://www.investopedia.com/thmb/GY0Nf0Q0GZuZUu0aE36cwq9kqxw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1175129168-131274dc7dc741059715262bd3dc147c.jpg",
      trsname: "AVAXBTC",
      status: "Buy",
      transaction:"502,01",
    },
    {
      id: 7,
      username: "Mukesh Ambani",
      img: "https://www.investopedia.com/thmb/I9T30totPktrZXVLMHpPqG0cKyc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273603549-5bd9777a21d246e9a40686babac87337.jpg",
      trsname: "UNIUSDT",
      status: "Pending",
      transaction: "132.203,01",
    },
    {
      id: 8,
      username: "Steve Ballmer",
      img: "https://www.investopedia.com/thmb/WAFRggfdgIzdXQcozImmDutTRoQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1187708941-a58136dd609a4a16b962e52fdbd3beab.jpg",
      trsname: "ETHUSDT",
      status: "Sell",
      transaction: "20.090,87",
    },
    {
      id: 9,
      username: "Elon Musk",
      img: "https://cdn1.ntv.com.tr/gorsel/1NplRFlnJkWwjf_I-K8Adg.jpg?width=660&mode=both&scale=both",
      trsname: "BTCUSDT",
      status: "Sell",
      transaction: "23.108,10",
    },
   
  ];