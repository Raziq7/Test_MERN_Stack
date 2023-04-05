// import { Container, Grid, InputBase, Typography } from "@material-ui/core";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from '@mui/material'
import { Email } from '@mui/icons-material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import AppleIcon from '@mui/icons-material/Apple'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import Swal from 'sweetalert2'

import './footer.css'
import { Box } from '@mui/system'

const DownFooter = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={3} md={6} xs={12} className="footer-contact">
              <Typography variant="h6">
                <img width={150} src="/" alt="" />
              </Typography>
              <Typography>
                calicut
                <br />
                68542 kozhikode
                <br />
                india
                <br />
                <br />
                <strong>Phone:</strong> 654845465
                <br />
                <strong>Email:</strong> ecample@gamil.com
                <br />
              </Typography>
            </Grid>
            <Grid item lg={2} md={6} xs={6} className="footer-links">
              <Typography variant="h6" style={{ color: 'black' }}>
                Useful Links
              </Typography>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">WhatsApp Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">Terms and Conditions of service</a>
                </li>
              </ul>
            </Grid>
            <Grid item lg={3} md={6} xs={6} className="footer-links">
              <Typography variant="h6" style={{ color: 'black' }}>
                Our policy
              </Typography>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">Payment Policy</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">Return & Refund Policy</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{' '}
                  <a href="#">Shipping Policy</a>
                </li>
              </ul>
            </Grid>
            <Grid item lg={4} md={6} className="footer-newsletter">
              <Typography variant="h6" style={{ color: 'black' }}>
                Contact us
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginTop: '25px',
                }}
              >
                <HeadsetMicIcon style={{ fontSize: 'xx-large' }} />
                <Typography>
                  Have any question?
                  <br />
                  <a>+ 123 456 789</a>
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    color: '#1976d2',
                    borderColor: '#1976d2',
                    backgroundColor: 'white',
                  }}
                >
                  Chat
                </Button>
              </div>

              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    color: '#fff',
                    borderColor: 'black',
                    backgroundColor: 'black',
                    marginRight: 10,
                    fontSize: 'xx-small',
                  }}
                  startIcon={<AppleIcon />}
                >
                  Download on the App Store
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    color: '#fff',
                    borderColor: 'black',
                    backgroundColor: 'black',
                    marginRight: 10,
                    fontSize: 'xx-small',
                  }}
                  startIcon={
                    <IconButton
                      href="#"
                      style={{
                        backgroundColor: 'black',
                        padding: 10,
                        borderRadius: 5,
                        marginRight: 10,
                      }}
                    >
                      <PhoneAndroidOutlinedIcon
                        style={{ fontSize: 30, color: 'white' }}
                      />
                    </IconButton>
                  }
                >
                  Get it on Google Play
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  )
}

export default DownFooter
