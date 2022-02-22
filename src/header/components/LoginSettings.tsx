import { useState } from 'react';
import { useIntl } from 'react-intl';
import { NavDropdown } from 'react-bootstrap';
import { LanguageCode, Settings, ThemeMode } from '../../account/store/settings/types';
import Icon from '../../common/components/Icon';
import { LanguageDialog } from './LanguageDialog';
import { ThemeDialog } from './ThemeDialog';

export interface ILoginSettingsProps {
  settings: Settings;

  onChangeLanguage: (language: LanguageCode) => void;
  onChangeTheme: (theme: ThemeMode) => void;
}

const LoginSettings: React.FC<ILoginSettingsProps> = (props: ILoginSettingsProps) => {
  const intl = useIntl();

  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [showThemeDialog, setShowThemeDialog] = useState<boolean>(false);

  const handleChangeLanguageClick = () => setShowLanguageDialog(true);
  const handleLanguageDialogClose = () => setShowLanguageDialog(false);
  const handleChangeThemeClick    = () => setShowThemeDialog(true);
  const handleThemeDialogClose    = () => setShowThemeDialog(false);

  const handleChangeLanguage = (lang: LanguageCode) => {
    handleLanguageDialogClose();
    props.onChangeLanguage(lang);
  };

  const handleChangeTheme = (theme: ThemeMode) => {
    handleThemeDialogClose();
    props.onChangeTheme(theme);
  };

  return (
    <>
      <NavDropdown
          title={<Icon icon='gear' variant='light' size='2x' />}
          align = 'end'
          id='settings-dropdown'>
        <NavDropdown.Item onClick={handleChangeLanguageClick}>{`${intl.messages['nav.accountmenu.language']} …`}</NavDropdown.Item>
        <NavDropdown.Item onClick={handleChangeThemeClick}>{`${intl.messages['nav.accountmenu.theme']} …`}</NavDropdown.Item>
      </NavDropdown>

      <LanguageDialog
          show     = {showLanguageDialog}
          settings = {props.settings}
          onChangeLanguage = {handleChangeLanguage}
          onClose = {handleLanguageDialogClose} />

      <ThemeDialog
          show     = {showThemeDialog}
          settings = {props.settings}
          onChangeTheme = {handleChangeTheme}
          onClose = {handleThemeDialogClose} />
    </>
  );
};

export default LoginSettings;
