import MockAd from '../../../../assets/images/banner-ad.jpg'

export const FeedBannerAd = () => {
    return (
        <div className="my-3 h-14">
            <img className='h-14 w-full' src={MockAd} alt='banner ad' />
        </div>
    )
}

export default FeedBannerAd