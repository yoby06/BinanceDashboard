import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';



const CardPro = () => {

  const CardStyle = { maxWidth: 345 , margin:"10px",display:"flex",flexDirection:"column"}
  const ButtonStyle = {justifyContent:"center",marginTop:"auto"}
  const CoinNames = {color:"#0077b6" , fontWeight:"bold"}
  return (

    <>
    <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",marginTop:"2rem"}}>


        <Card sx={CardStyle}>
          <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?w=1380&t=st=1674118714~exp=1674119314~hmac=cddbdcd99cdcbc6a0ef0d9487cd2dd14a4e912d2d380e43bdbbac97d64afc02a"
                alt="green iguana"
              />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
                    Bitcoin
                </Typography>

                <Typography variant="body2" color="text.secondary" >
                    Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.
                </Typography>
            </CardContent>
          </CardActionArea>
            
          <CardActions sx={{justifyContent:"center",marginTop:"auto"}}>
                  <a href="https://www.binance.com/en/how-to-buy/bitcoin" target="_blank" style={{ textDecoration: "none"}}>
                  <Button size="small" color="primary" sx={ButtonStyle}  >
                    Buy
                  </Button>
                  </a>
          </CardActions>
      </Card> 



      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.money.com/2022/01/Explainer-What-Is-Ethereum.jpg?quality=60&w=1600"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              Etherium
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/en/how-to-buy/ethereum" target="_blank" style={{textDecoration: "none"}}>
          <Button size="small" color="primary">
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 



      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://geoim.bloomberght.com/2021/12/10/ver1639138853/2294050_620x349.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              Tether
            </Typography>
            <Typography variant="body2" color="text.secondary">
            USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/en/how-to-buy/tether" target="_blank" style={{textDecoration: "none"}}>
          <Button size="small" color="primary" >
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 



      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://bmicdn.b-cdn.net/wp-content/uploads/2022/04/binance-coin-bnb.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              BNB
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/tr/how-to-buy/bnb" target="_blank"  style={{textDecoration: "none"}}>
          <Button size="small" color="primary">
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 
      </Box>
      



      <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>

        
        <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.coinkolik.com/wp-content/uploads/2019/06/Ripple-Coin-XRP-Fiyat.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              Ripple
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Launched in 2021, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/tr/how-to-buy/xrp" target="_blank" style={{textDecoration:"none"}}>
          <Button size="small" color="primary">
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 

      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/premium-vector/mana-coin-cryptocurrency-concept-banner-background_181623-344.jpg?w=1480"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
            Decentraland
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Decentraland (MANA) defines itself as a virtual reality platform powered by the Ethereum blockchain that allows users to create, experience, and monetize content and applications.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/tr/how-to-buy/xrp"target="_blank" style={{textDecoration:"none"}}>
          <Button size="small" color="primary">
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 

      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.coinkolik.com/wp-content/uploads/2021/10/doge-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              Dogecoin
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
        <a href="https://www.binance.com/tr/how-to-buy/dogecoin" target="_blank" style={{textDecoration:"none"}}>
          <Button size="small" color="primary">
            Buy
          </Button>
          </a>
        </CardActions>
      </Card> 

      <Card sx={CardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://responsive.fxempire.com/v7/_fxempire_/2021/11/Depositphotos_508751054_S-1.jpg?func=cover&q=70&width=700"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={CoinNames}>
              Filecoin
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Filecoin is a decentralized storage system that aims to “store humanity’s most important information.” The project raised $205 million in an initial coin offering (ICO) in 2017, and initially planned a launch date for mid-2019. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={ButtonStyle}>
          <a href="https://www.binance.com/tr/how-to-buy/filecoin" target="_blank" style={{textDecoration:"none"}}>
          <Button size="small" color="primary">
            BUY
          </Button>
          </a>
        </CardActions>
      </Card> 
  </Box>


  
  
  </>
)
}

export default CardPro