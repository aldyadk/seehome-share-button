import ReactTooltip from 'react-tooltip';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

interface Props {
  url: string
}

const ShareContainer = ({ url }: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40vh' }}>
      <div data-tip data-for="fbShareButton">
        <FacebookShareButton
          url={'aldyandika.id'}
          resetButtonStyle={true}
          quote='Shared from https://seeho.me'
          hashtag=',#seehome'
        >
          <FacebookIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
        </FacebookShareButton>
        <ReactTooltip id='fbShareButton' backgroundColor='transparent'>
          <div style={{ border: '2px solid black', backgroundColor: 'white', padding: 10, borderRadius: 5, color: 'black' }}>
              Share to Facebook
          </div>
        </ReactTooltip>
      </div>
      <div data-tip data-for="twitterShareButton">
        <TwitterShareButton
          url={url}
          resetButtonStyle={true}
          title='Seehome Shortlink'
          via='Seehome'
          hashtags={['seehome', 'shortlinks']}
        >
          <TwitterIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
        </TwitterShareButton>
        <ReactTooltip id='twitterShareButton' backgroundColor='transparent'>
          <div style={{ border: '2px solid black', backgroundColor: 'white', padding: 10, borderRadius: 5, color: 'black' }}>
              Share to Twitter
          </div>
        </ReactTooltip>
      </div>
      <div data-tip data-for="emailShareButton">
        <EmailShareButton
          url={url}
          resetButtonStyle={true}
          subject="TestSeeho.me"
          body={`\n\n\n\nShared from <a href="https://seeho.me">seehome</a>\n\n`}
        >
          <EmailIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
        </EmailShareButton>
        <ReactTooltip id='emailShareButton' backgroundColor='transparent'>
          <div style={{ border: '2px solid black', backgroundColor: 'white', padding: 10, borderRadius: 5, color: 'black' }}>
              Share to Email
          </div>
        </ReactTooltip>
      </div>
    </div >
  )
}

export default ShareContainer