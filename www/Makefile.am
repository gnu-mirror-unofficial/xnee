###info_TEXINFOS=xnee.texi
xnee_TEXINFOS=xnee_error.texi version.texi dev_version.texi xnee_error.texi xnee_exampl.texi xnee_faq.texi xnee_install.texi xnee_intro.texi xnee_req.texi xnee_synch.texi xnee_usage.texi xnee_devel_build.texi  xnee_devel_over.texi  xnee_devel_down.texi  xnee_develop.texi



man1_MANS=xnee.1

#MAKEINFO = @MAKEINFO@ --no-split
TEXI2HTML = texi2html
DVI2PS = dvi2ps
PS2PDF = ps2pdf

###   TEXI2HTML_FLAGS = -split_chapter

info_TEXINFOS = xnee.texi xnee_develop.texi

CLEANFILES = xnee.acs  xnee.cvs  xnee.mss  xnee.prs \
	     xnee.ats  xnee.evs  xnee.fns  xnee.ovs \
             xnee.tmp  *.1       *.html    \
             stamp-vti *.pdf     *.txt     *.info 
##
##  ALL
##
all: html man info txt xnee.1


## ----------------------------- ##
## Other documentation formats.  ##
## ----------------------------- ##

html: xnee.html xnee_develop.html

man:  xnee.1

pdf:  xnee.pdf xnee_develop.pdf  

info: xnee.info xnee_develop.info 

txt:  xnee.txt xnee_man.txt xnee_develop.txt

ps:   xnee.ps xnee_develop.ps



# HTML
xnee.html: xnee.texi 
	$(TEXI2HTML) $(TEXI2HTML_FLAGS) $(srcdir)/xnee.texi
xnee_develop.html: xnee_develop.texi 
	$(TEXI2HTML) $(TEXI2HTML_FLAGS) $(srcdir)/xnee_develop.texi


# MAN
xnee.1: ../src/cli/xnee
	../src/cli/xnee --manpage > xnee.1

# MAN_TXT
xnee_man.txt: xnee.1
	nroff -man < xnee.1 | perl -pe 's/\cH.//g' | uniq > xnee_man.txt

# PDF for RedHat
#xnee.pdf: xnee.texi 
#	-$(TEXI2DVI) --pdf --batch $(srcdir)/xnee.texi
#xnee_develop.pdf: xnee_develop.texi 
#	-$(TEXI2DVI) --pdf --batch $(srcdir)/xnee_develop.texi

# PDF for Debian
xnee.pdf: xnee.ps 
	$(PS2PDF)  $(srcdir)/xnee.ps
xnee_develop.pdf: xnee_develop.texi 
	$(PS2PDF)  $(srcdir)/xnee_develop.ps


# DVI
xnee.dvi:
	$(TEXI2DVI) --batch $(srcdir)/xnee.texi

xnee_develop.dvi:
	$(TEXI2DVI) --batch $(srcdir)/xnee_develop.texi

# PS for RedHat
#xnee.ps: xnee.pdf
#	pdf2ps $(srcdir)/xnee.pdf
#xnee_develop.ps: xnee_develop.pdf
#	pdf2ps $(srcdir)/xnee_develop.pdf

# PS for Debian
xnee.ps: xnee.dvi
	$(DVI2PS) -c xnee.ps $(srcdir)/xnee.dvi

xnee_develop.ps: xnee_develop.dvi
	$(DVI2PS) -c xnee_develop.ps  $(srcdir)/xnee_develop.dvi


xnee.txt:
	makeinfo -o xnee.txt --no-headers --no-split --no-validate xnee.texi

xnee_develop.txt:
	makeinfo -o xnee_develop.txt --no-headers --no-split --no-validate xnee_develop.texi


develdoc: xnee.dox 
	\rm -fr alldocs/
	-mkdir alldocs
	-mkdir alldocs/devel
	\rm -fr latex
	doxygen xnee.dox 
	cd latex && make ps && make pdf


docs:  develdoc 
	cd doc && $(MAKE) $(AM_MAKEFLAGS) html pdf text info xnee.1 

.PHONY: html pdf text info man





