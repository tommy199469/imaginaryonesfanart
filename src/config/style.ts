require('dotenv').config();

let {
	REACT_APP_PRIMARY_COLOR,
	REACT_APP_SECONDARY_COLOR,
	REACT_APP_BACKGROUND_COLOR,
	REACT_APP_TEXT_COLOR,
	REACT_APP_TITLE_FONT_FAMILY,
	REACT_APP_TITLE_FONT_SIZE,
	REACT_APP_SUBTITLE_FONT_FAMILY,
	REACT_APP_SUBTITLE_FONT_SIZE,
	REACT_APP_TEXT_FONT_FAMILY,
	REACT_APP_TEXT_FONT_SIZE,
	REACT_APP_LOGO_NAME,
	REACT_APP_LABEL_COLOR,
	REACT_APP_SUCCESS_COLOR,
	REACT_APP_DANGER_COLOR
} = process.env;

const colors = {
	primary: REACT_APP_PRIMARY_COLOR || 'rgb(44, 137, 115)',
	secondary: REACT_APP_SECONDARY_COLOR || 'rgb(110,204,219)',
	background: REACT_APP_BACKGROUND_COLOR || '#fff',
	text: REACT_APP_TEXT_COLOR || '#637280',
	label: REACT_APP_LABEL_COLOR || '#9a9a9a',
	success: REACT_APP_SUCCESS_COLOR || 'rgb(48,183,0)',
	danger: REACT_APP_DANGER_COLOR || '#ec2639',
	containerBackground: '#FAFBFC',
	border: '#F0F3F4',
	defaultButtonBorder: '#D1DBE2',
	defaultButtonText: '#939EAB'
};

const fonts = {
	titleFontFamily: REACT_APP_TITLE_FONT_FAMILY || 'Khula, sans-serif',
	titleFontSize: REACT_APP_TITLE_FONT_SIZE || 24,
	subtitleFontFamily: REACT_APP_SUBTITLE_FONT_FAMILY || 'Khula, sans-serif',
	subtitleFontSize: REACT_APP_SUBTITLE_FONT_SIZE || 18,
	textFontFamily: REACT_APP_TEXT_FONT_FAMILY || 'Khula, sans-serif',
	textFontSize: REACT_APP_TEXT_FONT_SIZE || 12
};

export { colors, fonts };
