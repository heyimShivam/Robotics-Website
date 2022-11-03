/** @format */

import "./pages.css";
import { useSpring, animated } from "@react-spring/web";
import MainMembersHome from "../components/mainMembersHome";
import ProjectHighLights from "../components/projectsAndHighlights";
import ContactUs from "../components/contactUs";
import Highlights from "../components/highlights";
import LOGO1 from "./../images/png/linkedin-ico.png";
import LOGO2 from "./../images/png/fb-ico.png";
import LOGO3 from "./../images/png/github-ico.png";
import LOGO4 from "./../images/png/insta-ico.png";
import LOGO5 from "./../images/png/yt-ico.png";

// function RoboticsText() {
//   const styles = useSpring({
//     loop: true,
//     to: [
//       { opacity: 1, color: "#ffaaee" },
//       { opacity: 0, color: "rgb(14,26,19)" },
//     ],
//     from: { opacity: 0, color: "red" },
//   });
//   // ...
//   return (
//     <animated.div className='roboticsText' style={styles}>
//       Hey Welcome to RoboSoc
//     </animated.div>
//   );
// }

function Home() {
  return (
    <>
      <div id='home'>
        <div className='main-banner'></div>
        <div className='backshadow'>
          <div class='frontlook'>
            <div id='stars' />
            <div id='stars2' />
            <div id='stars3' />
          </div>
        </div>

        {/* This Div block is for the text present on Home Page */}
        <div className='container-fluid main-element d-flex justify-content-center'>
          <div className='roboticsname'>
            <div class='home-hero__socials'>
              <div class='home-hero__social'>
                <a href='https://www.linkedin.com/school/robotics-society-national-institute-of-technology-hamipur/about/' class='home-hero__social-icon-link'>
                  <img src={LOGO1} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.facebook.com/robo.soc.nith/' class='home-hero__social-icon-link text-light'>
                  <img src={LOGO2} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.instagram.com/robosocnith/?hl=en' class='home-hero__social-icon-link'>
                  <img src={LOGO4} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.youtube.com/channel/UCcNk3wOBYsFvdoYoHiyhtng' class='home-hero__social-icon-link'>
                  <img src={LOGO5} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://github.com/robosocnith/robosocnith.github.io' class='home-hero__social-icon-link home-hero__social-icon-link--bd-none'>
                  <img src={LOGO3} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
            </div>

            <div className='row'>
              <div className='col main__page__heading'>
                <svg viewBox='0 0 1260 300'>
                  <text text-anchor="middle" x='630' y='270' width='100%'>
                    Robotics Society
                  </text>
                </svg>
              </div>
            </div>

              <div className='row text-light py-5'>
                <div className='col-12 robosoc-text-header'>To be a luminary of the indian society in the field of Robotics.</div>
                <div className='col-12 robosoc-text-header'>Build and sustain a culture to be self reliant to accomplish our vision, by emphasizing on the development of individual quality.</div>
              </div>

            <div className='row robosoc-text-header-box'>
              <div className='col robosoc-text-header'>
                <button className='header-button btn btn-secondary'>Shivam</button>
              </div>
              <div className='col robosoc-text-header'>
                <button className='header-button btn btn-secondary'>Shivam</button>
              </div>
            </div>
            <div className='robo__animation'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 197.60004 221.93357'>
                <g class='robot'>
                  <g class='gear-1'>
                    <path
                      d='M162.9862,84.78638a7.36535,7.36535,0,1,1,10.021-2.7967A7.37337,7.37337,0,0,1,162.9862,84.78638Zm11.579-.19189,3.612,1.76629,1.903-3.3758-3.64-2.2958a9.87743,9.87743,0,0,0,.205-1.1781,10.00941,10.00941,0,0,0-.004-2.3148l4.187-1.5249-1.11-3.7117-4.507,1.1079a10.40821,10.40821,0,0,0-.611-.8863,10.1675,10.1675,0,0,0-1.276-1.3682l1.939-3.9657-3.376-1.9022-2.359,3.7396a10.07277,10.07277,0,0,0-3.626-.4089l-1.61-4.2918-3.701,1.1475,1.122,4.3765a10.00989,10.00989,0,0,0-2.647,2.1031l-4.027-2.014-1.902,3.3758,3.784,2.4354a10.12108,10.12108,0,0,0-.412,3.7136l-4.201,1.52931,1.11,3.7127,4.344-1.06831a10.33607,10.33607,0,0,0,.828,1.2547,10.19119,10.19119,0,0,0,.956,1.0709l-1.945,3.89011,3.375,1.90219,2.257-3.5073a10.08846,10.08846,0,0,0,4.233.5359l1.466,3.9207,3.692-1.1772-1.029-4.02779a10.114,10.114,0,0,0,1.185-.78721A10.00883,10.00883,0,0,0,174.56521,84.59449Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#5b6470'
                    />
                    <path d='M170.6332,80.54779a4.58939,4.58939,0,1,1-1.744-6.25171A4.589,4.589,0,0,1,170.6332,80.54779Z' transform='translate(-12.7582 -15.21742)' fill='#5b6470' />
                  </g>
                  <g class='robot-arm-right'>
                    <path
                      d='M159.88421,96.92578q-.13351.47416-.287.9664c-.171.5449-.36,1.10521-.574,1.6735q-.1785.4863-.383.9817c-.323.7854-.688,1.58161-1.101,2.3778q-.243.46755-.508.935c-.385.67641-.808,1.351-1.271,2.013-.219.3143-.448.6278-.687.93581a22.3563,22.3563,0,0,1-2.163,2.42369c-.293.2856-.598.5639-.912.8359a20.94321,20.94321,0,0,1-2.87,2.0842q-.5625.34035-1.159.6521c-.133.0702-.269.1396-.405.2071a23.03833,23.03833,0,0,1-12.172,2.1971l.481-5.6962a17.60358,17.60358,0,0,0,7.301-.8458c.304-.1054.602-.2189.898-.34219q.483-.20145.953-.43331a15.11255,15.11255,0,0,0,1.717-.997c.267-.1775.526-.363.775-.55389a15.94551,15.94551,0,0,0,2.096-1.92571c.217-.2351.423-.4756.623-.7206a18.65109,18.65109,0,0,0,1.48-2.08869c.173-.27831.336-.56021.492-.843.342-.62059.648-1.2474.921-1.868q.201-.45675.376-.9088c.247-.6278.462-1.2448.648-1.84189q.156-.504.287-.98631a26.94922,26.94922,0,0,0,.919-5.23019l5.71.24139A32.22983,32.22983,0,0,1,159.88421,96.92578Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M142.7192,118.55208a10.57653,10.57653,0,0,1-2.405,4.068,9.07416,9.07416,0,0,1-.79.735,8.32062,8.32062,0,0,1-1.657,1.073,6.34507,6.34507,0,0,1-4.791.422,5.83871,5.83871,0,0,1-.698-.279c-.078-.037-.154-.074-.23-.115a6.026,6.026,0,0,1-1.412-1.033c-2.129-2.08-2.92-5.742-1.748-9.3411a10.16241,10.16241,0,0,1,3.938-5.3536,7.37922,7.37922,0,0,1,2.841-1.1475.24385.24385,0,0,1,.034-.0054,6.161,6.161,0,0,1,1.461-.06219,5.88859,5.88859,0,0,1,1.284.24409l.085.027a5.90232,5.90232,0,0,1,.647.25311C142.6262,109.584,144.1632,114.11538,142.7192,118.55208Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <path
                      d='M137.8672,124.42808a6.34507,6.34507,0,0,1-4.791.422,5.83871,5.83871,0,0,1-.698-.279c-.078-.037-.154-.074-.23-.115a6.026,6.026,0,0,1-1.412-1.033c-2.129-2.08-2.92-5.742-1.748-9.3411a10.16241,10.16241,0,0,1,3.938-5.3536,7.37922,7.37922,0,0,1,2.841-1.1475.24385.24385,0,0,1,.034-.0054,6.161,6.161,0,0,1,1.461-.06219,5.88859,5.88859,0,0,1,1.284.24409c-.29.9764-.5,1.742-.707,2.4652-.248.87191-.78,2.5561-1.842,5.9235-1.165,3.698-1.569,4.92-.938,6.244a3.68076,3.68076,0,0,0,1.301,1.495A3.56056,3.56056,0,0,0,137.8672,124.42808Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M157.8272,94.84968c-2.418-.4197-3.742-3.4271-4.425-4.97539a11.0113,11.0113,0,0,1-.932-4.1539,13.89653,13.89653,0,0,1,.099-1.98151c.071-.63139.34-3.0164,1.078-3.1074.829-.1018,1.795,2.7417,2.058,3.54691a10.58862,10.58862,0,0,1,.894-3.75591c1.048-2.3454,3.546-5.5554,5.522-5.2104a4.02183,4.02183,0,0,1,2.434,2.358,14.24263,14.24263,0,0,1,.21,11.8764C163.5542,91.94948,160.6932,95.34778,157.8272,94.84968Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M157.8272,94.84968c-2.418-.4197-3.742-3.4271-4.425-4.97539a11.0113,11.0113,0,0,1-.932-4.1539,8.79206,8.79206,0,0,0,.798,1.4618c.532.7863,2.208,3.26409,4.501,3.27219,3.049.0099,5.049-4.3512,5.578-5.5068a14.71666,14.71666,0,0,0,1.208-7.3775,14.24263,14.24263,0,0,1,.21,11.8764C163.5542,91.94948,160.6932,95.34778,157.8272,94.84968Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                  </g>
                  <g class='gear'>
                    <path
                      d='M162.9862,84.78638a7.36535,7.36535,0,1,1,10.021-2.7967A7.37337,7.37337,0,0,1,162.9862,84.78638Zm11.579-.19189,3.612,1.76629,1.903-3.3758-3.64-2.2958a9.87743,9.87743,0,0,0,.205-1.1781,10.00941,10.00941,0,0,0-.004-2.3148l4.187-1.5249-1.11-3.7117-4.507,1.1079a10.40821,10.40821,0,0,0-.611-.8863,10.1675,10.1675,0,0,0-1.276-1.3682l1.939-3.9657-3.376-1.9022-2.359,3.7396a10.07277,10.07277,0,0,0-3.626-.4089l-1.61-4.2918-3.701,1.1475,1.122,4.3765a10.00989,10.00989,0,0,0-2.647,2.1031l-4.027-2.014-1.902,3.3758,3.784,2.4354a10.12108,10.12108,0,0,0-.412,3.7136l-4.201,1.52931,1.11,3.7127,4.344-1.06831a10.33607,10.33607,0,0,0,.828,1.2547,10.19119,10.19119,0,0,0,.956,1.0709l-1.945,3.89011,3.375,1.90219,2.257-3.5073a10.08846,10.08846,0,0,0,4.233.5359l1.466,3.9207,3.692-1.1772-1.029-4.02779a10.114,10.114,0,0,0,1.185-.78721A10.00883,10.00883,0,0,0,174.56521,84.59449Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#5b6470'
                    />
                    <path d='M170.6332,80.54779a4.58939,4.58939,0,1,1-1.744-6.25171A4.589,4.589,0,0,1,170.6332,80.54779Z' transform='translate(-12.7582 -15.21742)' fill='#5b6470' />
                  </g>
                  <g class='robot-arm-left'>
                    <g id='Wrench' class='wrench'>
                      <path
                        d='M71.9535,157.57408a.777.777,0,0,1-1.0583.061,17.93905,17.93905,0,0,0-2.2013-1.557c-1.7608-1.055-3.0158-1.807-4.4105-1.454a4.144,4.144,0,0,0-1.8499,1.18,5.29878,5.29878,0,0,0-1.7742,3.031,5.0635,5.0635,0,0,0,.7381,3.385,6.80511,6.80511,0,0,0,5.1222,2.898.77779.77779,0,0,1,.6206,1.072l-.0054.013a.77886.77886,0,0,1-.3837.402,8.991,8.991,0,0,1-5.8761.657,8.814,8.814,0,0,1-6.0204-5.062c-.8562-2.066.0536-2.511-.6324-4.801-.7933-2.648-2.6638-4.237-6.1424-7.193a61.58062,61.58062,0,0,1-5.6653-5.467c-.6648-.732-1.4796-1.667-1.24-2.572.2588-.977,1.6593-1.584,2.7662-1.679,2.2979-.197,3.2911,1.815,7.9156,5.475,4.9296,3.9,6.8639,4.037,7.8938,3.969,1.1938-.079,1.431-.451,3.0467-.516a9.72954,9.72954,0,0,1,5.653,1.295,9.03715,9.03715,0,0,1,3.7397,6.172.7767.7767,0,0,1-.2063.659Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#5b6470'
                      />
                      <path
                        d='M64.2755,151.03508a1.3504,1.3504,0,0,1,.1177,1.547c-.3766.636-1.1194.437-2.1525.93a5.55916,5.55916,0,0,0-2.3313,2.5,6.246,6.246,0,0,0-.9904,3.173c-.0027,1.318.5137,2.014.055,2.554a1.42193,1.42193,0,0,1-1.4837.319c-.6433-.229-.9064-.912-1.3387-2.196-.8564-2.543-.9413-3.179-1.3178-4.109a11.49694,11.49694,0,0,0-2.1245-3.233,27.49629,27.49629,0,0,0-4.7044-4.269c-1.8902-1.453-3.1787-2.222-3.22-3.481-.0041-.124-.025-.761.3592-1.03.4071-.287,1.0879-.034,2.0069.477a18.43455,18.43455,0,0,1,3.3788,2.514c1.3022,1.123,2.288,1.841,3.4655,2.697a11.654,11.654,0,0,0,3.294,2.017,9.04863,9.04863,0,0,0,3.8443-.038C62.9155,151.09908,63.77,150.56508,64.2755,151.03508Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#67717c'
                      />
                    </g>
                    <path
                      d='M59.5404,128.55408a20.07846,20.07846,0,0,0-.9741,2.32c-.124.352-.2378.705-.3415,1.056a25.42268,25.42268,0,0,0-.695,3.024c-.0656.385-.1202.762-.1663,1.128l-.0004.001a27.09566,27.09566,0,0,0-.1555,5.705l-5.6797.633a33.10487,33.10487,0,0,1,.3826-8.537c.0536-.312.1137-.63.1784-.951a29.92391,29.92391,0,0,1,1.0301-3.814c.1047-.305.2158-.612.3341-.917a24.78166,24.78166,0,0,1,1.8957-3.905q.2466-.4095.5139-.816a21.66056,21.66056,0,0,1,2.3211-2.93q.32955-.351.6815-.69a21.17277,21.17277,0,0,1,2.3975-1.994c.0395-.028.0791-.057.1194-.085q.3546-.2505.721-.486a23.19527,23.19527,0,0,1,10.9707-3.5446l.3963,5.7016a17.26353,17.26353,0,0,0-8.1563,2.574q-.3255.2055-.6406.428c-.0676.047-.1342.095-.2001.143a15.18482,15.18482,0,0,0-2.1977,1.954c-.267.286-.5191.58-.7585.879l-.0004.001a16.84659,16.84659,0,0,0-1.4105,2.067l-.0004.001Q59.80285,128.02208,59.5404,128.55408Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M77.6062,123.24708a6.81106,6.81106,0,0,1-6.2553,2.162,5.664,5.664,0,0,1-.7259-.204c-.0802-.028-.1594-.058-.2387-.09a6.05227,6.05227,0,0,1-1.5132-.88,6.6618,6.6618,0,0,1-.8133-.763,8.46814,8.46814,0,0,1-1.9683-4.114,10.6938,10.6938,0,0,1,.0649-4.229,10.15576,10.15576,0,0,1,3.3562-5.7369,7.36813,7.36813,0,0,1,2.7048-1.4393c.0108-.0036.0225-.0063.0333-.009a6.13738,6.13738,0,0,1,.9764-.1829c.1558-.0171.3134-.027.4701-.0324a5.905,5.905,0,0,1,1.3889.127q.2283.04858.4494.11439c3.628,1.0754,5.7365,5.5077,4.7448,10.1661A10.36654,10.36654,0,0,1,77.6062,123.24708Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M77.6062,123.24708a6.81106,6.81106,0,0,1-6.2553,2.162,5.664,5.664,0,0,1-.7259-.204c-.0802-.028-.1594-.058-.2387-.09a6.05227,6.05227,0,0,1-1.5132-.88,8.09057,8.09057,0,0,1-2.7816-4.877c1.1667.811,2.9645,1.73,4.5146,1.113,1.6176-.645,2.1301-2.63,3.0893-6.344a9.2939,9.2939,0,0,0,.4323-4.07381,6.75849,6.75849,0,0,0-.9006-2.2923c.1558-.0171.3134-.027.4701-.0324a5.905,5.905,0,0,1,1.3889.127c3.9008.83039,6.2255,5.4329,5.1942,10.28049A10.36654,10.36654,0,0,1,77.6062,123.24708Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <path
                      d='M60.9098,147.47708a14.51492,14.51492,0,0,0-.1379-1.571c-.0191-.131-.0415-.265-.0676-.404a10.98677,10.98677,0,0,0-1.5553-3.961c-.9116-1.427-2.6795-4.195-5.1337-4.241-2.9076-.053-5.2157,3.742-6.0308,6.4a11.306,11.306,0,0,0-.4348,2.166,13.36687,13.36687,0,0,0-.0405,2.214,14.4684,14.4684,0,0,0,2.5002,7.324,4.02092,4.02092,0,0,0,2.7646,1.959c2.0062.039,3.9842-3.516,4.6605-5.994a10.56326,10.56326,0,0,0,.31-3.847c.3821.755,1.7723,3.417,2.5749,3.191C61.0366,150.50908,60.9361,148.11208,60.9098,147.47708Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                    <path
                      d='M60.1353,143.48409a11.04763,11.04763,0,0,0-.9863-1.943c-.9116-1.427-2.6795-4.195-5.1337-4.241-2.9076-.053-5.2157,3.742-6.0308,6.4a11.306,11.306,0,0,0-.4348,2.166,13.36687,13.36687,0,0,0-.0405,2.214,9.0543,9.0543,0,0,1,2.8548-5.047,7.25664,7.25664,0,0,1,4.5793-1.943A7.30041,7.30041,0,0,1,60.1353,143.48409Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#34345b'
                    />
                  </g>
                  <g class='robot-body'>
                    <path
                      d='M77.6062,123.24708a6.81106,6.81106,0,0,1-6.2553,2.162,5.664,5.664,0,0,1-.7259-.204c-.0802-.028-.1594-.058-.2387-.09a6.05227,6.05227,0,0,1-1.5132-.88,6.6618,6.6618,0,0,1-.8133-.763,3.94461,3.94461,0,0,0,2.7255-.324c.8061-.452,1.1889-1.136,1.9212-2.487a20.78435,20.78435,0,0,0,1.7905-5.039,26.16773,26.16773,0,0,0,.9611-4.5708,20.831,20.831,0,0,0,.0774-3.0813c3.628,1.0754,5.7365,5.5077,4.7448,10.1661A10.36654,10.36654,0,0,1,77.6062,123.24708Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <path
                      d='M132.5462,120.56908v13.207a29.4197,29.4197,0,0,1-28.4626,29.32q-.43365.01348-.8709.014h-.0298c-.2107,0-.4206-.003-.6304-.007q-.36075-.009-.7206-.026a29.466,29.466,0,0,1-26.7918-21.147,29.08318,29.08318,0,0,1-1.161-8.154v-13.207a29.06657,29.06657,0,0,1,2.8741-12.6261,29.61866,29.61866,0,0,1,6.5885-8.9024,29.19885,29.19885,0,0,1,39.7055-.0333q.45.41206.882.8448A29.2429,29.2429,0,0,1,132.5462,120.56908Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#fff'
                    />
                    <path
                      d='M132.5462,120.56908v13.207a29.33355,29.33355,0,1,1-58.6671,0v-13.207a29.06657,29.06657,0,0,1,2.8741-12.6261,41.61684,41.61684,0,0,0,1.1205,22.0221c1.4942,4.386,4.435,13.024,13.2401,17.923.761.424,12.1925,6.585,20.9859,1.712,11.5265-6.389,9.8185-26.912,9.3675-32.335a60.28462,60.28462,0,0,0-7.372-23.92491,29.46033,29.46033,0,0,1,8.952,5.6671q.45.41206.882.8448A29.2429,29.2429,0,0,1,132.5462,120.56908Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <path
                      d='M125.6462,152.62308a29.31148,29.31148,0,0,1-21.5626,10.473q-.43365.01348-.8709.014h-.0298c-.2107,0-.4206-.003-.6304-.007q-.36075-.009-.7206-.026a29.46623,29.46623,0,0,1-26.7918-21.147,67.63978,67.63978,0,0,0,4.5449,5.058c4.8313,4.86,8.9132,8.967,15.4918,11.168,10.3498,3.463,19.7704-.167,22.6074-1.261A36.4099,36.4099,0,0,0,125.6462,152.62308Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#fff'
                    />
                    <path
                      d='M123.0472,99.00728a24.14176,24.14176,0,0,1-39.7054.0333,29.64482,29.64482,0,0,1,2.8677-2.3364,29.17161,29.17161,0,0,1,34.9497.7035Q122.1372,98.16818,123.0472,99.00728Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <path
                      d='M121.1592,97.40758a26.32976,26.32976,0,0,1-6.808,4.09551c-10.7026,4.37909-20.4886-.01721-21.7964-.63051a26.87116,26.87116,0,0,1-6.3453-4.1684,29.17136,29.17136,0,0,1,34.9497.7034Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#fff'
                    />
                    <path d='M110.0281,119.42708a1.0808,1.0808,0,1,1-1.0808-1.081A1.07987,1.07987,0,0,1,110.0281,119.42708Z' transform='translate(-12.7582 -15.21742)' fill='#a2f9f4' />
                  </g>
                  <g class='robot-head'>
                    <g class='robot-antenna'>
                      <path d='M119.6762,25.81128a1.8565,1.8565,0,1,0-2.303,1.8014l-.289,22.7315h1.406l-.289-22.7153A1.857,1.857,0,0,0,119.6762,25.81128Z' transform='translate(-12.7582 -15.21742)' />
                      <path
                        d='M127.4112,43.90428a4.18571,4.18571,0,0,1-4.174,4.1738H112.3447a4.16752,4.16752,0,0,1-3.1335-6.9236c.0595-.0676.1216-.1342.1856-.1982a4.16164,4.16164,0,0,1,2.9479-1.2258h10.8925a4.18535,4.18535,0,0,1,4.154,3.764C127.4042,43.62958,127.4112,43.76648,127.4112,43.90428Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#34345b'
                      />
                      <path
                        d='M127.4112,43.90428a4.18571,4.18571,0,0,1-4.174,4.1738H112.3447a4.16848,4.16848,0,0,1-3.1335-6.9236,1.787,1.787,0,0,0,.2765,1.2636c.399.5405,1.098.6332,2.5219.7206,2.4376.1495,4.0356.1009,6.1246.0901,3.212-.0163,4.819-.0244,4.954,0a1.90305,1.90305,0,0,0,.72,0,2.56146,2.56146,0,0,0,1.351-.9007,2.73937,2.73937,0,0,0,.486-1.8284A4.17742,4.17742,0,0,1,127.4112,43.90428Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#34345b'
                        fill-opacity='0.6'
                      />
                      <path
                        d='M127.4112,43.90428a4.18571,4.18571,0,0,1-4.174,4.1738H112.3447a4.17441,4.17441,0,0,1-4.1242-4.816c1.0186.0504,2.2355.1036,3.609.1468.553.0171,2.1787.0666,4.5037.0901,2.024.0207,3.225.0081,5.224,0,1.45-.0063,3.43-.0108,5.834-.0045C127.4042,43.62958,127.4112,43.76648,127.4112,43.90428Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#d33d3d'
                      />
                      <path
                        d='M117.8192,35.355a9.91453,9.91453,0,1,1,9.915-9.9148A9.877,9.877,0,0,1,117.8192,35.355Zm9.723-13.07889a10.22808,10.22808,0,1,0,.5,3.16409A10.2769,10.2769,0,0,0,127.5422,22.27609Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#64eef2'
                      />
                      <path
                        d='M117.8192,33.84988a8.41423,8.41423,0,1,1,8.41-8.4097A8.42724,8.42724,0,0,1,117.8192,33.84988Zm8.756-10.60737a9.02967,9.02967,0,1,0,.271,2.19767A9.06115,9.06115,0,0,0,126.5752,23.24251Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#64eef2'
                      />
                      <path
                        d='M119.0352,30.78218a5.47834,5.47834,0,1,1,4.262-5.342,5.46845,5.46845,0,0,1-4.262,5.342Zm5.494-5.4933a6.71919,6.71919,0,0,0-6.494-6.557c-.071-.0027-.143-.0036-.216-.0036a6.71958,6.71958,0,0,0-6.712,6.71189c0,.073.0009.1441.0036.2162a6.719,6.719,0,0,0,6.5574,6.4939c.049.0018.1.0027.151.0027a6.72057,6.72057,0,0,0,6.713-6.7128C124.5322,25.38978,124.5312,25.33838,124.5292,25.28888Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#64eef2'
                      />
                      <path
                        d='M124.5292,25.28888l-1.367,1.3672a5.47933,5.47933,0,0,0-6.474-6.57585l1.347-1.34832A6.71918,6.71918,0,0,1,124.5292,25.28888Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#abefef'
                      />
                      <path
                        d='M126.5752,23.24255l-.515.5152a8.436,8.436,0,0,0-6.504-6.54618l.514-.51429A9.06113,9.06113,0,0,1,126.5752,23.24255Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#abefef'
                      />
                      <path
                        d='M127.5422,22.27611l-.247.24679a9.95624,9.95624,0,0,0-6.507-6.54258l.244-.24589A10.27616,10.27616,0,0,1,127.5422,22.27611Z'
                        transform='translate(-12.7582 -15.21742)'
                        fill='#abefef'
                      />
                    </g>
                    <path
                      d='M144.6142,64.39218v10.2624a20.62147,20.62147,0,0,1-20.561,20.5617H82.1321a20.62162,20.62162,0,0,1-20.5605-20.5617V64.39218a20.62093,20.62093,0,0,1,20.5605-20.5609h41.9211A20.62078,20.62078,0,0,1,144.6142,64.39218Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#fff'
                    />
                    <path
                      d='M144.6142,64.39218v10.2624a20.62147,20.62147,0,0,1-20.561,20.5617H82.1321a20.62162,20.62162,0,0,1-20.5605-20.5617v-3.3902a35.9644,35.9644,0,0,0,2.3418,6.9109c1.4114,3.0849,3.6952,7.91171,8.8264,11.0785,4.924,3.0389,9.9535,2.9947,13.0599,2.97221,11.9593-.08641,17.1932.70169,35.8475-.1801a15.01758,15.01758,0,0,0,3.783-.6305,17.3328,17.3328,0,0,0,5.314-2.88221c4.944-4.0909,4.881-14.8568,4.863-18.0137-.041-7.1154-.079-13.4724-4.593-18.6442-2.474-2.8344-5.177-4.0341-9.277-5.8544a51.73249,51.73249,0,0,0-5.872-2.1896h8.188A20.62078,20.62078,0,0,1,144.6142,64.39218Z'
                      transform='translate(-12.7582 -15.21742)'
                      fill='#c0c0c7'
                    />
                    <g class='robot-eyes'>
                      <rect x='68' y='51' width='45px' height='20px' fill='#34345B' rx='10px'></rect>
                      <circle cx='79' cy='61.15167' r='3' fill='#6bd9c8' />
                      <circle cx='102' cy='61.15167' r='3' fill='#6bd9c8' />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div class='home-hero__mouse-scroll-cont'>
          <div class='mouse'></div>
        </div>
      </div>

      <div className='container'>
        <MainMembersHome />
      </div>

      <div>
        <ProjectHighLights />
      </div>

      <div>
        <Highlights />
      </div>

      <div>
        <ContactUs /> <br /> <br />
      </div>
    </>
  );
}

export default Home;
