	var NoOffFirstLineMenus=4;			// Number of first level items

	var LowBgColor='#999999';			// Background color when mouse is not over
	var LowSubBgColor='#999999';			// Background color when mouse is not over on subs

	var HighBgColor='#bbbbbb';			// Background color when mouse is over
	var HighSubBgColor='#bbbbbb';			// Background color when mouse is over on subs

	var FontLowColor='111111';			// Font color when mouse is not over
	var FontSubLowColor='#111111';			// Font color subs when mouse is not over

	var FontHighColor='#444444';			// Font color when mouse is over
	var FontSubHighColor='#444444';			// Font color subs when mouse is over

	var BorderColor='#000000';			// Border color
	var BorderSubColor='#000000';			// Border color for subs

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
	var StartTop=150;				// Menu offset x coordinate
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
  Menu1=new Array ("Docs", "xnee_documentation.hml", "", 7 ,  20, 120);
  Menu1_1=new Array ("Description", "xnee_description.html", "", "" ,  20, 120);
  Menu1_2=new Array ("News", "xnee_news.html", "", "" ,  20, 120);
  Menu1_3=new Array ("Questions", "xnee_questions.html", "", "" ,  20, 120);
  Menu1_4=new Array ("Some words", "xnee_somewords.html", "", "" ,  20, 120);
  Menu1_5=new Array ("To do", "xnee_todo.html", "", "" ,  20, 120);
  Menu1_6=new Array ("Documentation", "xnee_documentation.html", "", "" ,  20, 120);
  Menu1_7=new Array ("Download", "xnee_download.html", "", "" ,  20, 120);
  Menu2=new Array ("Source", " ", "", 10 ,  20, 120);
  Menu2_1=new Array ("xnee-0.6.3.tar", "tars/xnee-0.6.3.tar", "", 0 ,  20, 120);
  Menu2_2=new Array ("xnee-0.6.2.tar", "tars/xnee-0.6.2.tar", "", 0 ,  20, 120);
  Menu2_3=new Array ("xnee-0.5-beta.tar", "tars/xnee-0.5-beta.tar", "", 0 ,  20, 120);
  Menu2_4=new Array ("xnee-0.4.tar", "tars/xnee-0.4.tar", "", 0 ,  20, 120);
  Menu2_5=new Array ("xnee-0.3.tar", "tars/xnee-0.3.tar", "", 0 ,  20, 120);
  Menu2_6=new Array ("xnee-0.2.tar", "tars/xnee-0.2.tar", "", 0 ,  20, 120);
  Menu2_7=new Array ("xnee-0.12.tar", "tars/xnee-0.12.tar", "", 0 ,  20, 120);
  Menu2_8=new Array ("xnee-0.11.tar", "tars/xnee-0.11.tar", "", 0 ,  20, 120);
  Menu2_9=new Array ("xnee-0.7alpha_1.tar", "tars/xnee-0.7alpha_1.tar", "", 0 ,  20, 120);
  Menu2_10=new Array ("xnee-0.7alpha_2.tar", "tars/xnee-0.7alpha_2.tar", "", 0 ,  20, 120);
  Menu3=new Array ("Binaries", "bin", "", 0 ,  20, 120);
  Menu4=new Array ("Links", " ", "", 8 ,  20, 120);
  Menu4_1=new Array ("Xnee", "/xnee/", "", "" ,  20, 120);
  Menu4_2=new Array ("Xikbd", "/xikbd/", "", "" ,  20, 120);
  Menu4_3=new Array ("Xbut", "/xbut/", "", "" ,  20, 120);
  Menu4_4=new Array ("FSF", "http://www.fsf.org/", "", "" ,  20, 120);
  Menu4_5=new Array ("GNU", "http://www.gnu.org/", "", "" ,  20, 120);
  Menu4_6=new Array ("GNU/Linux", "http://www.linux.org", "", "" ,  20, 120);
  Menu4_7=new Array ("X.org", "http://www.x.org", "", "" ,  20, 120);
  Menu4_8=new Array ("XFree86", "http://www.xfree86.org", "", "" ,  20, 120);
