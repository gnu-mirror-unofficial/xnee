#!/bin/sh


export NR_OF_TEMPLATES=`find templates/ -name "*.js" | wc -l | sed 's/[ ]\{1,9\}//g'`
export NR_OF_MENUS=`expr $NR_OF_TEMPLATES + 3`
export MAIN_MENU_NR=5
export WIDTH=120
export HEIGHT=20

export BG_COLOR="#777777"
export FG_COLOR="#666666"

export MENU_BG_COLOR="#9900dd"
export MENU_FG_COLOR="#999999"



function print_static()
{
    _FILE=$1
    _URL_DESCR=$2
    _URL=$3

    touch $_FILE
    echo -n "<a href=\"$_URL\">$_URL_DESCR</a> | " >> $_FILE
}


function add_static_menu()
{
    _FILE=$1
    export _MENU_FILE=$2

    export STR=`cat $_MENU_FILE`
    echo "Changing static menu on $_FILE"
    
    perl -i -p -s -e 's/STATICMENU/$ENV{"STR"}/g' ./$_FILE

}

function add_dynamic_menu()
{
    _FILE=$1
    export _MENU_FILE=$2

    export STR=`cat $_MENU_FILE`
    echo "Changing dynamic menu on $_FILE"
    
    perl -i -p -s -e 's/DYNAMICMENU/$ENV{"STR"}/g' ./$_FILE

}


function rem_dynamic_menu()
{
    _FILE=$1
    export _MENU_FILE=$2

    export STR=`cat $_MENU_FILE`
    echo "Changing static menu on $_FILE"
    
    perl -i -p -s -e 's/DYNAMICMENU//g' ./$_FILE

}


function print_menu()
{
    _FILE=$1
    _MENU=$2
    _NAME=$3
    _URL=$4
    _SUBS=$5
    
    echo "  $_MENU=new Array (\"$_NAME\", \"$_URL\", \"\", $_SUBS ,  $HEIGHT, $WIDTH);" >> $_FILE

}

function gen_src_menu()
{
    _NR=$1
    _HEADER=$2
    _DIR=$3
    _FILES=files.tmp 
    find $_DIR/ -type f -print > $_FILES
   _NR_OF_SUBS=`cat $_FILES | wc -l  | sed 's/[ ]\{1,9\}//g'`
    _SUB_NR=1
    print_menu "xnee.js" "Menu"$_NR "$_HEADER" " " "$_NR_OF_SUBS" ""   
    for i in `cat $_FILES`
    do
	_MENU_NAME="Menu$_NR"_"$_SUB_NR"
#	echo "$_MENU_NAME   ($NR_OF_MENUS -- $_NR_OF_SUBS)  $i"   $_NR_OF_SUBS
	print_menu "xnee.js" "$_MENU_NAME"  "`echo $i | sed 's/[a-zA-Z0-9]*\///g'`"     "$i"  0
	_SUB_NR=`expr $_SUB_NR + 1`
    done
}


function gen_bin_menu()
{
    _NR=$1
    _HEADER=$2
    _DIR=$3
    _FILES=files.tmp 
    find $_DIR/ -type f -print > $_FILES
   _NR_OF_SUBS=0
    _SUB_NR=1
    print_menu "xnee.js" "Menu"$_NR "$_HEADER" "bin" "$_NR_OF_SUBS" ""   
}


function gen_sw_menu()
{
    _NR=$1
    _HEADER=$2
    echo "$_HEADER   $_NR"

    print_menu "xnee.js" "Menu"$_NR     "$_HEADER"  " "       "8" ""   
    print_menu "xnee.js" "Menu"$_NR"_1" "Xnee"      "/xnee/"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_2" "Xikbd"     "/xikbd/" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_3" "Xbut"      "/xbut/"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_4" "FSF"       "http://www.fsf.org/"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_5" "GNU"       "http://www.gnu.org/"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_6" "GNU/Linux"      "http://www.linux.org"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_7" "X.org"      "http://www.x.org"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_8" "XFree86"      "http://www.xfree86.org"  "\"\""  ""   

    
}


function gen_doc_menu()
{
    _NR=$1
    _HEADER=$2
    print_menu "xnee.js" "Menu"$_NR     "$_HEADER"  "xnee_documentation.hml"       "7"     ""   
    print_menu "xnee.js" "Menu"$_NR"_1" "Description"      "xnee_description.html"  "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_2" "News"     "xnee_news.html" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_3" "Questions"     "xnee_questions.html" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_4" "Some words"     "xnee_somewords.html" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_5" "To do"     "xnee_todo.html" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_6" "Documentation"     "xnee_documentation.html" "\"\""  ""   
    print_menu "xnee.js" "Menu"$_NR"_7" "Download"     "xnee_download.html" "\"\""  ""   


    echo "|" >> static_menu.txt
    print_static static_menu.txt "Description"      "xnee_description.html" 
    print_static static_menu.txt "News"     "xnee_news.html" 
    print_static static_menu.txt  "Questions"     "xnee_questions.html" 
    print_static static_menu.txt "Some words"     "xnee_somewords.html"
    print_static static_menu.txt "To do"     "xnee_todo.html" 
    print_static static_menu.txt "Documentation"     "xnee_documentation.html"
    print_static static_menu.txt "Download"     "xnee_download.html" 
    print_static static_menu.txt "Links"     "xnee_links.html" 

}

function gen_about_menu()
{
    _NR=$1
    _HEADER=$2
    echo "$_HEADER   $_NR"
}



rm dyn_get.txt
touch  dyn_get.txt
echo "<script type=\"text/javascript\" src=\"xnee.js\"></script>"    >>  dyn_get.txt
echo "<script type=\"text/javascript\" src=\"menu_com.js\"></script>"  >>  dyn_get.txt

rm -f static_menu.txt 
cp templates/*.html   ./
cp templates/xnee_base.js ./xnee.js
perl -i -p -s -e 's/_XNEE_NR_MENU/$ENV{"NR_OF_MENUS"}/g' ./xnee.js
perl -i -p -s -e 's/_XNEE_BG_COLOR/ bgcolor=$ENV{"BG_COLOR"}/g' *.html

gen_doc_menu 1 "Docs"
gen_src_menu 2 "Source" "tars"
gen_bin_menu 3 "Binaries" "bin"
gen_sw_menu  4 "Links"
gen_about_menu 5 "About"



add_static_menu xnee_description.html static_menu.txt 
add_static_menu xnee_somewords.html   static_menu.txt 
add_static_menu index.html            static_menu.txt 
add_static_menu xnee_todo.html            static_menu.txt 
add_static_menu xnee_questions.html            static_menu.txt 
add_static_menu xnee_news.html            static_menu.txt 
add_static_menu xnee_information.html            static_menu.txt 
add_static_menu xnee_download.html            static_menu.txt 
add_static_menu xnee_documentation.html            static_menu.txt 
add_static_menu xnee_links.html            static_menu.txt 


#add_dynamic_menu xnee_description.html dyn_get.txt
#add_dynamic_menu xnee_somewords.html   dyn_get.txt
#add_dynamic_menu index.html            dyn_get.txt
#add_dynamic_menu xnee_todo.html            dyn_get.txt
#add_dynamic_menu xnee_questions.html            dyn_get.txt
#add_dynamic_menu xnee_news.html            dyn_get.txt
#add_dynamic_menu xnee_information.html            dyn_get.txt
#add_dynamic_menu xnee_download.html            dyn_get.txt
#add_dynamic_menu xnee_documentation.html            dyn_get.txt
#add_dynamic_menu xnee_links.html            dyn_get.txt

rem_dynamic_menu xnee_description.html dyn_get.txt
rem_dynamic_menu xnee_somewords.html   dyn_get.txt
rem_dynamic_menu index.html            dyn_get.txt
rem_dynamic_menu xnee_todo.html            dyn_get.txt
rem_dynamic_menu xnee_questions.html            dyn_get.txt
rem_dynamic_menu xnee_news.html            dyn_get.txt
rem_dynamic_menu xnee_information.html            dyn_get.txt
rem_dynamic_menu xnee_download.html            dyn_get.txt
rem_dynamic_menu xnee_documentation.html            dyn_get.txt
rem_dynamic_menu xnee_links.html            dyn_get.txt

