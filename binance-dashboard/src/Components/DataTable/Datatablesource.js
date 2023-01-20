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
      age: "???",
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
      username: "Wesley Sneijder",
      img: "https://img.a.transfermarkt.technology/portrait/big/4673-1473587409.jpeg?lm=1",
      email: "wesley@gmail.com",
      status: "pending",
      age: 40,
    },
    {
      id: 4,
      username: "Didier Drogba",
      img: "https://img.a.transfermarkt.technology/portrait/big/3924-1524305788.jpg?lm=1://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "drogba@gmail.com",
      status: "active",
      age: 42,
    },
    {
      id: 5,
      username: "Mert Oğul Bayarlar",
      img: "https://productimages.hepsiburada.net/s/43/500/10788077994034.jpg",
      email: "gizlifovet@gmail.com",
      status: "passive",
      age: 30,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
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