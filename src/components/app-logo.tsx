import AppLogoIcon from './app-logo-icon';
import LogoBlack from './logotype-black';

export default function AppLogo() {
    return (
        <>
            <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon className="size-8 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <LogoBlack className="w-20 h-10 " />
            </div>
        </>
    );
}
