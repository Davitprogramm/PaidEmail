import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './HowItWorks.module.scss';

interface HowItWorksProps {
    className?: string;
}

export const HowItWorks = memo(({ className }: HowItWorksProps) => (
    <div className={classNames(cls.HowItWorks, {}, [className])}>
        <div className={cls.wrapper}>
            <div className={cls.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="78" viewBox="0 0 68 78" fill="none">
                    <path d="M67.226 50.9443V16.3647C67.226 7.57684 60.0762 0.429863 51.2911 0.429863H16.7088C7.9209 0.429863 0.773926 7.57963 0.773926 16.3647V50.9248C0.773926 50.9331 0.773926 50.9387 0.773926 50.9471V61.6382C0.773926 70.4261 7.92369 77.5731 16.7116 77.5731H51.2939C60.0818 77.5731 67.2288 70.4233 67.2288 61.6382L67.226 50.9443ZM4.12276 16.3647C4.12276 9.42428 9.76834 3.7787 16.7088 3.7787H51.2911C58.2316 3.7787 63.8772 9.42428 63.8772 16.3647V50.9443C63.8772 57.8847 58.2316 63.5303 51.2911 63.5303H16.7088C9.76834 63.5303 4.12276 57.8847 4.12276 50.9443V16.3647ZM63.8772 61.6382C63.8772 68.5787 58.2316 74.2243 51.2911 74.2243H16.7088C9.76834 74.2243 4.11997 68.5787 4.11997 61.6382V60.7006C7.03904 64.4568 11.5935 66.882 16.7088 66.882H51.2911C56.4037 66.882 60.9609 64.4568 63.8772 60.7006V61.6382Z" fill="#11047A" />
                    <path d="M10.8204 23.0485C11.7442 23.0485 12.4949 22.2978 12.4949 21.374V17.1964C12.4949 14.414 14.7581 12.1508 17.5404 12.1508H21.7209C22.6446 12.1508 23.3953 11.4001 23.3953 10.4764C23.3953 9.55265 22.6446 8.80196 21.7209 8.80196H17.5432C12.9135 8.80196 9.14881 12.5694 9.14881 17.1964V21.374C9.14602 22.3006 9.89672 23.0485 10.8204 23.0485Z" fill="#11047A" />
                    <path d="M36.4643 50.4089C35.5405 50.4089 34.7898 49.6582 34.7898 48.7344V26.54L29.3703 31.9596C28.7173 32.6126 27.6568 32.6126 27.001 31.9596C26.348 31.3065 26.348 30.2461 27.001 29.5903L35.281 21.3103C35.761 20.8303 36.481 20.6879 37.1061 20.9475C37.7312 21.207 38.1387 21.8182 38.1387 22.4935V48.7289C38.1387 49.6582 37.3908 50.4089 36.4643 50.4089Z" fill="#FFCE20" />
                </svg>
            </div>
            <h3>Registration</h3>
            <p>
                Register to set up your terms, i.e. fee,
                reply time, visability, charity organization (optional) etc. and get a link.
            </p>
        </div>
        <div className={cls.wrapper}>
            <div className={cls.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="78" viewBox="0 0 67 78" fill="none">
                    <path d="M66.726 50.9443V16.3647C66.726 7.57684 59.5763 0.429863 50.7911 0.429863H16.2088C7.4209 0.429863 0.273926 7.57963 0.273926 16.3647V50.9248C0.273926 50.9331 0.273926 50.9387 0.273926 50.9471V61.6382C0.273926 70.4261 7.42369 77.5731 16.2116 77.5731H50.7939C59.5818 77.5731 66.7288 70.4233 66.7288 61.6382L66.726 50.9443ZM3.62276 16.3647C3.62276 9.42428 9.26834 3.7787 16.2088 3.7787H50.7911C57.7316 3.7787 63.3772 9.42428 63.3772 16.3647V50.9443C63.3772 57.8847 57.7316 63.5303 50.7911 63.5303H16.2088C9.26834 63.5303 3.62276 57.8847 3.62276 50.9443V16.3647ZM63.3772 61.6382C63.3772 68.5787 57.7316 74.2243 50.7911 74.2243H16.2088C9.26834 74.2243 3.61997 68.5787 3.61997 61.6382V60.7006C6.53904 64.4568 11.0935 66.882 16.2088 66.882H50.7911C55.9037 66.882 60.4609 64.4568 63.3772 60.7006V61.6382Z" fill="#11047A" />
                    <path d="M10.3204 23.0485C11.2442 23.0485 11.9949 22.2978 11.9949 21.374V17.1964C11.9949 14.414 14.2581 12.1508 17.0404 12.1508H21.2209C22.1446 12.1508 22.8953 11.4001 22.8953 10.4764C22.8953 9.55265 22.1446 8.80196 21.2209 8.80196H17.0432C12.4135 8.80196 8.64881 12.5694 8.64881 17.1964V21.374C8.64602 22.3006 9.39672 23.0485 10.3204 23.0485Z" fill="#11047A" />
                    <path d="M41.3949 50.4283H25.608C24.9577 50.4283 24.3689 50.0515 24.0926 49.4655C23.8163 48.8794 23.9056 48.1845 24.3214 47.685L37.3959 31.9594C38.0405 31.1055 38.3838 30.0869 38.3838 29.018C38.3838 26.3278 36.1931 24.1371 33.5028 24.1371C30.8126 24.1371 28.6247 26.3278 28.6247 29.018C28.6247 29.9417 27.874 30.6924 26.9503 30.6924C26.0266 30.6924 25.2759 29.9417 25.2759 29.018C25.2759 24.4804 28.9652 20.7883 33.5028 20.7883C38.0405 20.7883 41.7326 24.4804 41.7326 29.018C41.7326 30.8404 41.1466 32.5706 40.0387 34.019C40.0247 34.0357 40.0107 34.0552 39.9968 34.072L29.1828 47.0822H41.4005C42.3242 47.0822 43.0749 47.8329 43.0749 48.7566C43.0749 49.6804 42.3187 50.4283 41.3949 50.4283Z" fill="#FFCE20" />
                </svg>
            </div>

            <h3>Announce</h3>
            <p>
                Announce on social networks
                (Fb, Linkedin, Twitter, Instagram, Youtube, Tiktok, Reddit, etc.)
            </p>
        </div>
        <div className={cls.wrapper}>
            <div className={cls.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="78" viewBox="0 0 67 78" fill="none">
                    <path d="M66.726 50.9443V16.3647C66.726 7.57684 59.5763 0.429863 50.7911 0.429863H16.2088C7.4209 0.429863 0.273926 7.57963 0.273926 16.3647V50.9248C0.273926 50.9331 0.273926 50.9387 0.273926 50.9471V61.6382C0.273926 70.4261 7.42369 77.5731 16.2116 77.5731H50.7939C59.5818 77.5731 66.7288 70.4233 66.7288 61.6382L66.726 50.9443ZM3.62276 16.3647C3.62276 9.42428 9.26834 3.7787 16.2088 3.7787H50.7911C57.7316 3.7787 63.3772 9.42428 63.3772 16.3647V50.9443C63.3772 57.8847 57.7316 63.5303 50.7911 63.5303H16.2088C9.26834 63.5303 3.62276 57.8847 3.62276 50.9443V16.3647ZM63.3772 61.6382C63.3772 68.5787 57.7316 74.2243 50.7911 74.2243H16.2088C9.26834 74.2243 3.61997 68.5787 3.61997 61.6382V60.7006C6.53904 64.4568 11.0935 66.882 16.2088 66.882H50.7911C55.9037 66.882 60.4609 64.4568 63.3772 60.7006V61.6382Z" fill="#11047A" />
                    <path d="M10.3203 23.0485C11.244 23.0485 11.9947 22.2978 11.9947 21.374V17.1964C11.9947 14.414 14.258 12.1508 17.0403 12.1508H21.2208C22.1445 12.1508 22.8952 11.4001 22.8952 10.4764C22.8952 9.55265 22.1445 8.80196 21.2208 8.80196H17.0431C12.4133 8.80196 8.64869 12.5694 8.64869 17.1964V21.374C8.6459 22.3006 9.3966 23.0485 10.3203 23.0485Z" fill="#11047A" />
                    <path d="M38.6934 35.6792C40.6022 34.1973 41.819 31.9759 41.819 29.495C41.819 25.0466 37.9036 21.4271 33.0925 21.4271C29.4729 21.4271 26.2832 23.4364 24.966 26.548C24.606 27.3992 25.005 28.3815 25.8562 28.7415C26.7074 29.1015 27.6897 28.7024 28.0497 27.8513C28.8283 26.0122 30.8543 24.7759 33.0897 24.7759C36.0562 24.7759 38.4674 26.894 38.4674 29.495C38.4674 32.0987 36.0534 34.2196 33.0897 34.2196H31.5074C30.5836 34.2196 29.8329 34.9703 29.8329 35.894C29.8329 36.8178 30.5836 37.5685 31.5074 37.5685H33.0897C33.1399 37.5685 33.1901 37.5657 33.2404 37.5657C33.2488 37.5657 33.2571 37.5657 33.2683 37.5657C36.7288 37.5657 39.5446 39.8233 39.5446 42.6001C39.5446 45.3657 36.7315 47.615 33.2711 47.615C30.5781 47.615 28.1892 46.2392 27.3241 44.1908C26.9641 43.3396 25.9818 42.9406 25.1306 43.3006C24.2794 43.6606 23.8804 44.6429 24.2404 45.4941C25.6218 48.7647 29.2525 50.9638 33.2711 50.9638C38.5762 50.9638 42.8934 47.2103 42.8934 42.6001C42.8934 39.7285 41.2274 37.1917 38.6934 35.6792Z" fill="#FFCE20" />
                </svg>
            </div>
            <h3>Message</h3>
            <p>
                Get messages that somebody paid for your attention .
            </p>
        </div>
    </div>
));