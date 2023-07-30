import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Container, InfoUsuario, NameUsuario, Nav } from "./styles";
import { Link, useLocation } from "react-router-dom";
import picture from "../../assets/picture.png";

export function Header() {
  const { signOut } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link to="aluno" end="true" className={isActive("/app/aluno")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16013 12.3375C9.99779 11.7798 10.6338 10.9674 10.974 10.0204C11.3142 9.07331 11.3406 8.04191 11.0493 7.07868C10.758 6.11546 10.1644 5.27155 9.35641 4.67175C8.54838 4.07195 7.56879 3.74811 6.56248 3.74811C5.55617 3.74811 4.57657 4.07195 3.76855 4.67175C2.96053 5.27155 2.36698 6.11546 2.07567 7.07868C1.78437 8.04191 1.81078 9.07331 2.15099 10.0204C2.49121 10.9674 3.12716 11.7798 3.96482 12.3375C2.44958 12.896 1.15553 13.9294 0.275759 15.2836C0.229521 15.3523 0.197405 15.4296 0.181276 15.5108C0.165147 15.592 0.165327 15.6757 0.181807 15.7568C0.198286 15.838 0.230736 15.9151 0.27727 15.9836C0.323804 16.0522 0.383494 16.1107 0.45287 16.156C0.522246 16.2012 0.599925 16.2322 0.68139 16.2472C0.762856 16.2622 0.846484 16.2608 0.927412 16.2432C1.00834 16.2255 1.08496 16.192 1.1528 16.1445C1.22065 16.097 1.27838 16.0364 1.32263 15.9664C1.89013 15.0936 2.66666 14.3764 3.58173 13.8798C4.49679 13.3833 5.52139 13.1233 6.56248 13.1233C7.60357 13.1233 8.62817 13.3833 9.54323 13.8798C10.4583 14.3764 11.2348 15.0936 11.8023 15.9664C11.894 16.1027 12.0356 16.1974 12.1965 16.23C12.3575 16.2627 12.5248 16.2307 12.6623 16.141C12.7999 16.0513 12.8966 15.9111 12.9315 15.7506C12.9665 15.5902 12.9369 15.4224 12.8492 15.2836C11.9694 13.9294 10.6754 12.896 9.16013 12.3375ZM3.12498 8.43751C3.12498 7.75764 3.32658 7.09303 3.7043 6.52774C4.08202 5.96244 4.61888 5.52185 5.247 5.26167C5.87512 5.0015 6.56629 4.93342 7.2331 5.06606C7.89991 5.1987 8.51241 5.52609 8.99316 6.00683C9.4739 6.48757 9.80129 7.10008 9.93393 7.76689C10.0666 8.4337 9.99849 9.12486 9.73831 9.75298C9.47814 10.3811 9.03754 10.918 8.47225 11.2957C7.90696 11.6734 7.24235 11.875 6.56248 11.875C5.65111 11.874 4.77737 11.5115 4.13294 10.867C3.48851 10.2226 3.12601 9.34887 3.12498 8.43751ZM19.5422 16.1484C19.4033 16.239 19.2342 16.2707 19.0721 16.2365C18.9099 16.2024 18.7679 16.1052 18.6773 15.9664C18.1105 15.0931 17.3341 14.3755 16.4188 13.8792C15.5036 13.3829 14.4786 13.1236 13.4375 13.125C13.2717 13.125 13.1127 13.0592 12.9955 12.942C12.8783 12.8247 12.8125 12.6658 12.8125 12.5C12.8125 12.3342 12.8783 12.1753 12.9955 12.0581C13.1127 11.9409 13.2717 11.875 13.4375 11.875C13.9437 11.8745 14.4436 11.7623 14.9014 11.5462C15.3592 11.3301 15.7636 11.0156 16.0858 10.6251C16.4079 10.2347 16.6399 9.77785 16.765 9.28733C16.8902 8.79682 16.9055 8.28472 16.8097 7.78763C16.714 7.29053 16.5097 6.82071 16.2114 6.41173C15.9131 6.00275 15.5281 5.6647 15.084 5.42175C14.6399 5.17881 14.1476 5.03695 13.6423 5.00631C13.137 4.97568 12.6311 5.05702 12.1609 5.24454C12.0842 5.27768 12.0017 5.29512 11.9182 5.29583C11.8347 5.29653 11.7519 5.28049 11.6746 5.24865C11.5974 5.21681 11.5274 5.16981 11.4686 5.11044C11.4099 5.05107 11.3636 4.98052 11.3326 4.90297C11.3016 4.82542 11.2864 4.74244 11.288 4.65893C11.2896 4.57542 11.3079 4.49308 11.3419 4.41677C11.3758 4.34046 11.4248 4.27173 11.4857 4.21464C11.5467 4.15755 11.6185 4.11326 11.6969 4.08438C12.773 3.65521 13.9699 3.63976 15.0568 4.04103C16.1437 4.4423 17.0434 5.23185 17.5825 6.25737C18.1215 7.28288 18.2617 8.4717 17.976 9.59448C17.6903 10.7173 16.9988 11.6944 16.0351 12.3375C17.5504 12.896 18.8444 13.9294 19.7242 15.2836C19.8147 15.4224 19.8464 15.5915 19.8123 15.7537C19.7781 15.9159 19.681 16.0579 19.5422 16.1484Z"
                  fill="#F7F7F7"
                />
              </svg>
              Aluno
            </Link>
          </li>
          <li>
            <Link to="grupo" end="true" className={isActive("/app/grupo")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.375 5.625H3.125C2.79348 5.625 2.47554 5.7567 2.24112 5.99112C2.0067 6.22554 1.875 6.54348 1.875 6.875V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H14.375C14.7065 16.875 15.0245 16.7433 15.2589 16.5089C15.4933 16.2745 15.625 15.9565 15.625 15.625V6.875C15.625 6.54348 15.4933 6.22554 15.2589 5.99112C15.0245 5.7567 14.7065 5.625 14.375 5.625ZM14.375 15.625H3.125V6.875H14.375V15.625ZM18.125 4.375V13.75C18.125 13.9158 18.0592 14.0747 17.9419 14.1919C17.8247 14.3092 17.6658 14.375 17.5 14.375C17.3342 14.375 17.1753 14.3092 17.0581 14.1919C16.9408 14.0747 16.875 13.9158 16.875 13.75V4.375H5C4.83424 4.375 4.67527 4.30915 4.55806 4.19194C4.44085 4.07473 4.375 3.91576 4.375 3.75C4.375 3.58424 4.44085 3.42527 4.55806 3.30806C4.67527 3.19085 4.83424 3.125 5 3.125H16.875C17.2065 3.125 17.5245 3.2567 17.7589 3.49112C17.9933 3.72554 18.125 4.04348 18.125 4.375Z"
                  fill="#F7F7F7"
                />
              </svg>
              Grupo
            </Link>
          </li>
          <li>
            <Link
              to="exercicio"
              end="true"
              className={isActive("/app/exercicio")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_170)">
                  <path
                    d="M19.375 9.375H18.75V6.875C18.75 6.54348 18.6183 6.22554 18.3839 5.99112C18.1495 5.7567 17.8315 5.625 17.5 5.625H16.25V5C16.25 4.66848 16.1183 4.35054 15.8839 4.11612C15.6495 3.8817 15.3315 3.75 15 3.75H13.125C12.7935 3.75 12.4755 3.8817 12.2411 4.11612C12.0067 4.35054 11.875 4.66848 11.875 5V9.375H8.125V5C8.125 4.66848 7.9933 4.35054 7.75888 4.11612C7.52446 3.8817 7.20652 3.75 6.875 3.75H5C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V5.625H2.5C2.16848 5.625 1.85054 5.7567 1.61612 5.99112C1.3817 6.22554 1.25 6.54348 1.25 6.875V9.375H0.625C0.45924 9.375 0.300269 9.44085 0.183058 9.55806C0.065848 9.67527 0 9.83424 0 10C0 10.1658 0.065848 10.3247 0.183058 10.4419C0.300269 10.5592 0.45924 10.625 0.625 10.625H1.25V13.125C1.25 13.4565 1.3817 13.7745 1.61612 14.0089C1.85054 14.2433 2.16848 14.375 2.5 14.375H3.75V15C3.75 15.3315 3.8817 15.6495 4.11612 15.8839C4.35054 16.1183 4.66848 16.25 5 16.25H6.875C7.20652 16.25 7.52446 16.1183 7.75888 15.8839C7.9933 15.6495 8.125 15.3315 8.125 15V10.625H11.875V15C11.875 15.3315 12.0067 15.6495 12.2411 15.8839C12.4755 16.1183 12.7935 16.25 13.125 16.25H15C15.3315 16.25 15.6495 16.1183 15.8839 15.8839C16.1183 15.6495 16.25 15.3315 16.25 15V14.375H17.5C17.8315 14.375 18.1495 14.2433 18.3839 14.0089C18.6183 13.7745 18.75 13.4565 18.75 13.125V10.625H19.375C19.5408 10.625 19.6997 10.5592 19.8169 10.4419C19.9342 10.3247 20 10.1658 20 10C20 9.83424 19.9342 9.67527 19.8169 9.55806C19.6997 9.44085 19.5408 9.375 19.375 9.375ZM2.5 13.125V6.875H3.75V13.125H2.5ZM6.875 15H5V5H6.875V15ZM15 15H13.125V5H15V13.7359C15 13.7406 15 13.7453 15 13.75C15 13.7547 15 13.7594 15 13.7641V15ZM17.5 13.125H16.25V6.875H17.5V13.125Z"
                    fill="#F7F7F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_170">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Exercício
            </Link>
          </li>
          <li>
            <Link to="treino" end="true" className={isActive("/app/treino")}>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.15385 7.1148C4.15385 6.87893 4.22679 6.65272 4.35662 6.48593C4.48645 6.31915 4.66254 6.22545 4.84615 6.22545H13.1538C13.3375 6.22545 13.5135 6.31915 13.6434 6.48593C13.7732 6.65272 13.8462 6.87893 13.8462 7.1148C13.8462 7.35067 13.7732 7.57688 13.6434 7.74366C13.5135 7.91045 13.3375 8.00415 13.1538 8.00415H4.84615C4.66254 8.00415 4.48645 7.91045 4.35662 7.74366C4.22679 7.57688 4.15385 7.35067 4.15385 7.1148ZM4.84615 11.5615H13.1538C13.3375 11.5615 13.5135 11.4678 13.6434 11.3011C13.7732 11.1343 13.8462 10.9081 13.8462 10.6722C13.8462 10.4363 13.7732 10.2101 13.6434 10.0433C13.5135 9.87654 13.3375 9.78285 13.1538 9.78285H4.84615C4.66254 9.78285 4.48645 9.87654 4.35662 10.0433C4.22679 10.2101 4.15385 10.4363 4.15385 10.6722C4.15385 10.9081 4.22679 11.1343 4.35662 11.3011C4.48645 11.4678 4.66254 11.5615 4.84615 11.5615ZM18 1.7787V18.6763C17.9999 18.8279 17.9697 18.977 17.9122 19.1093C17.8547 19.2417 17.7718 19.353 17.6714 19.4326C17.571 19.5122 17.4564 19.5576 17.3386 19.5643C17.2207 19.5711 17.1034 19.539 16.9979 19.4712L14.5385 17.8915L12.079 19.4712C11.9829 19.533 11.8768 19.5652 11.7692 19.5652C11.6617 19.5652 11.5556 19.533 11.4594 19.4712L9 17.8915L6.54058 19.4712C6.4444 19.533 6.33832 19.5652 6.23077 19.5652C6.12322 19.5652 6.01714 19.533 5.92096 19.4712L3.46154 17.8915L1.00212 19.4712C0.896594 19.539 0.779327 19.5711 0.661448 19.5643C0.54357 19.5576 0.428991 19.5122 0.328591 19.4326C0.228192 19.353 0.145302 19.2417 0.0877931 19.1093C0.0302837 18.977 6.29933e-05 18.8279 0 18.6763V1.7787C0 1.30696 0.145879 0.85454 0.405544 0.520969C0.66521 0.187398 1.01739 0 1.38462 0H16.6154C16.9826 0 17.3348 0.187398 17.5945 0.520969C17.8541 0.85454 18 1.30696 18 1.7787ZM16.6154 1.7787H1.38462V17.2378L3.15173 16.1017C3.24791 16.0398 3.35399 16.0077 3.46154 16.0077C3.56909 16.0077 3.67516 16.0398 3.77135 16.1017L6.23077 17.6825L8.69019 16.1017C8.78638 16.0398 8.89245 16.0077 9 16.0077C9.10755 16.0077 9.21363 16.0398 9.30981 16.1017L11.7692 17.6825L14.2287 16.1017C14.3248 16.0398 14.4309 16.0077 14.5385 16.0077C14.646 16.0077 14.7521 16.0398 14.8483 16.1017L16.6154 17.2378V1.7787Z"
                  fill="#F7F7F7"
                />
              </svg>
              Treino
            </Link>
          </li>
          <li>
            <Link
              to="relatoriolog"
              end="true"
              className={isActive("/app/relatoriolog")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f7f7f7"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
              </svg>
              Relatório de Log
            </Link>
          </li>
        </ul>
      </Nav>
      <InfoUsuario>
        {/* <NameUsuario>
          <img src={picture} alt="logo-usuario" />
          <div>
            Olá, <br />
            <span>Academia CityClub</span>
          </div>
        </NameUsuario> */}
        <Button onClick={signOut}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4125 8.78753C18.7542 8.44582 19.3083 8.44582 19.65 8.78753L24.2437 13.3813C24.5854 13.723 24.5854 14.277 24.2437 14.6187L19.65 19.2125C19.3083 19.5542 18.7542 19.5542 18.4125 19.2125C18.0708 18.8708 18.0708 18.3167 18.4125 17.975L22.3876 14L18.4125 10.025C18.0708 9.68326 18.0708 9.12924 18.4125 8.78753Z"
              fill="#C4C4CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 14C10.5 13.5168 10.8918 13.125 11.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H11.375C10.8918 14.875 10.5 14.4832 10.5 14Z"
              fill="#C4C4CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.01256 4.01256C4.34075 3.68438 4.78587 3.5 5.25 3.5H11.375C11.8582 3.5 12.25 3.89175 12.25 4.375C12.25 4.85825 11.8582 5.25 11.375 5.25L5.25 5.25L5.25 22.75H11.375C11.8582 22.75 12.25 23.1418 12.25 23.625C12.25 24.1082 11.8582 24.5 11.375 24.5H5.25C4.78587 24.5 4.34075 24.3156 4.01256 23.9874C3.68437 23.6592 3.5 23.2141 3.5 22.75V5.25C3.5 4.78587 3.68438 4.34075 4.01256 4.01256Z"
              fill="#C4C4CC"
            />
          </svg>
        </Button>
      </InfoUsuario>
    </Container>
  );
}
