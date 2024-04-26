import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = memo(({ className }: FooterProps) => (
    <footer
        className={classNames(cls.Footer, {}, [className])}
    >
        <div className={cls.container}>
            <div className={cls.section}>
                <div className={cls.appName}><h2>PaidEmail</h2></div>
                <div className={cls.iconsWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375ZM15 5C11.9075 5 11.4025 5.00875 9.96375 5.0725C8.98375 5.11875 8.32625 5.25 7.71625 5.4875C7.17375 5.6975 6.7825 5.94875 6.36625 6.36625C5.97501 6.74425 5.67419 7.20573 5.48625 7.71625C5.24875 8.32875 5.1175 8.985 5.0725 9.96375C5.0075 11.3438 5 11.8263 5 15C5 18.0925 5.00875 18.5975 5.0725 20.0362C5.11875 21.015 5.25 21.6737 5.48625 22.2825C5.69875 22.8263 5.94875 23.2175 6.36375 23.6325C6.785 24.0525 7.17625 24.3037 7.71375 24.5112C8.33125 24.75 8.98875 24.8825 9.96375 24.9275C11.3438 24.9925 11.8263 25 15 25C18.0925 25 18.5975 24.9912 20.0362 24.9275C21.0138 24.8812 21.6725 24.75 22.2825 24.5138C22.8237 24.3025 23.2175 24.0513 23.6325 23.6362C24.0538 23.215 24.305 22.8238 24.5125 22.2863C24.75 21.67 24.8825 21.0112 24.9275 20.0362C24.9925 18.6562 25 18.1737 25 15C25 11.9075 24.9912 11.4025 24.9275 9.96375C24.8812 8.98625 24.75 8.32625 24.5125 7.71625C24.3241 7.20625 24.0238 6.74495 23.6337 6.36625C23.2559 5.97481 22.7944 5.67396 22.2837 5.48625C21.6712 5.24875 21.0138 5.1175 20.0362 5.0725C18.6562 5.0075 18.1737 5 15 5ZM15 2.5C18.3962 2.5 18.82 2.5125 20.1525 2.575C21.4837 2.6375 22.39 2.84625 23.1875 3.15625C24.0125 3.47375 24.7075 3.90375 25.4025 4.5975C26.0381 5.22237 26.5299 5.97824 26.8438 6.8125C27.1525 7.60875 27.3625 8.51625 27.425 9.8475C27.4838 11.18 27.5 11.6038 27.5 15C27.5 18.3962 27.4875 18.82 27.425 20.1525C27.3625 21.4837 27.1525 22.39 26.8438 23.1875C26.5308 24.0222 26.0389 24.7783 25.4025 25.4025C24.7775 26.0379 24.0216 26.5297 23.1875 26.8438C22.3912 27.1525 21.4837 27.3625 20.1525 27.425C18.82 27.4838 18.3962 27.5 15 27.5C11.6038 27.5 11.18 27.4875 9.8475 27.425C8.51625 27.3625 7.61 27.1525 6.8125 26.8438C5.97791 26.5306 5.22191 26.0387 4.5975 25.4025C3.96176 24.7777 3.46991 24.0218 3.15625 23.1875C2.84625 22.3912 2.6375 21.4837 2.575 20.1525C2.51625 18.82 2.5 18.3962 2.5 15C2.5 11.6038 2.5125 11.18 2.575 9.8475C2.6375 8.515 2.84625 7.61 3.15625 6.8125C3.46905 5.97772 3.961 5.22165 4.5975 4.5975C5.22209 3.96154 5.97804 3.46966 6.8125 3.15625C7.61 2.84625 8.515 2.6375 9.8475 2.575C11.18 2.51625 11.6038 2.5 15 2.5Z" fill="#11047A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M17.5 16.875H20.625L21.875 11.875H17.5V9.375C17.5 8.0875 17.5 6.875 20 6.875H21.875V2.675C21.4675 2.62125 19.9287 2.5 18.3037 2.5C14.91 2.5 12.5 4.57125 12.5 8.375V11.875H8.75V16.875H12.5V27.5H17.5V16.875Z" fill="#11047A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M5 3.75H25C25.3315 3.75 25.6495 3.8817 25.8839 4.11612C26.1183 4.35054 26.25 4.66848 26.25 5V25C26.25 25.3315 26.1183 25.6495 25.8839 25.8839C25.6495 26.1183 25.3315 26.25 25 26.25H5C4.66848 26.25 4.35054 26.1183 4.11612 25.8839C3.8817 25.6495 3.75 25.3315 3.75 25V5C3.75 4.66848 3.8817 4.35054 4.11612 4.11612C4.35054 3.8817 4.66848 3.75 5 3.75ZM6.25 6.25V23.75H23.75V6.25H6.25ZM9.375 11.25C8.87772 11.25 8.40081 11.0525 8.04917 10.7008C7.69754 10.3492 7.5 9.87228 7.5 9.375C7.5 8.87772 7.69754 8.40081 8.04917 8.04917C8.40081 7.69754 8.87772 7.5 9.375 7.5C9.87228 7.5 10.3492 7.69754 10.7008 8.04917C11.0525 8.40081 11.25 8.87772 11.25 9.375C11.25 9.87228 11.0525 10.3492 10.7008 10.7008C10.3492 11.0525 9.87228 11.25 9.375 11.25ZM8.125 12.5H10.625V21.875H8.125V12.5ZM15 13.0375C15.73 12.3313 16.5825 11.875 17.5 11.875C20.0888 11.875 21.875 13.9738 21.875 16.5625V21.875H19.375V16.5625C19.375 15.9823 19.1445 15.4259 18.7343 15.0157C18.3241 14.6055 17.7677 14.375 17.1875 14.375C16.6073 14.375 16.0509 14.6055 15.6407 15.0157C15.2305 15.4259 15 15.9823 15 16.5625V21.875H12.5V12.5H15V13.0375Z" fill="#11047A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M19.125 6.93752C18.175 6.93736 17.2629 7.31017 16.5849 7.97573C15.907 8.64129 15.5174 9.54639 15.5 10.4963L15.465 12.465C15.463 12.5707 15.4386 12.6748 15.3935 12.7704C15.3484 12.866 15.2836 12.9511 15.2033 13.0199C15.1231 13.0887 15.0292 13.1398 14.9278 13.1697C14.8264 13.1997 14.7198 13.2079 14.615 13.1938L12.6638 12.9288C10.0963 12.5788 7.63627 11.3963 5.27627 9.43002C4.52877 13.5675 5.98877 16.4338 9.50502 18.645L11.6888 20.0175C11.7925 20.0827 11.8787 20.1724 11.9398 20.2786C12.0009 20.3848 12.0351 20.5044 12.0393 20.6269C12.0435 20.7493 12.0176 20.871 11.9639 20.9811C11.9102 21.0913 11.8303 21.1866 11.7313 21.2588L9.74127 22.7125C10.925 22.7863 12.0488 22.7338 12.9813 22.5488C18.8788 21.3713 22.8 16.9338 22.8 9.61377C22.8 9.01627 21.535 6.93752 19.125 6.93752ZM13 10.45C13.0218 9.24508 13.3986 8.07336 14.0832 7.08155C14.7678 6.08974 15.7298 5.32192 16.8487 4.87423C17.9676 4.42654 19.1937 4.31887 20.3735 4.56471C21.5532 4.81054 22.6343 5.39895 23.4813 6.25627C24.37 6.25002 25.1263 6.47502 26.8175 5.45002C26.3988 7.50002 26.1925 8.39002 25.3 9.61377C25.3 19.1663 19.4288 23.8113 13.4713 25C9.38627 25.815 3.44627 24.4763 1.74377 22.6988C2.61127 22.6313 6.13627 22.2525 8.17377 20.7613C6.45002 19.625 -0.411226 15.5875 4.09752 4.73252C6.21377 7.20377 8.36002 8.88627 10.535 9.77877C11.9825 10.3725 12.3375 10.36 13.0013 10.4513L13 10.45Z" fill="#11047A" />
                    </svg>
                </div>
            </div>
        </div>
    </footer>
));
