import styles from './header.module.scss';
import { Dropdown } from '@component/ui/Dropdown';
import { CurrencyIcon, EnglishIcon, UkrainianIcon } from '@component/assets/icons/icons';

const currencies = [
    { icon: <CurrencyIcon width="20" height="20" />, value: "USD" },
    { icon: <CurrencyIcon width="20" height="20" />, value: "UAH" },
    { icon: <CurrencyIcon width="20" height="20" />, value: "EUR" },
];

const languages = [
    { icon: <EnglishIcon width="20" height="20" />, value: "EN" },
    { icon: <UkrainianIcon width="20" height="20" />, value: "UA" },
];

const someTool = [
    { icon: <EnglishIcon width="20" height="20" />, value: "" }
]

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <span className={styles.headerLogoWrapper}></span>
            <div className={styles.headerToolbar}>
                <Dropdown items={currencies} defaultValue="USD" />
                <Dropdown items={languages} defaultValue="UA" />
                <Dropdown items={someTool} defaultValue="" />
            </div>
        </header>
    )
}