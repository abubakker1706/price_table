
import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "./Free.css"
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const Free =()=>{
return (

                         <Card className="Card"  >
                         <div className="CardContent" >
                         <CardContent>
                         <h3>FREE</h3>
                         <h1>$0<span>/month</span></h1>
                         <hr/>
                         <p><DoneIcon />Single User</p>
                         <p><DoneIcon />5 GB Storage</p>
                         <p><DoneIcon />Unlimited Public Project</p>
                         <p><DoneIcon />Community Access</p>
                         <p><ClearIcon/>Unlimited Privated Projects</p>
                         <p><ClearIcon/>Dedicated Phone Support</p>
                         <p><ClearIcon/>Free Subdomain</p>
                         <p><ClearIcon/>Monthly Status Reports</p>
                         <Button size="large" >Subcribe</Button>
                         
                         </CardContent>
                         
                          
                         
                         </div>
                       </Card>
                       
)


}
export default Free;