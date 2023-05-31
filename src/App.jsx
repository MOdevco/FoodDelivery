
import { ArrowForwardIcon, ChatIcon, CheckIcon, CopyIcon, EmailIcon, HamburgerIcon, MoonIcon, PhoneIcon, SearchIcon, StarIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Center, Heading, Link, Text } from '@chakra-ui/react'
import './App.css'
import {aka, bag, bola, chichi, chiken, discount, gosh, hamburger, imgLogo, kala, kofe, lemon, logoo, meat, mesto, osh, qiz } from './assets'

function App() {
  

  return (
    <Box margin={7}>
      <Box  display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <img src={logoo} alt="" />
        </Box>
        <Box display={{base: "none", md: 'block'}} justifyContent="center" gap="70">
          <Box display="flex" gap={20}>
            <Link>Home</Link>
            <Link>Menu</Link>
            <Link>Services</Link>
            <Link>Food Carts</Link>
          </Box>
        </Box>
        <Box display={{base: "block", md: "none"}} fontSize="30">
            <HamburgerIcon/>
        </Box>
        <Box fontSize={20} display={{base: "none", md:"flex"}} gap={4}>
          <SearchIcon/>
          <MoonIcon/>
        </Box>
        </Box>
        <Box marginTop={5}>
          <hr />
        </Box>

        <Box display={{base: "block", lg: "flex"}} gap={20} >

         <Box display="flex" justifyContent={{base: 'center', lg: "flex-start"}} marginTop={5}>
         <Box display={'flex'} flexDirection={'column'} gap={55} >
          <Box>
            <img src={imgLogo} alt="" />
          </Box>
          <Heading size='lg' fontSize={{base: "25", sm: "40", lg: "60"}} >Be the first <br />delivery & <br />Easy pick up</Heading>
          <Text fontSize={{base: '12', sm: '15'}}>We will deliver your food within 30 minutes in your town,If <br /> we would fail,we will give the food free.</Text>
          <Box display={{base: "block", sm: "flex"}} gap="20">
            <Box display={"flex"} flexDirection={{base: "column", sm: "row"}} gap={10}>
              <Box display="flex" alignItems="center" bg="#F95555" roundedTopRight="8" roundedBottomLeft="8" paddingLeft="6" paddingRight="6" color="white">
                  <Text >Order Now</Text>
                <Box fontSize={20}>
                  <ArrowForwardIcon/>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" borderColor="#F95555" borderWidth={1} paddingLeft="6" paddingRight="6" roundedTopRight="8" roundedBottomLeft="8" color="#F95555" >
                  <Text>Book a Table </Text>
              </Box>
            </Box>

           
          </Box>

          <Box color="#F95555" display={{base: "block", sm: "flex"}} alignItems="center" gap="20">
            <Box marginTop={5}> 
              <img src={chiken} alt="" />
              <Text>Chicken biryani</Text>
            </Box>

            <Box borderWidth={1} borderColor="#F95555" padding={{base: '0', sm: "1"}} roundedTopStart={40} roundedTopEnd={15} marginTop={5}>
              <img src={osh} alt="" />
              <Text >Hundi mutton</Text>
            </Box>

            <Box marginTop={5}>
              <img src={gosh} alt="" />
              <Text >kala bhuna</Text>
            </Box>

          </Box>

         </Box>
         </Box>

         <Box display={{base: "block", md: "flex"}} alignItems={{base: "center", lg: "start"}} >
          <Box>
            <img src={discount} alt="" />
          </Box>
          <Box>
          <img src={hamburger} alt="" />
          <Box display="flex" gap={10} marginLeft="10" marginTop={10}>
          <Box >
            <img src={bola} alt="" />
          </Box>
          <Box fontSize={{base: "10", sm: "13", md: "15"}}>
            <Text>We will deliver your food within 30 <br /> minutes in your town.</Text>
            </Box>
          </Box>
          </Box>

         </Box>



        </Box>



        <Box marginTop={20}>
          <Box display={"flex"} justifyContent="center">
            <Heading size={"lg"} fontSize={{base: "15", sm: "25", md: "50"}}>Our Popular Dishes</Heading>
          </Box>
          
            <Box display={{base: "block", lg: "flex"}} justifyContent={"space-between"} alignItems={"center"} marginTop={8}>
              <Box display={{base: "block", md: "flex", lg: "block"}} gap={40} marginTop={10} >
              <Box display={"flex"} justifyContent={"center"}  alignItems={"end"} gap={{base: "1", md: "7"}}>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <Box color={"#FBCB15"}>
                    <StarIcon/>
                  </Box>
                  <Text fontSize={{base: "13", sm: "18"}}>4.5</Text>
                </Box>
                <Box>
                  <img src={kala} alt="" />
                </Box>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <SunIcon/>
                  <Text fontSize={{base: "13", sm: "18"}}>1.5k</Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={8} gap={5}>
                <Heading fontSize={{base: "20", sm: "24"}}>Kala Bhuna</Heading>
                <Text color={"#686868"} fontSize={{base: "9", sm: "17"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                <Box display={"flex"} gap={{base: "18", md: "70"}} alignItems={"center"}>
                  <Heading fontSize={{base: "20", sm: "28"}}>$50.99</Heading>
                  <Text fontSize={{base: "14", sm: "18"}}>Add to Cart</Text>
                </Box>
              </Box>
            </Box>

            <Box display={{base: "block", md: "flex", lg: "block"}} gap={40} marginTop={10} >
              <Box display={"flex"} justifyContent={"center"}  alignItems={"end"} gap={{base: "1", md: "7"}}>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <Box color={"#FBCB15"}>
                    <StarIcon/>
                  </Box>
                  <Text fontSize={{base: "13", sm: "18"}}>4.5</Text>
                </Box>
                <Box>
                  <img src={meat} alt="" />
                </Box>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <Box color={"#F95555"}>
                    <SunIcon/>
                  </Box>
                  <Text fontSize={{base: "13", sm: "18"}}>1.5k</Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={8} gap={5}>
                <Heading fontSize={{base: "20", sm: "24"}}>Meat Cu</Heading>
                <Text color={"#686868"} fontSize={{base: "9", sm: "17"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                <Box display={"flex"} gap={{base: "18", md: "70"}} alignItems={"center"}>
                  <Heading fontSize={{base: "20", sm: "28"}}>$50.99</Heading>
                  <Text color={"#F95555"} fontSize={{base: "14", sm: "18"}}>Add to Cart</Text>
                </Box>
              </Box>
              </Box>

              <Box display={{base: "block", md: "flex", lg: "block"}} gap={40}  marginTop={10} >
              <Box display={"flex"} justifyContent={"center"} alignItems={"end"} gap={{base: "1", md: "7"}}>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <Box color={"#FBCB15"}>
                    <StarIcon/>
                  </Box>
                  <Text fontSize={{base: "13", sm: "18"}}>4.5</Text>
                </Box>
                <Box>
                  <img src={lemon} alt="" />
                </Box>
                <Box fontSize={{base: "13", sm: "18"}}>
                  <SunIcon/>
                  <Text fontSize={{base: "13", sm: "18"}}>1.5k</Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={8} gap={5}>
                <Heading fontSize={{base: "20", sm: "24"}}>Chose your Meals</Heading>
                <Text color={"#686868"} fontSize={{base: "9", sm: "17"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                <Box display={"flex"} gap={{base: "18", md: "70"}} alignItems={"center"}>
                  <Heading fontSize={{base: "20", sm: "28"}}>$50.99</Heading>
                  <Text fontSize={{base: "14", sm: "18"}}>Add to Cart</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={'center'}   marginTop={10}>
            <Box display={"flex"} alignItems={"center"} gap={5} background={" #F95555"} color={"white"} paddingLeft={10} paddingRight={10} roundedBottomLeft={20} roundedTopRight={20}>
              <Text fontSize={{base: "12", sm: "20"}}> See All Dishes</Text>
                <Box fontSize={{base: "15", sm: "25"}}>
                  <ArrowForwardIcon/>
                </Box>
              </Box>
          </Box>
         
        </Box>


        <Box marginTop={10}>
            <Box display={"flex"} justifyContent={"center"}>
              <Heading size={"lg"} fontSize={{base: "20", sm: "35", md: "50"}}>How dose it Works</Heading>
            </Box>

            <Box display={{base: "block", lg: "flex"}} justifyContent={"space-between"} marginTop={10}>
              <Box display={"flex"} justifyContent={"center"}>
                <Box display={{base: "block", sm: "flex", lg: "block"}}>
                  <Box>
                    <img src={kofe} alt="" />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={5}>
                    <Box>
                      <Heading color={"#F95555"} fontSize={{base: "18", sm: "24"}}>Chose your Meals</Heading>
                    </Box>
                    <Box>
                      <Text fontSize={{base: "13", md: "18"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                    </Box>
                  < Box display={"flex"} fontSize={18} gap={2}>
                      <Text>Reed More</Text>
                      <Box>
                        <ArrowForwardIcon/>
                      </Box>
                    </Box>
                    </Box>
                </Box>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                <Box display={{base: "block", sm: "flex", lg: "block"}}>
                  <Box>
                    <img src={mesto} alt="" />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={5}>
                    <Box>
                      <Heading color={"#F95555"} fontSize={{base: "18", sm: "24"}}>Track Your Order</Heading>
                    </Box>
                    <Box>
                      <Text fontSize={{base: "13", md: "18"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                    </Box>
                  < Box display={"flex"} fontSize={18} gap={2}>
                      <Text>Reed More</Text>
                      <Box>
                        <ArrowForwardIcon/>
                      </Box>
                    </Box>
                    </Box>
                </Box>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                <Box display={{base: "block", sm: "flex", lg: "block"}}>
                  <Box>
                    <img src={bag} alt="" />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={5}>
                    <Box>
                      <Heading color={"#F95555"} fontSize={{base: "18", sm: "24"}}>Collect Your Order</Heading>
                    </Box>
                    <Box>
                      <Text fontSize={{base: "13", md: "18"}}>We will deliver your food within 30 <br /> minutes in your town, If we would.</Text>
                    </Box>
                  < Box display={"flex"} fontSize={18} gap={2}>
                      <Text>Reed More</Text>
                      <Box>
                        <ArrowForwardIcon/>
                      </Box>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </Box>

            



        </Box>



        <Box marginTop={10} display={"flex"} justifyContent={"center"}>
          <Box display={{base: "block", lg: 'flex'}} justifyContent={"space-between"} gap={{base: '0', lg: '20'}}>
            <Box display={"flex"} flexDirection={"column"} gap={{base: "15", md: "20"}}>
              <Box>
                <img src={chichi} alt="" />
                <Text fontSize={{base: "10", sm: "18"}}>The standard chunk of Lorem Ipsum used <br /> since the 1500s is reproduced below for <br /> those interested. Sections 1.10.32.</Text>
              </Box>
              <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}   >
                <Box display={"flex"} background={"#F95555"} gap={4} color={"white"} paddingLeft={8} paddingRight={8} paddingTop={1} paddingBottom={1} roundedBottomLeft={15} roundedTopRight={15}>
                  <Text fontSize={{base: "12", sm: "18"}}>Reed More</Text>              
                    <Box fontSize={{base: "12", sm: "18"}}>
                      <ArrowForwardIcon/>
                    </Box>
                </Box>
              </Box>
            </Box>

            <Box>
                <Heading fontSize={{base: "25", sm: "50"}}>Eat Healthy, Stay <br /> Healthy</Heading>
                <Box>
                  <img src={qiz} alt="" />
                </Box>
            </Box>

            <Box marginTop={20} display={"flex"} flexDirection={"column"} gap={20}>
              <Box display={"flex"} justifyContent={'center'}>
                <Box display={"flex"} flexDirection="column" gap={30}>
                 <Box>
                    <Text color={"#878787"}>2 days ago</Text>
                    <Heading fontSize={{base: "15",sm: "25", md: "30", lg: '15'}}>Meet Deanna Cook, a <br /> Kids Cookbook Author</Heading>
                 </Box>
                  <Box display={"flex"} gap={{base: "2" ,sm: '10'}}>
                    <Box>
                      <img src={bola} alt="" />
                    </Box>
                    <Box>
                      <Heading fontSize={{base: "15",sm: "25", md: "25", lg: '14'}}>Md. Athik Foisal</Heading>
                      <Text color={"#878787"} fontSize={{base: "14",sm: "20", md: "21", lg: '14'}}>UI/UX Designer</Text>
                    </Box>
                  </Box>

                </Box>
              </Box>

              <Box display={"flex"} justifyContent={'center'}>
                <Box display={"flex"} flexDirection="column" gap={30}>
                 <Box>
                    <Text color={"#878787"}>2 days ago</Text>
                    <Heading fontSize={{base: "15",sm: "25", md: "30", lg: '15'}}>Meet Deanna Cook, a <br /> Kids Cookbook Author</Heading>
                 </Box>
                  <Box display={"flex"} gap={{base: "2" ,sm: '10'}}>
                    <Box>
                      <img src={bola} alt="" />
                    </Box>
                    <Box>
                      <Heading fontSize={{base: "15",sm: "25", md: "25", lg: '14'}}>Md. Athik Foisal</Heading>
                      <Text color={"#878787"} fontSize={{base: "14",sm: "20", md: "21", lg: '14'}}>UI/UX Designer</Text>
                    </Box>
                  </Box>

                </Box>
              </Box>
            </Box>

          </Box>
        </Box>

   

        <Box display={{base: "block", lg: "flex"}}  marginTop="10" >
           
           <Box display={"flex"} justifyContent={"center"}>
              <Box display={{base: "block", lg: "flex"}} gap={59} >
                <Box>
                  <img src={aka} alt="" />
                </Box>

              <Box display={"flex"} justifyContent="center" flexDirection={"column"}>
                <Box marginTop={"10"}>
                    <Heading fontSize={{base: "18", sm: "35", md: "50", lg: "40"}}>Customers Reaction</Heading>
                </Box>

                  <Box display={"flex"} gap="39" marginTop={10}>
                      <Box display={"Flex"} alignItems="center" gap={{base: "2", sm: "5"}} зadding={1} background={"#ECFDF5"} color={"#064E3B"} fontSize={{base: "10", md: "18"}}>
                          <CheckIcon/>
                          <Text fontSize={{base: "10", sm: "18", lg: "15"}}>Verified Purchase</Text>
                      </Box>
                      <Box>
                          <Text fontSize={{base: "10", sm: "18", lg: "15"}}>23 Nov 2021</Text>
                      </Box>
                  </Box>
                  <Box marginTop={10}>
                    <Text fontSize={{base: "10", sm: "18"}}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet <br /> luctus venenatis, lectus magna fringilla urna, <br /> porttitor </Text>
                  </Box>

                  <Box display={"flex"} gap={{base: "3" ,sm: '10'}} alignItem="center" marginTop={10}>
                      <Box marginTop={{base: "0", sm: '4'}}>
                        <img src={bola} alt="" />
                      </Box>
                      <Box>
                        <Heading fontSize={{base: "13", sm: "18",  lg: '20'}}>Md. Athik Foisal</Heading>
                        <Text color={"#878787"} fontSize={{base: "12", sm: "18", lg: '20'}}>UI/UX Designer</Text>
                        <Box display={"flex"} gap={{base: "0", sm: "1"}} color={"#FCD34D"}fontSize={{base: "10", sm: "18"}}>
                          <StarIcon/>
                          <StarIcon/>
                          <StarIcon/>
                          <StarIcon/>
                          <StarIcon/>
                      </Box>
                      </Box>
                    </Box>
                </Box>
                  
                 

          </Box>
           </Box>
                   

        </Box>



        <Box marginTop={20} display={{base: "block", sm: "flex"}} justifyContent={"space-between"}>
          <Box >
            <Box >
              <img src={logoo} alt="" />
            <Box marginTop={5}>
              <Text fontSize={{base: "20", sm: "22"}}>Design <br /> amazing <br /> digital <br /> experiences <br /> that create <br /> more happy <br /> in the world.</Text>
            </Box>
            </Box>
          </Box>

          <Box marginTop={10}>
             <Box display={"flex"} flexDirection={"column"} gap={4} fontSize={{base: "20", md:  "19"}}>
              <Text color={"#878787"}>Product</Text>
              <Text color={"#F95555"}>Home</Text>
              <Text>Products</Text>
              <Text>About</Text>
              <Text>Contact</Text>
              <Text>FAQ</Text>
              <Text>Releases</Text>
             </Box>
          </Box>

          <Box marginTop={10}>
             <Box display={"flex"} flexDirection={"column"} gap={4} fontSize={{base: "20", md:  "19"}}>
              <Text color={"#878787"}>Social</Text>
              <Text>Twitter</Text>
              <Text>LinkedIn</Text>
              <Text>Facebook</Text>
              <Text>GitHub</Text>
              <Text>AngelList</Text>
              <Text>Dribbble</Text>
             </Box>
          </Box>

          <Box marginTop={10}>
             <Box display={"flex"} flexDirection={"column"} gap={4}  fontSize={{base: "20", md:  "19"}}>
              <Text color={"#878787"}>Legal</Text>
              <Text>Terms</Text>
              <Text>Privacy</Text>
              <Text>Cookies</Text>
              <Text>Licenses</Text>
              <Text>Settings</Text>
             </Box>
          </Box>

        </Box>

        <Box marginTop={20} display={"flex"} justifyContent={"center"} >
        <Box display={{base: 'block', sm: "flex"}} gap={{base: "8" , md: "60", lg: "80"}}>
        <Box>
            <Text fontSize={{base: "13", sm: "14", md: "18"}}>© 2022 Falcon Thought. All rights reserved.</Text>
          </Box>
          <Box display={"flex"} gap={5} marginTop={{base: "10", sm: "0"}} justifyContent={"center"} alignItems={"center"}>
            <ChatIcon/>
            <PhoneIcon/>
            <EmailIcon/>
            <CopyIcon/>
          </Box>
        </Box>
        </Box>








   

    </Box>
    
  )

}

export default App


