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
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40vh'}}>
      <FacebookShareButton
        url={'aldyandika.id'}
        resetButtonStyle={true}
        quote='Shared from https://seeho.me'
        hashtag=',#seehome'
      >
        <FacebookIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        resetButtonStyle={true}
        title='Seehome Shortlink'
        via='Seehome'
        hashtags={['seehome','shortlinks']}
      >
        <TwitterIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
      </TwitterShareButton>
      <EmailShareButton
        url={url}
        resetButtonStyle={true}
        subject="TestSeeho.me"
        body={`\n\n\n\nShared from <a href="https://seeho.me">seehome</a>\n\n`}
      >
        <EmailIcon size={50} iconFillColor='#1877f2' bgStyle={{ fill: 'transparent' }} />
      </EmailShareButton>
    </div >
  )
}

export default ShareContainer