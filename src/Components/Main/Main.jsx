import React, { useContext ,useState} from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // const [searchQuery, setSearchQuery] = useState('');

  // // Function to handle search based on card click
  // const handleCardClick = (query) => {
  //   setSearchQuery(query);
  //   // Perform the search operation here (e.g., API call, filter data)
  //   console.log('Searching for:', query);
  // };


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini X</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
              <span>Hello! Dev.</span>
              </p>
              <p className="help">How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => onSent('Can AI really take over human jobs?')}>
                <p>Can AI really take over human jobs?</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card" onClick={() => onSent('Productivity Hacks for Better Efficiency')}>
                <p>Productivity Hacks for Better Efficiency</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card" onClick={() => onSent('Need a new hobby to try?')}>
                <p>Need a new hobby to try?</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card" onClick={() => onSent('How did Porsche become a leading sports car manufacturer?')}>
                <p>How did Porsche become a leading sports car manufacturer?</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here.."
            />
            <div className="search-icons">
              {/* <img src={assets.gallery_icon} alt="Gallery Icon" /> */}
              {/* <img src={assets.mic_icon} alt="Mic Icon" /> */}
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="Send Icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini X may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini X apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
