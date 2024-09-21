import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
//import WalletModal from "../Modal/walletmodal";
//import { Modal } from 'react-modal';
//import { React } from 'react';
// const ModalCSS = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };


function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [reveal, setReveal] = useState(false);

  function handleNavBar(page) {
    setActiveTab(page);
    setReveal(false);
  }

  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }






  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-primary px-5 sm:sticky">
      <div className="flex items-center lg:gap-x-6 xl:gap-x-8">
        <Link to={"/discover"} className=" pr-2.5">
          <p className="text-white/80 text-sm font-mono">ALGOSAGE</p>
        </Link>
        <nav className="h-full items-center flex relative">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>
          <div
            className="cursor-pointer text-2xl relative outline-none transform-none text-white flex lg:hidden"
            onClick={() => setReveal(true)}
          >
            <AiOutlineMenu />
          </div>
          {window.innerWidth <= 768 && reveal && (
            <div className="flex-col lg:flex-row m-0 flex h-[600px] lg:h-full list-none items-left lg:items-center lg:gap-4 px-4  lg:p-0 absolute top-[40px] lg:top-0 w-[1000px] bg-primary lg:bg-transparent lg:relative -left-[105px] lg:left-0">
              <div onClick={() => handleNavBar("discover")}>
                <Link
                  to={"/discover"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${activeTab === "discover" ? "text-white bg-light/30" : ""
                    } `}
                >
                  Discover
                </Link>
              </div>
              <div onClick={() => handleNavBar("dashboard")}>
                <Link
                  to={"/dashboard"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light${activeTab === "dashboard" ? "text-white bg-light/30" : ""
                    } `}
                >
                  Dashboard
                </Link>
              </div>
              {/* <div onClick={() => handleNavBar("staking")}>
                <Link
                  to={"/staking"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "staking" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Stake algo
                </Link>
              </div>
              <div onClick={() => handleNavBar("revenue")}>
                <Link
                  to={"/revenue"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "revenue" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Revenue
                </Link>
              </div> */}
            </div>
          )}
          {window.innerWidth > 768 && (
            <div className="flex-col lg:flex-row m-0 flex h-[600px] lg:h-full list-none items-left lg:items-center lg:gap-4 px-4  lg:p-0 absolute top-[40px] lg:top-0 w-[1000px] bg-primary lg:bg-transparent lg:relative -left-[105px] lg:left-0">
              <div onClick={() => setActiveTab("discover")}>
                <Link
                  to={"/discover"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${activeTab === "discover" ? "text-white bg-light/30" : ""
                    } `}
                >
                  Discover
                </Link>
              </div>
              <div onClick={() => setActiveTab("dashboard")}>
                <Link
                  to={"/dashboard"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light${activeTab === "dashboard" ? "text-white bg-light/30" : ""
                    } `}
                  page={1}
                >
                  Dashboard
                </Link>
              </div>
              {/* <div onClick={() => setActiveTab("staking")}>
                <Link
                  to={"/staking"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "staking" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Stake algo
                </Link>
              </div>
              <div onClick={() => setActiveTab("revenue")}>
                <Link
                  to={"/revenue"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "revenue" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Revenue
                </Link>
              </div> */}
            </div>
          )}
        </nav>
      </div>
      <div className="flex gap-4">
        <button  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-light/10 hover:bg-light/30 rounded-lg">
          {/* Connect Wallet */}
          <div role="dialog" id="radix-:R166:" aria-describedby="radix-:R166H2:" aria-labelledby="radix-:R166H1:" data-state="open" className="py-6 fixed top-full sm:w-[calc(100%_-_32px)] left-1/2 sm:top-1/2 z-50 flex flex-col gap-y-5 max-w-xl translate-x-[-50%] translate-y-[-100%] sm:translate-y-[-50%] bg-black-90 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg outline-none h-auto w-full px-0 sm:max-w-[360px]" tabIndex="-1" style="pointer-events: auto;">
            <div className="flex flex-col space-y-1.5 text-left px-6 pb-2">
              <h2 id="radix-:R166H1:" className="text-lg font-semibold leading-none tracking-tight">Connect a wallet</h2>
              <p id="radix-:R166H2:" className="text-xs text-white-80 max-w-[240px]">If you don&apos;t have a wallet, you can select a provider and create one now.</p>
            </div>
            <div>
              <button className="flex w-full items-center gap-2 px-6 py-5 text-left text-sm text-white hover:bg-black-70">
                <img alt="MetaMask logo" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetamask.83a0d19f.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetamask.83a0d19f.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetamask.83a0d19f.png&amp;w=48&amp;q=75" width="24" height="24" decoding="async" data-nimg="1" style="" />MetaMask</button>
              <button className="flex w-full items-center gap-2 px-6 py-5 text-left text-sm text-white hover:bg-black-70">
                <img alt="Browser Wallet logo" src="/_next/static/media/injected.cbb029b9.svg" width="24" height="24" decoding="async" data-nimg="1" style="" />Browser Wallet</button>
              <button className="flex w-full items-center gap-2 px-6 py-5 text-left text-sm text-white hover:bg-black-70">
                <img alt="Coinbase Wallet logo" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoinbase.c553f4c3.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoinbase.c553f4c3.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoinbase.c553f4c3.png&amp;w=48&amp;q=75" width="24" height="24" decoding="async" data-nimg="1" style="" />Coinbase Wallet</button>
              <button className="flex w-full items-center gap-2 px-6 py-5 text-left text-sm text-white hover:bg-black-70">
                <img alt="WalletConnect logo" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwalletconnect.5382b5e9.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwalletconnect.5382b5e9.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwalletconnect.5382b5e9.png&amp;w=48&amp;q=75" width="24" height="24" decoding="async" data-nimg="1" style="" />WalletConnect</button>
              <button className="flex w-full items-center gap-2 px-6 py-5 text-left text-sm text-white hover:bg-black-70">
                <img alt="Safe logo" src="/_next/static/media/safe.bd37c853.svg" width="24" height="24" decoding="async" data-nimg="1" style="" />Safe</button>
            </div>
            <button type="button" className="absolute top-6 right-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-black-80 text-white-90 hover:bg-black-60">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29223 7.90518L13.6834 3.51399L12.4288 2.25936L8.0376 6.65055L3.6464 2.25936L2.39178 3.51399L6.78297 7.90518L2.39178 12.2964L3.6464 13.551L8.0376 9.15981L12.4288 13.551L13.6834 12.2964L9.29223 7.90518Z" fill="currentColor"></path>
              </svg>
              <span className="sr-only">Close
              </span>
            </button>
          </div>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
