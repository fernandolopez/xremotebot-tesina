all: clean figures
	#latexmk  -jobname="main-modificando" -pdf main.tex
	latexmk -pdf main.tex

clean:
	latexmk -c
	#rm -f *.aux *.bbl *.out *.toc *.blg  *.lof *.lot *.fdb_latexmk

reallyclean: clean
	latexmk -C
	#rm -f main.pdf main.dvi

figures:
	make -C figures

.PHONY: figures clean reallyclean
