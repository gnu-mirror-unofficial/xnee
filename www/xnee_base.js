	var NoOffFirstLineMenus=_XNEE_NR_MENU;			// Number of first level items

	var LowBgColor='#000000';			// Background color when mouse is not over
	var LowSubBgColor='#111111';			// Background color when mouse is not over on subs

	var HighBgColor='111111';			// Background color when mouse is over
	var HighSubBgColor='#111111';			// Background color when mouse is over on subs

	var FontLowColor='#dddddd';			// Font color when mouse is not over
	var FontSubLowColor='#dddddd';			// Font color subs when mouse is not over

	var FontHighColor='#ffffff';			// Font color when mouse is over
	var FontSubHighColor='#ffffff';			// Font color subs when mouse is over

	var BorderColor='#303030';			// Border color
	var BorderSubColor='#606060';			// Border color for subs

	var BorderWidth=0;				// Border width
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=12;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.0;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=120;				// Menu offset x coordinate
	var StartLeft=10;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=500;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=0;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}
