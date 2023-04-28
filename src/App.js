import React from 'react';

const Header = () => (
  <div
    style={{
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid white',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        width={40}
        src='https://cdn.discordapp.com/attachments/1005544801921417377/1005623841738985472/ds_logoV2.png'
        alt='DiscoSea Logo'
      />
      <h1 style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}>
        DiscoSea MarketPlace
      </h1>
    </div>
    <div style={{ marginLeft: 'auto' }}>
      <button
        style={{
          width: window.screen.availWidth / 5,
          height: window.screen.availHeight / 20,
        }}
      >
        Connect Wallet
      </button>
    </div>
  </div>
);

const ThumbnailImages = () => {
  const thumbnailStyle = {
    height: window.screen.availHeight / 5,
    display: 'block',
    marginBottom: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={{ float: 'left', marginRight: '20px' }}>
      {Array.from({ length: 5 }, (_, i) => (
        <img
          key={i}
          style={thumbnailStyle}
          src='https://media.discordapp.net/attachments/1082547779609559072/1100097422430044280/base_character_contest_1-min.png'
          alt='Base Character'
        />
      ))}
    </div>
  );
};

const UserInfo = () => (
  <div
    style={{
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src='https://cdn.discordapp.com/avatars/727205214146527272/85e52cf5187b574be3a39d5ef4237d5e.webp?size=80'
        style={{ borderRadius: '90px' }}
        alt='User Avatar'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '10px',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '20px' }}>uasdguy</h1>
        <h1 style={{ color: 'white', fontSize: '20px' }}>
          blendhit 3x champion
        </h1>
      </div>
    </div>
  </div>
);

const Checkout = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          width: window.screen.availWidth / 5,
          height: window.screen.availHeight / 20,
          borderRadius: '10px',
        }}
      >
        Checkout with Solana
      </button>
      <button
        style={{
          width: window.screen.availWidth / 20,
          height: window.screen.availHeight / 20,
          borderRadius: '10px',
        }}
      >
        <img
          src='https://cdn-icons-png.flaticon.com/512/833/833300.png'
          style={{ width: '50%', verticalAlign: 'bottom' }}
          alt='Heart Icon'
        />
      </button>
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />
    <div style={{ padding: '50px', display: 'flex' }}>
      <ThumbnailImages />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          style={{
            height: window.screen.availHeight * 1.095,
            display: 'block',
            width: window.screen.availWidth / 2.5,
            borderRadius: '10px',
          }}
          src='https://media.discordapp.net/attachments/1082547779609559072/1100097422430044280/base_character_contest_1-min.png'
          alt='Main Character'
        />
        <div style={{ marginLeft: '50px', marginTop: -50 }}>
          <h1
            style={{
              fontSize: window.screen.availHeight / 15,
              color: 'whitesmoke',
            }}
          >
            Fighting Guy Animation with Rig
          </h1>
          <h4
            style={{
              color: 'grey',
              fontSize: '25px',
              marginTop: -15,
            }}
          >
            Model description goes here...model created in blendhit comp v5
          </h4>
          <h1
            style={{
              fontSize: window.screen.availHeight / 25,
              color: 'whitesmoke',
            }}
          >
            The Model Includes:
          </h1>
          <h4 style={{ color: 'grey', fontSize: '25px', marginTop: -15 }}>
            Rig
          </h4>
          <h4 style={{ color: 'grey', fontSize: '25px', marginTop: -15 }}>
            Animation
          </h4>
          <h4 style={{ color: 'grey', fontSize: '25px', marginTop: -15 }}>
            File Size 1.2 MB
          </h4>
          <h1
            style={{
              fontSize: window.screen.availHeight / 25,
              color: 'whitesmoke',
            }}
          >
            Made By:
          </h1>
          <UserInfo />
          <h1
            style={{
              fontSize: window.screen.availHeight / 15,
              color: 'whitesmoke',
            }}
          >
            $4.99
          </h1>
          <Checkout />
        </div>
      </div>
    </div>
  </div>
);

export default App;
