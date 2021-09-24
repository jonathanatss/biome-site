import { Container, Row, Col} from "react-bootstrap";
import MapApi from "../components/MapApi/index";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import {ImFacebook} from "react-icons/im"
import Titulo from "@components/Titulo";



export default function Contact() {
  return (
    
    <>
      
  <Container>
   
    <div className={`history_layout`}>
          <div className={`history_p`}>
             
          <Row>
            <Col lg={6} sm={12} xs={12}>
              <Row>
                <Titulo title={"Entre em contato"} color={"#3A68A1"}  />
              </Row>
                      
             <Row>
              <p  className={`text-center`}>
                Envie uma mensagem em qualquer canal BioMe caso tenha perguntas ou sugestões.
              </p>
          
              <div className="s">
                <ul>
                  <li><a href="https://www.facebook.com/BioMEoficial/"><ImFacebook/></a></li>
                  <li><a href="https://www.instagram.com/biomeoficial/"><FaInstagram /></a></li>
                  <li><a href="https://twitter.com/bioinfo_UFRN"><FaTwitter/></a></li>
                  <li><a href="https://www.linkedin.com/in/biome-ufrn-141249143/"><FaLinkedin /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCBoMo1oCMmCOtK29gBL2bCg"><FaYoutube/></a></li>
               </ul>

              </div>
             </Row>
            </Col>
            <Col lg={6} sm={12} xs={12}>
            <Row>
                <h4 className="title_"> Visite-nos! </h4>
                <MapApi/>
            </Row>
            </Col>
          </Row>
        </div>
      </div>
   </Container>
      </>        
      
    
  );
}
