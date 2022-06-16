
import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "./Premium.css"
import DoneIcon from '@mui/icons-material/Done';


const Premium =()=>{
return (

                         <Card className="Card"  >
                         <div className="CardContent" >
                         <CardContent>
                         <h3>Pro</h3>
                         <h1>$49 <span>/month</span></h1>
                         <hr/>
                         <p><DoneIcon /><b>Unlimited User</b></p>
                         <p><DoneIcon />5 GB Storage</p>
                         <p><DoneIcon />Unlimited Public Project</p>
                         <p><DoneIcon />Community Access</p>
                         <p><DoneIcon />Unlimited Privated Projects</p>
                         <p><DoneIcon />Dedicated Phone Support</p>
                         <p><DoneIcon />Free Subdomain</p>
                         <p><DoneIcon />Monthly Status Reports</p>
                         <Button size="large" >Subcribe</Button>
                         
                         </CardContent>
                         
                          
                         
                         </div>
                       </Card>
                       
)


}
export default Premium;