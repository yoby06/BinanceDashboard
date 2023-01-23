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
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
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
        
           backgroundColor: params.row.status =='active' ? "rgba(0, 128, 0, 0.05)" : "",
           color:  params.row.status ==='active' ? "green" : "",

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
      status: "active",
      email: "satoshi@gmail.com",
      age: "??",
    },
    {
      id: 2,
      username: "Bill Gates",
      img: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      email: "billgates@gmail.com",
      status: "passive",
      age: 67,
    },
    {
      id: 3,
      username: "Gautam Adani",
      img: "https://www.investopedia.com/thmb/vPQD9Ocy2lbNoi1b-i9OfQJSwR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1410955378-38715549ed8d44c6a27acaee798e192e.jpg",
      email: "gautamadani@gmail.com",
      status: "pending",
      age: 60,
    },
    {
      id: 4,
      username: "Jeff Bezos",
      img: "https://www.investopedia.com/thmb/CmlW3mQUM2DVYzaoez7wsTXCJrA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1036094130-cf8da629f9b44c81a0b1398311ac5787.jpg",
      email: "drogba@gmail.com",
      status: "active",
      age: 58,
    },
    {
      id: 5,
      username: "Warren Buffett",
      img: "https://www.investopedia.com/thmb/jCNfGXB5--zApuSiF98izlJZrx8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-540179188-f820573a1328459cb5cedac011088d4c.jpg",
      email: "warrenbuffet@gmail.com",
      status: "passive",
      age: 92,
    },
    {
      id: 6,
      username: "Larry Ellison",
      img: "https://www.investopedia.com/thmb/GY0Nf0Q0GZuZUu0aE36cwq9kqxw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1175129168-131274dc7dc741059715262bd3dc147c.jpg",
      email: "larryelliston@gmail.com",
      status: "active",
      age: 78,
    },
    {
      id: 7,
      username: "Mukesh Ambani",
      img: "https://www.investopedia.com/thmb/I9T30totPktrZXVLMHpPqG0cKyc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273603549-5bd9777a21d246e9a40686babac87337.jpg",
      email: "mukeshambani@gmail.com",
      status: "passive",
      age: 65,
    },
    {
      id: 8,
      username: "Steve Ballmer",
      img: "https://www.investopedia.com/thmb/WAFRggfdgIzdXQcozImmDutTRoQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1187708941-a58136dd609a4a16b962e52fdbd3beab.jpg",
      email: "8snow@gmail.com",
      status: "active",
      age: 66,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];