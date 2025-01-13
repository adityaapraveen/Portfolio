import React from 'react';


const Buttons = () => {
  return (
    <div className='allbuttons'>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="light-button flex gap-8">
            {/* WhatsApp Button */}
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <button className="bt">
                <div className="light-holder">
                    <div className="dot" />
                    <div className="light whatsapp-light" />
                </div>
                <div className="button-holder">
                    <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <p>WhatsApp</p>
                </div>
              </button>
            </a>

            {/* GitHub Button */}
            <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
              <button className="bt">
                <div className="light-holder">
                    <div className="dot" />
                    <div className="light github-light" />
                </div>
                <div className="button-holder">
                    <svg className="socialSvg githubSvg" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <p>GitHub</p>
                </div>
              </button>
            </a>

            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
              <button className="bt">
                <div className="light-holder">
                    <div className="dot" />
                    <div className="light linkedin-light" />
                </div>
                <div className="button-holder">
                    <svg xmlns="http://www.w3.org/2000/svg" className="socialSvg linkedinSvg" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    <p>LinkedIn</p>
                </div>
              </button>
            </a>

            {/* Twitter Button */}
            <a href="https://twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer">
              <button className="bt">
                <div className="light-holder">
                    <div className="dot" />
                    <div className="light twitter-light" />
                </div>
                <div className="button-holder">
                    <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.141 0-.282-.007-.423A6.683 6.683 0 0 0 16 3.542a6.577 6.577 0 0 1-1.889.518 3.3 3.3 0 0 0 1.444-1.817 6.588 6.588 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 7.03a9.325 9.325 0 0 1-6.766-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 7.575v.041a3.287 3.287 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.114 3.23 3.23 0 0 1-.615-.057 3.284 3.284 0 0 0 3.067 2.281A6.588 6.588 0 0 1 0 13.557a9.29 9.29 0 0 0 5.026 1.472" />
                    </svg>
                    <p>Twitter</p>
                </div>
              </button>
            </a>
        </div>
        </div>
    </div>
  );
};

const styles = `
a {
  color: inherit;          /* Inherit color from parent element */
  text-decoration: none;   /* Remove underline */
}

  .light-button {
    display: flex;
    gap: 2rem;
  }
  .allbuttons{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:2rem;
    cursor: pointer;
  }
  .light-button button.bt {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button button.bt .button-holder svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button button.bt .light-holder {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    z-index: 2;
  }

  .light-button button.bt .light-holder .light {
    position: absolute;
    top: 5px; /* Position it right below the dot */
    width: 100px; /* Match button width */
    height: 190px; /* Slightly shorter to account for dot */
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background: transparent;
    transition: opacity 0.3s ease;
    opacity: 0;
    transform-origin: top center;
  }

  /* WhatsApp */
  .light-button button.bt:hover .button-holder svg {
    fill: #25D366;
  }

  .light-button button.bt:hover .button-holder {
    color:rgb(255, 255, 255);
    outline:rgb(129, 129, 129) 2px solid;
    outline-offset: 2px;
  }

  .light-button button.bt:hover .light.whatsapp-light {
    opacity: 1;
    background: linear-gradient(
      180deg,
      #25D366 0%,
      rgba(37, 211, 102, 0.5) 30%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* GitHub */
  .light-button button.bt:hover .button-holder svg.githubSvg {
    fill:rgba(255, 255, 255, 1);
  }

  .light-button button.bt:hover .light.github-light {
    opacity: 1;
    background: linear-gradient(
      180deg,
      #333 0%,
      rgba(112, 112, 112, 0.5) 30%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* LinkedIn */
  .light-button button.bt:hover .button-holder svg.linkedinSvg {
    fill: #0077B5;
  }

  .light-button button.bt:hover .light.linkedin-light {
    opacity: 1;
    background: linear-gradient(
      180deg,
      #0077B5 0%,
      rgba(0, 119, 181, 0.5) 30%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* Twitter */
  .light-button button.bt:hover .button-holder svg.twitterSvg {
    fill: #1DA1F2;
  }

  .light-button button.bt:hover .light.twitter-light {
    opacity: 1;
    background: linear-gradient(
      180deg,
      #1DA1F2 0%,
      rgba(29, 161, 242, 0.5) 30%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default () => (
  <>
    <style>{styles}</style>
    <Buttons />
  </>
);