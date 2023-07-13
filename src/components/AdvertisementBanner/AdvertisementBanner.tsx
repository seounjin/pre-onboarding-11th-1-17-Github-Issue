import { Link } from 'react-router-dom';
import { Wrapper, Image } from './AdvertisementBanner.style';

interface AdvertisementBannerProps {
  imgSrc: string;
  link: string;
}

const AdvertisementBanner = ({ imgSrc, link }: AdvertisementBannerProps) => {
  return (
    <Link to={link} target="_blank">
      <Wrapper>
        <Image src={imgSrc} />
      </Wrapper>
    </Link>
  );
};

export default AdvertisementBanner;
