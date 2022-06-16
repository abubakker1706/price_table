
import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "./Plus.css"
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';


const Plus =()=>{
return (

                         <Card className="Card"  >
                         <div className="CardContent" >
                         <CardContent>
                         <h3>Plus</h3>
                         <h1>$9<span>/month</span></h1>
                         <hr/>
                         <p><DoneIcon /><b>5 User</b></p>
                         <p><DoneIcon/>5 GB Storage</p>
                         <p><DoneIcon/>Unlimited Public Project</p>
                         <p><DoneIcon/>Community Access</p>
                         <p><DoneIcon/>Unlimited Privated Projects</p>
                         <p><DoneIcon/>Dedicated Phone Support</p>
                         <p><DoneIcon/>Free Subdomain</p>
                         <p><ClearIcon/>Monthly Status Reports</p>
                         <Button size="large" >Subcribe</Button>
                         
                         </CardContent>
                         
                          
                         
                         </div>
                       </Card>
                       
)


}
export default Plus;