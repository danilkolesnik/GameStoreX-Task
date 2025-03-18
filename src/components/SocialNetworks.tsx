import styles from './social.networks.module.scss';
import { GoogleIcon, AppleIcon, FacebookIcon, DiscordIcon, TelegramIcon } from '@component/assets/icons/icons';
const SocialNetworks = () => {
    return (
        <div className={styles.container}>
            <span className={styles.caption}>Use social networks</span>
            <div className={styles.socialNetworksWrapper}>
                <GoogleIcon width='32' height='32' />
                <AppleIcon width='32' height='32' />
                <FacebookIcon width='32' height='32' />
                <DiscordIcon width='32' height='32' />
                <TelegramIcon width='32' height='32' />
            </div>
        </div>
    )
}

export default SocialNetworks;